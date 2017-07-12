import React from 'react';
import "./css/Rank.css";
import {Nav,NavItem,Button,ButtonToolbar,ListGroupItem,ListGroup} from 'react-bootstrap'; 
import L1 from './images/l1.jpg'; 
import L2 from './images/l2.jpg'; 
import L3 from './images/l3.jpg'; 
import L4 from './images/l4.jpg'; 
import LL5 from './images/ll5.jpg'; 
import LL6 from './images/ll6.jpg'; 
import LL7 from './images/ll7.jpg'; 
import LL8 from './images/ll8.jpg'; 
import LL9 from './images/ll9.jpg'; 
import LL10 from './images/ll10.jpg'; 
import LL11 from './images/ll11.jpg'; 
import LL12 from './images/ll12.jpg'; 
import LL13 from './images/ll13.jpg';
import LL14 from './images/ll14.jpg'; 
import LL15 from './images/ll15.jpg'; 
import LL16 from './images/ll16.jpg'; 
import LL17 from './images/ll17.jpg'; 
import Big1 from './images/big1.jpg';
import Big2 from './images/big2.jpg';
import Big3 from './images/big3.jpg';
import Big4 from './images/big4.jpg';
import fetch from "isomorphic-fetch";
export default React.createClass({
    // 初始状态
    getInitialState(){
        return{
            value:'',
            data:[],
            pic:''
        }
    },   
      // ajax请求
    componentWillMount(){
    var _this = this;
    fetch("http://bxu2713290520.my3w.com/api/nowlist.php").then(function(response){
      if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(stories) {
        _this.setState({
          data:stories.song_list
        }) 
    });
   },
   //   鼠标事件
    mouseOver(event){
        event.preventDefault();
         var icon = document.getElementById('icon');
        var key=event.target
    },
    // 点击播放
    onnplay(event){
        event.preventDefault();
        var target = event.currentTarget;
        var index = target.getElementsByTagName('i')[0].innerHTML-1;//点击第几个
        
        var n = Math.floor(Math.random()*4);
        var s = document.getElementsByTagName('audio')[0];//底部播放器的audio标签
        var p = document.getElementById('pauuu');//播发按钮
        var i = document.getElementById('songimg');//歌曲图片
        var name = document.getElementById('songnnn');//歌名
        var songer = document.getElementById('songer');//作者
        
        s.setAttribute('src',"http://bxu2713290520.my3w.com/api/audio/"+n+".mp3");
        i.setAttribute('src',this.state.data[index].pic_small);
        name.innerHTML = this.state.data[index].album_title;
        songer.innerHTML = this.state.data[index].author;    
        p.click();
        p.setAttribute("class","pause");
        s.play();
    
    },
    oldlist(event){
        event.preventDefault();
        var _this = this;
        fetch("http://bxu2713290520.my3w.com/api/oldlist.php").then(function(response){
        if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(stories) {
            _this.setState({
            data:stories.song_list
            }) 
        });
    },
    
   newlist(event){
        event.preventDefault();
        var tit = document.getElementById("tit");
        var bigImg = document.getElementById('img');
        var n = document.getElementById('bang2').innerHTML;
        bigImg.setAttribute('src',Big2);  
        tit.innerHTML =n;
        var _this = this;
        fetch("http://bxu2713290520.my3w.com/api/nowlist.php").then(function(response){
        if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(stories) {
            _this.setState({
            data:stories.song_list
            }) 
        });
    },
    oldlist2(event){
        event.preventDefault();
        var tit = document.getElementById("tit");
        var bigImg = document.getElementById('img');
        var n = document.getElementById('bang3').innerHTML;
        bigImg.setAttribute('src',Big3);  
        tit.innerHTML =n;
         var _this = this;
        fetch("http://bxu2713290520.my3w.com/api/oldlist.php").then(function(response){
        if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(stories) {
            _this.setState({
            data:stories.song_list
            }) 
        });
    },
    hotlist(event){
        event.preventDefault();
        var tit = document.getElementById("tit");
        var bigImg = document.getElementById('img');
        var n = document.getElementById('bang4').innerHTML;
        bigImg.setAttribute('src',Big4);  
        tit.innerHTML =n;
        var _this = this;
        fetch("http://bxu2713290520.my3w.com/api/hotlist.php").then(function(response){
        if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(stories) {
            _this.setState({
            data:stories.song_list
            }) 
        });
    },
    
   
    render(){     
        // 列表循环
      const listShows = this.state.data.map((data,index)=>{
            return  <ListGroupItem href="javascript:;">                       
                        <div className="listcon clearfloat" onMouseOver={this.mouseOver} onClick={this.onnplay}>
                            <i>{index+1}</i>                     
                            <img src={data.pic_small}/> 
                            <em  key={index}></em>                   
                            <p>{data.album_title}<span></span></p>
                            <div id="icon">
                                <a href="javascript:;" className="a1"></a>
                                <a href="javascript:;" className="a2"></a>
                                <a href="javascript:;" className="a3"></a>
                                <a href="javascript:;" className="a4"></a>
                            </div>
                            <div className="singer_list">
                                {data.author}                           
                            </div>
                        </div>                     
                    </ListGroupItem>    
        })  
        // 长度


        return  (          
          <div>
              {/*音频播放*/}
            <div className="rankcon clearfloat">
              {/*左边部分*/}
               <div className="ranklef"> 
                 <h4 id='a'>音乐特色榜</h4>               
                    <Nav bsStyle="pills" stacked activeKey={1} onClick={this.oldlist}>                     
                      <NavItem eventKey={2} id="tcheck">
                          <div className="feature clearfloat">
                            <img src={L1} id="img1"/>
                            <div className="feature_word">
                                <p id="bang1">云音乐飙升榜</p>
                                <span>每天更新</span>
                            </div>
                         </div>
                      </NavItem>
                      <NavItem eventKey={2} title="Item" onClick={this.newlist}>
                            <div className="feature clearfloat">
                                <img src={L2} id="img2"/>
                                <div className="feature_word">
                                    <p id="bang2">云音乐新歌榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={3} title="Item" onClick={this.oldlist2}>
                            <div className="feature clearfloat">
                                <img src={L3} id="img3"/>
                                <div className="feature_word">
                                    <p id="bang3">云音乐原唱榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={4} title="Item" onClick={this.hotlist}>
                            <div className="feature clearfloat">
                                <img src={L4} id="img4"/>
                                <div className="feature_word">
                                    <p id="bang4">云音乐热歌榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                    </Nav>
              {/*全球媒体榜*/}
                    <h4>全球媒体榜</h4>               
                    <Nav bsStyle="pills" stacked activeKey={1}>                     
                      <NavItem eventKey={2} title="Item">
                          <div className="feature clearfloat">
                            <img src={LL5}/>
                            <div className="feature_word">
                                <p>云音乐飙升榜</p>
                                <span>每天更新</span>
                            </div>
                         </div>
                      </NavItem>
                      <NavItem eventKey={2} title="Item">
                            <div className="feature clearfloat">
                                <img src={LL6}/>
                                <div className="feature_word">
                                    <p>云音乐飙升榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={3} title="Item">
                            <div className="feature clearfloat">
                                <img src={LL7}/>
                                <div className="feature_word">
                                    <p>云音乐飙升榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={4} title="Item">
                            <div className="feature clearfloat">
                                <img src={LL8}/>
                                <div className="feature_word">
                                    <p>云音乐飙升榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={4} title="Item">
                            <div className="feature clearfloat">
                                <img src={LL9}/>
                                <div className="feature_word">
                                    <p>云音乐飙升榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={4} title="Item">
                            <div className="feature clearfloat">
                                <img src={LL10}/>
                                <div className="feature_word">
                                    <p>云音乐飙升榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={4} title="Item">
                            <div className="feature clearfloat">
                                <img src={LL11}/>
                                <div className="feature_word">
                                    <p>云音乐飙升榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={4} title="Item">
                            <div className="feature clearfloat">
                                <img src={LL12}/>
                                <div className="feature_word">
                                    <p>云音乐飙升榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={4} title="Item">
                            <div className="feature clearfloat">
                                <img src={LL13}/>
                                <div className="feature_word">
                                    <p>云音乐飙升榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={4} title="Item">
                            <div className="feature clearfloat">
                                <img src={LL14}/>
                                <div className="feature_word">
                                    <p>云音乐飙升榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={4} title="Item">
                            <div className="feature clearfloat">
                                <img src={LL15}/>
                                <div className="feature_word">
                                    <p>云音乐飙升榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={4} title="Item">
                            <div className="feature clearfloat">
                                <img src={LL16}/>
                                <div className="feature_word">
                                    <p>云音乐飙升榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>
                      <NavItem eventKey={4} title="Item">
                            <div className="feature clearfloat">
                                <img src={LL17}/>
                                <div className="feature_word">
                                    <p>云音乐飙升榜</p>
                                    <span>每天更新</span>
                                </div>
                            </div>
                      </NavItem>

                    </Nav>
               </div>
               {/*右边部分*/}
              <div className="rankrig">
                {/*右边上面部分*/}
                <div className="rig_top clearfloat">
                    <div className="picbord">
                          <img src={Big1} id="img"/>
                    </div>                    
                    <div className="rig_top_rig">
                        <h2 id="tit">云音乐飙升榜</h2>
                        <p>最近更新：06月27日 （每天更新）</p>
                        <ButtonToolbar>
                            <Button bsStyle="primary" bsSize="small" className="bbtn palybtn" onClick={this.onnplay}>播放</Button>
                            <Button bsSize="small" className="bbtn loginbtn">button</Button>
                            <Button bsSize="small" className="bbtn reprintbtn">button</Button>
                            <Button bsSize="small" className="bbtn loadbtn">下载</Button>
                            <Button bsSize="small" className="bbtn commentbtn">button</Button>
                        </ButtonToolbar>                   
                    </div>                 
                </div>
                {/*歌曲列表部分*/}
                <div className="songli">
                    <h2>歌曲列表</h2><span>10首歌</span>
                </div>
                <div className="list">
                  {/*循环*/}                               
                      <ListGroup>                        
                          <div className="nav">
                            <span className="snull">标题</span>
                            <span className="stitle">标题</span>
                            <span className="stime">时长</span>
                            <span className="ssinger">歌手</span>
                        </div>                       
                         {listShows}                                       
                      </ListGroup>
                     
                </div>
              </div>
            </div>
          </div>        
        )                  
    }
    
})
