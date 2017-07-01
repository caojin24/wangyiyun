import React from 'react'
import NavLink from '../Common/NavLink'
import "./style/app.css"
import Player from './Player';
import {BackTop } from 'antd';

export default React.createClass({
  getInitialState(){
    return{
      user:''
    }
  },
  componentWillMount(){
    var val =this.getcookie('userName');
    if(val){
      this.setState({
        user:val
      })
    }
    

  },
  addCookie (key,value,data){
    var date=new Date();
    date.setDate(date.getDate()+data);//设置日期
    document.cookie=key+'='+encodeURI(value)+';expires='+date;
  },
  getcookie (key){
    var arr=decodeURI(document.cookie).split('; ');
    for(var i=0;i<arr.length;i++){
      var newarr=arr[i].split('=');
      if(key==newarr[0]){
        return newarr[1];
      }
    }
  },
  delCookie(key){
    this.addCookie(key,'value',-1);
  },
  quittt(){
    
    var login = document.getElementById('login');
    var user = document.getElementById('user');
    login.style.display = "block";
    user.style.display = "none";
    window.location.reload();
    
    this.delCookie('userName');
    this.setState({
      user:''
    })
    
  },
  componentDidMount(){
      var login = document.getElementById('login');
      var user = document.getElementById('user');
      if(this.state.user){
          login.style.display = "none";
          user.style.display = "block";
          var wel = document.getElementById('welcome');
          wel.innerHTML = "您好！"+this.state.user;
      }
  },
  render() {
    
    return (
      <div>
        <header>
          <ul role="nav">
            <li><NavLink to="/" onlyActiveOnIndex className="logo item"></NavLink></li>
            <li><NavLink to="/MyMusic" className="item">我的音乐</NavLink></li>
            <li><NavLink to="/Rank" className="item">排行榜</NavLink></li>
            <li><NavLink to="/List" className="item">歌单</NavLink></li>
            <li><NavLink to="/DownLoad" className="item">下载客户端</NavLink></li>
            <li id="login"><NavLink to="/Login" className="item" >登录</NavLink></li>
            <li id="user"><span id="welcome"></span> <span onClick={this.quittt} id="qu">退出</span></li>
            <li></li>
          </ul>
        </header>
        {this.props.children}
        <div className='back'>
            <div>
            <BackTop />
            </div>
        </div>
        <footer>
          <Player/>
        </footer>
      </div>
    )
  }
})
