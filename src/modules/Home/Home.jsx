import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import NavLink from '../Common/NavLink'; 
import Recommend from './Recommend';
import New from './New';
import List from './List';
import Login from './Login';
import HotDJ from './HotDJ';
import Singer from './Singer';
import "./style/home.css"; 
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      banner_child: [],
      index: 0,
      direction: null,
      bgurl: null
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount(){
    var that = this;
    fetch('http://www.jxderic.online/www/api/home-banner.php')
    .then(function(response) {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.setState({
        banner_child: data
      })
    });
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
      bgurl: this.state.banner_child[selectedIndex].bgurl
    });
  }

  render() {
    let bannerStyle = {
      backgroundImage: 'url(' + this.state.bgurl + ')',
      backgroundRepeat: "repeat-x"
    }

    const bannerLists = this.state.banner_child.map((list,index)=>{
        return  <Carousel.Item key={index}>
                  <img src={list.url}/>
                </Carousel.Item>
    })

    return (
      <div id="hommmm">
      <div className="content">
        <div className="banner-outer" style={bannerStyle}>
          <div className="banner-inner">
            <Carousel className="banner" interval={2000} onSelect={this.handleSelect}>
              {bannerLists}
            </Carousel>
            <div className="download">
              <NavLink to="/DownLoad"><div className="side-download">下载客户端</div></NavLink>
              <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div> 
          </div>
        </div>
        <div className="main clearfix">
          <div className="main-f">
            <div className="main-f1">
              <div className="main-wrap">
                <Recommend/>
                <div className="advertisement">
                  <img src="https://haitaoad.nosdn.127.net/ad.bid.material_5bac2697237a453da27bcbb15d6c191c?imageView&thumbnail=689x75&quality=100" alt="广告"/>
                </div>
                <New/>
                <List/>
              </div>
            </div>
          </div>
          <div className="main-r">
            <Login/>
            <Singer/>
            <HotDJ/>
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
    </div>
    )
  }

}
