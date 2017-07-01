import React from 'react'
import './style/detail.css'
import $ from 'jquery'
import NavLink from '../Common/NavLink'

//引入ant design
import {Input, Button, Icon} from 'antd';

var v = null;
//组件
function  getcookie(key){
    var arr=decodeURI(document.cookie).split('; ');
    for(var i=0;i<arr.length;i++){
    var newarr=arr[i].split('=');
    if(key==newarr[0]){
        return newarr[1];//得到的是字符串
    }
    }
}
function addcookie(key,value){
    var date=new Date();
    date.setDate(date.getDate()+1);//设置日期
    document.cookie=key+'='+encodeURI(value)+';expires='+date;
}
var num;
// 数据获取函数
function getComments () {
    $("#comments").html('');
    $.getJSON("http://www.songjun.online/www/api/inital-data.php", function (json) {
        var newjson = json.slice(0, 10);
        $.each(newjson, function (index, array) {

            var text = "<li><div class='comms' style={{ padding:10px, marginTop:20px}} ><i style={{ font" +
                    "Size: 18,color:#108ee9 }}>标题：" + array["user"] + "</i><p class='text'>" + array["comment"] + "</p><span>" + array["addtime"] + "</span></div></li>";
            // text.insertBefore($("#comments"));
            $("#comments").append(text);
        });
    });
}

export default class Detail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            src: '',
            title: '',
            lists: []
        }
        
    }
    
    //写入数据
    handleSubmit(event) {
        var user = getcookie('userName');
        //判断是否登录 写入数据
        if(user){
            $('#ball').hide();
            var comments = $("#comments");
            event.preventDefault();
            var user = $("#userr").val();
            var text = $("#text").val();
            // 表单输入为空验证
            if (user == '' && text == '') {
                
                $("#message")
                    .show()
                    .html("请输入评论内容！")
                    .css('color', 'red')
                    .fadeOut(3000);
                return;
            } else {
                $.ajax({
                    type: "POST",
                    url: 'http://www.songjun.online/www/api/comments.php',
                    data: "user=" + user + "&text=" + text,
                    success: function (msg) {
                        if (msg == 1) {
                            $("#userr").val('');
                            $("#text").val('');
                            $("#message")
                                .show()
                                .html("发表成功！")
                                .fadeOut(3000);
                            $("#txt").attr("value", "");
                           getComments();

                        } else {
                            $("#message")
                                .show()
                                .html(msg)
                                .fadeOut(3000);
                        }
                    }
                });
            }
        }else{
            $('#userr').blur();
            $('#ball').show();
            addcookie('to',num); 
        }
    }
    
    getcook(event){
        event.preventDefault();
        var user = getcookie('userName');
        if(user){
            $('#ball').hide();
            
        }else{
            $('#userr').blur();
            $('#ball').show();
            addcookie('to',num); 
        }
        
    }
    close(){
        $('#ball').css('display','none');
    }

    // 歌曲播放
    oneplay(event){
    
        var n = Math.floor(Math.random()*4);
        var s = document.getElementsByTagName('audio')[0];//底部播放器的audio标签
        var p = document.getElementById('pauuu');//播发按钮
        var i = document.getElementById('songimg');//歌曲图片
        var name = document.getElementById('songnnn');//歌名
        var songer = document.getElementById('songer');//作者
        
        
        s.setAttribute('src',"http://www.caojin.online/api/audio/"+n+".mp3");
        i.setAttribute('src',v.lists[0].pic_big);
        name.innerHTML = v.lists[0].title;
        songer.innerHTML = v.lists[0].author;    
        p.click();
        p.setAttribute("class","pause");
        s.play();
       
    }

    //点歌
 onplay(event){
      event.preventDefault();
        var target = event.currentTarget;
        var index = target.getElementsByTagName('i')[1].innerHTML;//点击第几个
    
        var n = Math.floor(Math.random()*4);
        var s = document.getElementsByTagName('audio')[0];//底部播放器的audio标签
        var p = document.getElementById('pauuu');//播发按钮
        var i = document.getElementById('songimg');//歌曲图片
        var name = document.getElementById('songnnn');//歌名
        var songer = document.getElementById('songer');//作者
        
        
        s.setAttribute('src',"http://www.caojin.online/api/audio/"+n+".mp3");
        i.setAttribute('src',v.lists[index].pic_big);
        name.innerHTML = v.lists[index].title;
        songer.innerHTML = v.lists[index].author;    
        p.click();
        p.setAttribute("class","pause");
        s.play();
       
    }
    render() {
         v = this.state;
        const listShows = this
            .state
            .lists
            .map((list, index) => {
                return <tr >
                    <td className="t1">
                        <div className='icon'  onClick={this.onplay}>
                            <Icon
                                id={parseInt(list.song_id)}
                               
                                className="ply"
                                type="play-circle-o"/>
                                 <i className='num' >{index}</i>
                        </div>
                    </td>
                    <td className="t2">
                       
                        <NavLink to={`/SongDetail/${list.song_id}`}>{list.title}</NavLink>
                    </td>
                    <td className="t3">{list.author}</td>
                    <td className="t4">{list.album_title}</td>
                    <td className="t5">
                        <div className='icon'>
                            <a
                                href='http://yinyueshiting.baidu.com/data2/music/acde8c2f34538234c41893a07945f6b5/540719546/540719546.mp3?xcode=e7487910ba58c2ec96a2d3f13bf86a03'>
                                <Icon className="download" type="download"/>
                            </a>
                        </div>
                    </td>
                </tr>
            })
        return (
            <div className='list' id="listDetail">
                <div className='info'>
                    <div className='fl img-wrap'>
                        <img className='img' src={this.state.src}/>
                    </div>
                    <div className='tip fl'>
                        <h3>{this.state.title}</h3>
                        <p className='btn'>
                            <Button type="primary"  onClick={this.oneplay} icon="play-circle" size={'large'}>播放</Button>
                            <Button type="primary" icon="download" size={'large'}>下载</Button>
                        </p>
                    </div>
                </div>

                <div className='songs'>
                    <div>
                        <h3>歌曲列表</h3>
                        <table className='m-table'>
                            <thead>
                                <tr>
                                    <th className="w1">
                                        <div className="wp">播放</div>
                                    </th>
                                    <th className="w2">
                                        <div className="wp">歌曲标题</div>
                                    </th>
                                    <th className="w3">
                                        <div className="wp">歌手</div>
                                    </th>
                                    <th className="w4">
                                        <div className="wp">专辑</div>
                                    </th>
                                    <th className="w5">
                                        <div className="wp">下载</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='t-body'>
                                {listShows}
                            </tbody>

                        </table>
                    </div>

                </div>
             
                <div className='comments'>
                    <div>
                        <h3>发表评论</h3>
                        <form
                            className="comForm"
                            ref="comForm"
                            >
                            <Input refs='auther' id='userr' type="textarea" placeholder="title" autosize onFocus={this.getcook}/>
                            <div
                                style={{
                                margin: '24px 0'
                            }}/>
                            <Input
                                refs='content'
                                id='text'
                                type="textarea"
                                placeholder="Comments"
                                autosize={{
                                minRows: 4,
                                maxRows: 8
                            }} onFocus={this.getcook}/>
                            <div className='submit'>
                                <Button type="primary"  size='default' onClick={this.handleSubmit.bind(this)}>发表评论</Button>
                            </div>
                        </form>
                        <span className="tooltip" id="tipppp">Content is required !</span>
                        <div id="mes">
                            <span id="message"></span>
                        </div>
                        <h4 className='newcomments'>最新评论</h4>
                        <ul id='comments'></ul>

                    </div>
                </div>
                   <div id="ball">
                    <div className='warning'>
                      <div className='login'>
                        <div
                            className='fl'
                            style={{
                            marginLeft: 20,
                            fontSize: 18
                        }}>
                            登录
                        </div>
                        <div
                            className='fr'
                            style={{
                            marginRight: 20,
                            fontSize: 18
                        }}>
                            <span className='close' onClick={this.close}>x</span>
                        </div>

                    </div>
                    <div
                        className='login-tap'
                        style={{
                        paddingTop: 30,
                        paddingLeft: 48,
                        paddingBottom: 30
                    }}>
                        <NavLink to="/Login">
                            <div className='num-login tap'>登录</div>
                        </NavLink>
                        <NavLink to="/Register">
                            <div className='register tap'>注册</div>
                        </NavLink>

                    </div>
                </div>
                  

                </div>
            </div>

        )
    }
    componentDidMount() {
        document.body.scrollTop = 0;
        var that = this;
        //这里利用了url来传递数据
        var string = window.location.href
        var arr = string.split('')
        num = parseInt(arr[arr.length - 1]);
        console.log(num);

        //在这里写个switch
        var link = '';
        switch (num) {
            case 0:
                link = 'http://www.songjun.online/www/api/nowlist.php';
                break;
            case 1:
                link = 'http://www.songjun.online/www/api/americalist.php';
                break;
            case 2:
                link = 'http://www.songjun.online/www/api/hotlist.php';
                break;
            case 3:
                link = 'http://www.songjun.online/www/api/jazzlist.php';
                break;
            case 4:
                link = 'http://www.songjun.online/www/api/lovelist.php';
                break;
            case 5:
                link = 'http://www.songjun.online/www/api/netlist.php';
                break;
            case 6:
                link = 'http://www.songjun.online/www/api/oldlist.php';
                break;
            case 7:
                link = 'http://www.songjun.online/www/api/nowlist.php';
                break;
            case 8:
                link = 'http://www.songjun.online/www/api/poplist.php';
                break;
            case 9:
                link = 'http://www.songjun.online/www/api/rocklist.php';
                break;
            case 10:
                link = 'http://www.songjun.online/www/api/goldlist.php';
                break;
            default:
                link = 'http://www.songjun.online/www/api/nowlist.php';

        }
        $.ajax({
            type: "GET", url: link, dataType: "json", //可以利用jsonp 解决跨域
            success: function (data) {

                var arr = data;
                that.setState(
                    {src: arr.song_list[0].pic_big, 
                    title: arr.song_list[0].album_title, 

                    lists: arr.song_list})
            }
        });
        // 评论数据初始化
       getComments();
       
    }
    
}