import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./style/login.css";
import NavLink from '../Common/NavLink';
import fatch from "isomorphic-fetch";
import { browserHistory } from 'react-router';


const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  getInitialState(){
    return{
      value:''
    }
  }
  addCookie = (key,value,data)=>{
    var date=new Date();
    date.setDate(date.getDate()+data);//设置日期
    document.cookie=key+'='+encodeURI(value)+';expires='+date;
  }
  getcookie = (key)=>{
    var arr=decodeURI(document.cookie).split('; ');
    for(var i=0;i<arr.length;i++){
      var newarr=arr[i].split('=');//1次循环：[username,张三] 2次循环[password,456789]......
      if(key==newarr[0]){
        return newarr[1];//得到的是字符串
      }
    }
  }
  delCookie = (key)=>{
    this.addCookie(key,'value',-1);
  }
  componentWillMount(){
    var val =this.getcookie('to');
    this.setState({
      value:val
    })
  }
  handleSubmit = (e) => {
    var _this = this;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fatch("http://www.caojin.online/api/login.php",{
          method: "POST",  
          mode: "cors",  
          headers: {  
              "Content-Type": "application/x-www-form-urlencoded"  
          },
          body:'userName='+values.userName+'&password='+values.password
        }).then(function(response){
            if (response.status >= 400){
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(stories) {
          _this.addCookie('userName',values.userName,7);
            if(stories == 1){
              if(_this.state.value){
                  _this.delCookie('to');
                  if(_this.state.value == 'my'){
                    browserHistory.push('/MyMusic');
                  }else{
                    window.location.reload();
                    browserHistory.push(`/Detail/${_this.state.value}`);     
                  }
               
              }else{
                window.location.reload();// 加上原生的刷新           
                browserHistory.push('/');//react-router 退后不刷新                     
              }
            }       
            if(stories == 2){
              var wrong = document.getElementById('wrong');
              wrong.style.display = 'block';
            }
        });
      }
    });
  }

  focus = () =>{
    var wrong = document.getElementById('wrong');
    wrong.style.display = 'none';
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="loginnn">
        <div className="hp">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <p id="wrong">账号或密码错误</p>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入您的用户名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" onFocus={this.focus}/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入你的密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" id="password" onFocus={this.focus}/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住我</Checkbox>
              )}
              <a className="login-form-forgot" href="">忘记密码？</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              或 <a href="javascript:;"><NavLink to="/Register">注册</NavLink></a>
            </FormItem>
          </Form>  
        </div>
        <div className="footer">
            <div className="ft">
              <div className="copy">
                <p>
                  <a href="//music.163.com/about" target="_blank" className="s-fc4">关于网易</a><span className="line">|</span>
                  <a href="//help.163.com/" target="_blank" className="s-fc4">客户服务</a><span className="line">|</span>
                  <a href="//music.163.com/html/web2/service.html" target="_blank" className="s-fc4">服务条款</a><span className="line">|</span>
                  <a href="//sitemap.163.com/" target="_blank" className="s-fc4">网站导航</a><span className="line">|</span>
                  <a id="g_feedback" href="#" className="s-fc4"  hidefocus="true">意见反馈</a>
                </p>
                <p className="s-fc3">
                  <span className="sep">网易公司版权所有©1997-2017</span>杭州乐读科技有限公司运营：<a href="http://p1.music.126.net/-DB9zs1FAJq8vg7HOb-yOQ==/3250156395654666.jpg" target="_blank" className="s-fc3">浙网文[2015] 0415-135号</a>
                </p>
              </div>
              <ul className="enter f-fr">
                <li>
                  <a className="logo logo-musician f-tid" href="//music.163.com/recruit" target="_blank">独立音乐人</a>
                </li>
                <li>
                  <a className="logo logo-topic f-tid" href="//music.163.com/topic/recruit" target="_blank">音乐专栏</a>
                </li>
                <li>
                  <a className="logo logo-midea f-tid" href="//music.163.com/topic/selfmedia" target="_blank">自媒体</a>
                </li>
                <li>
                  <a className="logo logo-reward f-tid" href="//music.163.com/web/reward" target="_blank">赞赏</a>
                </li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;