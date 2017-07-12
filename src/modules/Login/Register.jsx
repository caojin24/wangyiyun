import React from 'react';
import { browserHistory } from 'react-router';

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

import fatch from "isomorphic-fetch";

import "./style/register.css";

import { Carousel } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

var num = 0;


class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
          if(values.agreement && values.nickname && values.password && values.email){
                console.log('Received values of form: ', values);
                
                fetch('http://bxu2713290520.my3w.com/api/req.php',{
                    method: "POST",  
                    mode: "cors",  
                    headers: {  
                        "Content-Type": "application/x-www-form-urlencoded"  
                    },
                    body:"agreement="+values.agreement+"&nickname="+values.nickname+"&password="+values.password+"&email="+values.email
                });
                browserHistory.push('Login');
                
          }else{
                var clause = document.getElementById("clause");
                clause.style.display = "inline";
          }
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的秘密不一样!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    
    const form = this.props.form;
    const pw = form.getFieldValue('password');
    
    if(pw.length>0){
        if(pw.length<6 || pw.length>20){
            callback("请设置6～20位数字、字母、下划线格式的秘密!");
        }else {
            form.validateFields(['confirm'], { force: true });
            callback();           
        }
    }else{
        callback();
    }
  }

  pwStrength = () => {
    var strong = document.getElementById('strong');
    var pw = document.getElementById('password').value;
    const a = /[a-z]/;
    const A = /[A-Z]/;
    const num = /\d/;
    const sym = /\_\-/;
    var strength = 0;//密码强度
    if(a.test(pw)){
        strength++;
    }
    if(A.test(pw)){
        strength++;
    }
    if(num.test(pw)){
        strength++;
    }
    if(sym.test(pw)){
        strength++;
    }
    console.log(strength);
    if(pw.length>=6 && pw.length<20){
        if(strength == 1){   
            strong.innerHTML = "密码设置强度为弱";
        }
        if(strength ==2){
            strong.innerHTML = "密码设置强度为中";
        }
        if(strength >=3){
            strong.innerHTML = "密码设置强度为强";
        }
    }else{
        strong.innerHTML = "";
    }
  }
    kill = ()=>{    

        var clause = document.getElementById("clause");
        var display = getComputedStyle(clause)['display'];
        if(num == 0){
            num++;
            return;
        }
        if(display !== "none"){
            clause.style.display = "none";
            
        }else{
            clause.style.display = "inline";
        } 
    }

  nickNameCheckout = (rule, value, callback)=>{
    var _this = this;
   console.log(this.props.form.getFieldValue('nickname'))
    fetch('http://bxu2713290520.my3w.com/api/req.php',{
        method: "POST",  
        mode: "cors",  //是否跨域
        headers: {   //设置头文件
            "Content-Type": "application/x-www-form-urlencoded"  
        },
        body:"&nickname="+_this.props.form.getFieldValue('nickname') //数据传输
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
        console.log(stories)
        if(stories == 1){
            callback("账号已注册");
        }else{
            callback();
        }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    

   

    return (
    <div id="regggg">
        <div className="reg">

             <Carousel autoplay>
                <div > <div className="car1"></div></div>
                <div > <div className="car2"></div></div>
                <div > <div className="car3"></div></div>
            </Carousel>


            <Form onSubmit={this.handleSubmit} className="register-form">

                <FormItem
                {...formItemLayout}
                label={(
                    <span>
                    用户名&nbsp;
                    <Tooltip title="请设置用户名?">
                        <Icon type="question-circle-o" />
                    </Tooltip>
                    </span>
                )}
                hasFeedback
                >
                {getFieldDecorator('nickname', {
                    rules: [{ 
                        required: true, message: '请输入你的昵称!' 
                    },{
                        validator:this.nickNameCheckout
                    }
                    ],
                })(
                    <Input id="checkout" />
                )}
                </FormItem>

                <FormItem
                {...formItemLayout}
                label="电子邮箱"
                hasFeedback
                >
                {getFieldDecorator('email', {
                    rules: [{
                    type: 'email', message: '你输入的不是邮箱!',
                    }, {
                    required: true, message: '请输入你的邮箱!',
                    }],
                })(
                    <Input/>
                )}
                </FormItem>
                <FormItem
                {...formItemLayout}
                label="密码"
                hasFeedback
                >
                {getFieldDecorator('password', {
                    rules: [{
                    required: true, message: '请设置6～20位数字、字母、下划线格式的秘密!'
                    }, {
                    validator: this.checkConfirm,
                    }],
                })(
                    <Input type="password" onInput={this.pwStrength} id="password"/>
                    
                )}

                <span id="strong"></span>
                </FormItem>
                
                <FormItem
                {...formItemLayout}
                label="确认密码"
                hasFeedback
                >
                {getFieldDecorator('confirm', {
                    rules: [{
                    required: true, message: '请确认密码!',
                    }, {
                    validator: this.checkPassword,
                    }],
                })(
                    <Input type="password" onBlur={this.handleConfirmBlur} />
                )}
                </FormItem>
            
            
                
            
                <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                })(
                    <Checkbox  onClick={this.kill} >我同意 <a href="">用户协议</a></Checkbox>
                    
                )}
                <a href="javascript:;" id="clause">请接受相关政策</a>
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" size="large">注册</Button>
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

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;