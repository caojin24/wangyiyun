import React from 'react';
import './style/song-detail.css';
import { Button} from 'antd';
import fatch from "isomorphic-fetch";

var v = null;

export default class SongDetial extends React.Component {
    constructor(props){
        super(props)        
        this.state={
            author:'',
            pic:'',
            album_title:'',
            title:'',
            file_link:'',
            lrclink:''
           
        }
    }
    

    onplay(){
        var n = Math.floor(Math.random()*4);
        var s = document.getElementsByTagName('audio')[0];//底部播放器的audio标签
        var p = document.getElementById('pauuu');//播发按钮
        var i = document.getElementById('songimg');//歌曲图片
        var name = document.getElementById('songnnn');//歌名
        var songer = document.getElementById('songer');//作者
        
        
        s.setAttribute('src',"http://bxu2713290520.my3w.com/api/audio/"+n+".mp3");
        i.setAttribute('src',v.pic);
        name.innerHTML = v.title;
        songer.innerHTML = v.author;    
        p.click();
        p.setAttribute("class","pause");
        s.play();
       
    }
	render(){
        v = this.state;
       
        return(
             <div className='list' id="listSong">
                <div className='top'>
                    <h3  className='all'>单曲详情</h3>
                </div>
            <div className='info '>
                <div className='image fl'>
                        <img className='bigpic' src={this.state.pic}/>
                </div>
                <div className='details fl'>
                    <h1 className='title sn'>歌名：{this.state.title}</h1>
                    <h2 className='title'>歌手：{this.state.author}</h2>
                    <h2 className='title'>专辑：{this.state.album_title}</h2>
                        <a className='down' href={this.state.lrclink}>
                        <Button  type="primary" icon="download" size={'large'}>歌词下载</Button>
                        </a>
                    <Button type="primary" icon="play-circle" size={'large'} onClick={this.onplay}>播放</Button>
                    <Button type="primary" icon="star-o" size={'large'}>收藏</Button><br/>
                </div>
                <div class="clear"></div> 
                
            </div>
            </div>
        )
    }

    componentDidMount(){
        document.body.scrollTop=0;
        var that = this;
        //这里利用了url来传递数据
        var string=window.location.href
         var arr=string.split('/')
        var num=parseInt(arr[arr.length-1]);
        // console.log(num)
    //      $.ajax ({  
    //             type:"GET",  
    //             dataType:'json',
    //             url:'http://www.songjun.online/www/api/play.php',
    //             data:{
    //               songid:num
    //             },
    //             success: function(data){
    //                 var songNum=Math.floor(Math.random()*4)
    //                 that.setState({
    //                     author:data.songinfo.author,
    //                     pic:data.songinfo.pic_big,
    //                     album_title:data.songinfo. album_title,
    //                     title:data.songinfo.title,
    //                     file_link:'http://www.caojin.online/api/audio/'+songNum+'.mp3 ',
    //                     lrclink:data.songinfo.lrclink
    //                 })          
               
    //     }
    // });

    fatch("http://bxu2713290520.my3w.com/api/play.php",{
          method: "POST",  
          mode: "cors",  
          headers: {  
              "Content-Type": "application/x-www-form-urlencoded"  
          },
          body:'songid='+num
        }).then(function(response){
            if (response.status >= 400){
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            that.setState({
                author:data.songinfo.author,
                pic:data.songinfo.pic_big,
                album_title:data.songinfo.album_title,
                title:data.songinfo.title,
                lrclink:data.songinfo.lrclink
            })        
        });
    	
      
    }
    
}