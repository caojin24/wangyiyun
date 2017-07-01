import React from 'react';
import WhatwgFetch from 'whatwg-fetch';
import banner1 from './images/banner-aos.png'; 
import banner2 from './images/banner-ios.png';  
import banner3 from './images/banner-pc.png'; 
import b1 from './images/b1.jpg'; 
import b2 from './images/b2.jpg'; 
import b3 from './images/b3.jpg';
import b4 from './images/b4.jpg'; 
import b5 from './images/b5.jpg'; 
import b6 from './images/b6.png'; 
import b7 from './images/b7.png'; 
import b8 from './images/b8.jpg';
import b9 from './images/b9.jpg'; 
import b10 from './images/b10.png'; 
import code from './images/code.png'; 
import "./style/DownLoad.css"; 

import { Carousel } from 'antd';

export default React.createClass({
  render() {
    return (
    <div id="doooo">  
      <div className="content">
        <div className="top">
          <div className="carouselCon">
    
                <Carousel easing="fade" dots="false" speed={500}  autoplay>                  
                  <div>                    
                       <img className="carouselimg" alt="545x465" src={banner1}/>                   
                  </div>
                  <div>             
                      <img className="carouselimg" alt="545x465" src={banner2}/>                   
                   </div>
                  <div>               
                      <img className="carouselimg" alt="545x465" src={banner3}/>                   
                  </div>
                  
                </Carousel>
      
          </div>
          <div className="loadList">
            <a href="" >
              <i className="loadanzhuo"></i>
              <em>安卓版</em>
              <em>v4.1.1</em>
            </a>
            <a href="">
              <i  className="loadiphone"></i>
              <em>iphone版</em>
              <em>v4.1.1</em>
            </a>
            <a href="" >
              <i className="loadiphone"></i>
              <em>ipad</em>
              <em>v1.6.0</em>
            </a>
            <a href="" >
              <i className="loadiphone"></i>
              <em>mac</em>
              <em>v1.5.6</em>
            </a>
            <a href="" >
              <i className="loadpc"></i>
              <em>pc</em>
              <em>v2.2.0</em>
            </a>
            <a href="" >
              <i className="loadpc"></i>
              <em>uwp</em>
              <em>v1.2.3</em>
            </a>
            <a href="">
              <i className="loadpc"></i>
              <em>wp</em>
              <em>v1.5.0</em>
            </a>
            <a href="" className="loadlinux">
              <i className="loadlinux"></i>
              <em>linux</em>
              <em>v1.0.0</em>
            </a>
            <em className="circle"></em>
            <span>日志更新</span>
          </div>
        </div>
        <div className="two_w">
           <div className="two">
              
              <div className="two_word">
                <h3>千万曲库 首首CD音质</h3>
                <p>囊括百万无损SQ音乐，你在用手机听歌时，
                 也能感受到纤毫毕现的CD音质，更能免费离线收听</p>
              </div>
              <img src={b1}/>
              
            </div>
        </div>
        <div className="two_w bggrey">
           <div className="two">
              <img src={b2} className="litwo"/>
              <div className="two_word">
                <h3>千万曲库 首首CD音质</h3>
                <p>陶喆，羽泉等千位明星已入驻，亲自创建私房歌单，录制独 
家DJ节目，推荐他们心中的好音乐</p>
              </div>        
            </div>
        </div>
       <div className="two_w">
           <div className="two">
              <div className="two_word">
                <h3>千万曲库 首首CD音质</h3>
                <p>你可以关注明星、DJ和好友，通过浏览他们的动态、收藏和<br/>
分享，发现更多全新好音乐</p>
              </div>
              <img src={b3} className="lithree"/>
            </div>
        </div>
        <div className="two_w bggrey">
           <div className="two">
              <img src={b4} className="lifour"/>
              <div className="two_word">
                <h3>千万曲库 首首CD音质</h3>
                <p>只要一个帐号，你就可以同步在手机、电脑上创建、收藏 
的歌单，随时随地畅享好音乐</p>
              </div>             
            </div>
        </div>
        <div className="two_w">
           <div className="two">
              <div className="two_word">
                <h3>千万曲库 首首CD音质</h3>
                <p>歌曲很动听却不知道歌名，歌名在嘴边却想不起来…… 
用听歌识曲功能，几秒钟就知道歌名</p>
              </div>
              <img src={b5} className="lifive"/>
            </div>
        </div>
        <div className="btn_load_w bggrey">  
           <div className="btn_load">
             <h3>网易云音乐</h3>
             <p>下载网易云音乐客户端，随时随地畅享动听好音乐</p>
                <div className="btn_load_one">
                  <img src={b8}/>
                  <a href="">pc版下载</a>
                </div> 
                <div className="btn_load_two">
                  <img src={b6}/>
                  <a href="">iphone版下载</a>
                </div> 
                <div className="btn_load_three">
                  <img src={b9}/>
                  <a href="">ipad版下载</a>
                </div> 
                <div className="btn_load_four">
                  <img src={b7}/>
                  <a href="">安卓版下载</a>
                </div> 
                <div className="btn_load_five">
                  <img src={b10}/>
                  <a href="">uwp版下载</a>
                </div>     
            </div>
        </div>
        <div className="bottom_w">
          <div className="bottom">
            <div className="bottom_left">
              <p> 
                <a href="">关于网易</a>
                <span>|</span>
                <a href="">客户服务</a>
                <span>|</span>
                <a href="">服务条款</a>
                <span>|</span>
                <a href="">网站导航</a>
                <span>|</span>
                <a href="">意见反馈</a>
                <span>|</span>
              </p>
              <p className="word">网易公司版权所有©1997-2017杭州乐读科技有限公司运营：浙网文[2015] 0415-135号</p>
            </div>
            <ul>
              <li className="foot_enter1"><a href=""></a></li>
              <li className="foot_enter2"><a href=""></a></li>
              <li className="foot_enter3"><a href=""></a></li>
              <li className="foot_enter4"><a href=""></a></li>
            </ul>
          </div>
          
        </div>
        <img src={code} className="code"/>
        
    </div>
  </div>
    )   
  }
})

