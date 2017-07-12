import React from 'react';
import NavLink from '../Common/NavLink';
import "./style/mymusic.css";
import fatch from "isomorphic-fetch";
import { Card, Col, Row } from 'antd';
import { Layout, Menu, Breadcrumb, Icon} from 'antd';
import PropTypes from 'prop-types';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default React.createClass({
  getInitialState(){
    return{
      value:'',
      data:'',
      list:'',
      src:'',
      img:'',
      name:'',
      author:''
    }
  },
  getcookie(key){
    var arr=decodeURI(document.cookie).split('; ');
    for(var i=0;i<arr.length;i++){
      var newarr=arr[i].split('=');
      if(key==newarr[0]){
        return newarr[1];//得到的是字符串
      }
    }
  },
  addcookie(key,value){
    var date=new Date();
    date.setDate(date.getDate()+1);//设置日期
    document.cookie=key+'='+encodeURI(value)+';expires='+date;
  },
  componentWillMount(){
    var _this = this;
    fatch("http://bxu2713290520.my3w.com/api/my.php").then(function(response){
      if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(stories) {
        _this.setState({
          data:stories.result.list
        }) 
        console.log(stories.result.list);
    });
  },
  componentDidMount(){
    var val = this.getcookie('userName');
    var my = document.getElementById('mymusic');
    var bg = document.getElementById('background');
    var login = document.getElementsByTagName('li')[5];
    var user = document.getElementById('user');
   
    if(val){
      bg.style.display="none";
      my.style.display="block";
      login.style.display = "none";
      user.style.display = "block";
      var wel = document.getElementById('welcome');
      wel.innerHTML = "您好！"+val;
    }else{
      bg.style.display="block";
      my.style.display="none";
    }
  },
  click(){
    var arr=[];
    var n = Math.floor(Math.random()*80);
    for(var i=n;i<(n+12);i++){
      arr.push(
        this.state.data[i]
      )   
    };
    this.setState({
      list:arr
    })
  },
  addto(){
     this.addcookie('to','my');
  },
  onPlay(im,na,au){

    this.setState({
      img:im,
      name:na,
      author:au
    });
    var n = Math.floor(Math.random()*4);
    var s = document.getElementsByTagName('audio')[0];//底部播放器的audio标签
    var p = document.getElementById('pauuu');//播发按钮
    var i = document.getElementById('songimg');//歌曲图片
    var name = document.getElementById('songnnn');//歌名
    var songer = document.getElementById('songer');//作者
    
    s.setAttribute('src',"http://bxu2713290520.my3w.com/api/audio/"+n+".mp3");
    i.setAttribute('src',this.state.img);
    name.innerHTML = this.state.name;
    songer.innerHTML = this.state.author;    
    p.click();
    p.setAttribute("class","pause");
    s.play();
  },
  render(){
    var jsx = []; 

    var  result = null;
    
    if(this.state.list){
      result=this.state.list;
    }else{
      result=this.state.data;
    }
    
    for(var i =0;i<12;i++){
        jsx.push(
          <ListChild key={i} {...result[i]} callbackParent={this.onPlay}/>
        )
    } 

    var s = this.state.src;
    return (
      <div id="myyyyyy">
        <div className="bg" >
          <div className="content" id="background">
            <div className="n-pglg">
                <NavLink to="/Login"><a  href="javascript:;" className="btn" onClick={this.addto}>立即登陆</a></NavLink>
            </div>
          </div>
          <div className="my" id="mymusic">
            <Layout>
              <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1','sub2','sub3']}
                    style={{ height: '100%', borderRight: 0 }}
                  >
                    <SubMenu key="sub1" title={<span><Icon type="user" />我喜欢的音乐</span>}>
                      <Menu.Item key="1"><span onClick={this.click}>抒情</span></Menu.Item>
                      <Menu.Item key="2"><span onClick={this.click}>伤感</span></Menu.Item>
                      <Menu.Item key="3"><span onClick={this.click}>怀旧</span></Menu.Item>
                      <Menu.Item key="4"><span onClick={this.click}>摇滚</span></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="like" />收藏的歌单</span>}>
                      <Menu.Item key="5"><span onClick={this.click}>周式情歌</span></Menu.Item>
                      <Menu.Item key="6"><span onClick={this.click}>共和时代</span></Menu.Item>
                      <Menu.Item key="7"><span onClick={this.click}>魔力红</span></Menu.Item>
                      <Menu.Item key="8"><span onClick={this.click}>经典粤语歌</span></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification" />喜欢的歌手</span>}>
                      <Menu.Item key="9"><span onClick={this.click}>周杰伦</span></Menu.Item>
                      <Menu.Item key="10"><span onClick={this.click}>打雷姐</span></Menu.Item>
                      <Menu.Item key="11"><span onClick={this.click}>共和时代</span></Menu.Item>
                      <Menu.Item key="12"><span onClick={this.click}>李宗盛</span></Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                  <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    {jsx}
                  </Content>
                </Layout>
              </Layout>
            </Layout>
          </div>
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
    )
  }
});

class ListChild extends React.Component{
  songid = ()=>{
    var _this = this;
    var songid = this.props.song_id;
    console.log(songid);
    fatch("http://bxu2713290520.my3w.com/api/play.php",{
          method: "POST",  
          mode: "cors",  
          headers: {  
              "Content-Type": "application/x-www-form-urlencoded"  
          },
          body:'songid='+songid
        }).then(function(response){
            if (response.status >= 400){
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(stories) {
          var img = stories.songinfo.pic_big;
          var name = stories.songinfo.album_title;
          var author = stories.songinfo.author;
          _this.props.callbackParent(img,name,author);//回调函数
        })
  }
  render(){
    var data = this.props;
    var card =null;
    if(data){
      card = (
         <Card style={{ width: 150 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" className="listImg" src={data.pic_big} />
            </div>
            <div className="custom-card">
              <h3>{data.title}</h3>
              <p className="aut">{data.author}</p>
              <a href="javascript:;" className="play" onClick={this.songid}><Icon type="play-circle-o" style={{ fontSize: 16, color: '#08c' }}/></a>
            </div>
          </Card>
        )
    }
    return(
      <div className="card">
          {card}
      </div>
        
    )
    
  }
}


