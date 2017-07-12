import React from 'react';
import "./style/player.css"; 
import Controls from './Controls';
import Head from './Head';
import Progress from './Progress';
import Oper from './Oper';
import ReactPlayer from 'react-player';

export default class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTrackLen: this.props.tracks.length, //歌单歌曲数
            currentTrackIndex: 0, //当前播放的歌曲索引，默认加载第一首歌
            currentTime: 0, //当前歌曲播放的时间
            currentTotalTime: 0, //当前歌曲的总时间
            playStatus: false, //true为播放状态，false为暂停状态
            loop: false,
            volume: 0.8   
        };
        this.play = this.play.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.cir = this.cir.bind(this);
    }

    static defaultProps = {
        tracks: [
            {
                "name": "元日",
                "singer": "于文华",
                "picUrl": "http://p3.music.126.net/SR9eFEjRB0NsscxN7-fHMw==/3344714372906000.jpg",                    
                "mp3Url": "http://bxu2713290520.my3w.com/api/audio/1.mp3"
            },
            {
                "name": "元日 ",
                "singer": "清弄",
                "picUrl": "http://p4.music.126.net/ly2FJHh5-lYMdC3NZxvavQ==/7714173580661848.jpg",
                "mp3Url": "http://bxu2713290520.my3w.com/api/audio/2.mp3"
            },
            {
                "name": "青龙·花木苍苍",
                "singer": "五色石南叶",
                "picUrl": "http://p4.music.126.net/tHAfnugCElS93EDp5cHLIw==/8909342719897560.jpg",
                "mp3Url": "http://bxu2713290520.my3w.com/api/audio/3.mp3"
            }
        ]
    }


    //播放事件处理
    play(){
        //这里有setState是异步的，需要在回调中执行
        this.setState({playStatus:!this.state.playStatus});
    }

    cir(){
        this.setState({loop:!this.state.loop});
    }

    //上一曲事件处理
    previous(){
        if(this.state.currentTrackIndex - 1 < 0){
            this.setState({currentTrackIndex: this.state.currentTrackLen-1},()=>{
                this.onDuration();
            });
        }else{
            this.setState({currentTrackIndex:--this.state.currentTrackIndex},()=>{
                this.onDuration();
            });
        }     
    }

    //下一曲事件处理
    next(){
        if(this.state.currentTrackIndex + 1 >=  this.state.currentTrackLen){
            this.setState({currentTrackIndex: 0},()=>{
                this.onDuration();
            });  
        }else{
            this.setState({currentTrackIndex:++this.state.currentTrackIndex},()=>{
                this.onDuration();
            }); 
        }                     
    }

    onDuration(duration){
        this.setState({
            currentTotalTime: duration
        });
    }

    //DOM加载完
    componentDidMount(){
        this.onDuration();
        setInterval(()=>{
            this.setState({currentTime: this.player.getCurrentTime()},()=>{
                if(this.state.currentTime >= this.state.currentTotalTime){
                    this.next();
                }
            });
        }, 300);
    }

    render() {
        const {currentTrackIndex, playStatus, loop, currentTime, currentTotalTime} = this.state;
        return (
            <div className="player" >
                <div className="wrap">
                    {/* 播放控制  */}
                    <Controls isPlay={playStatus} onPlay={this.play} onPrevious={this.previous} onNext={this.next}/>
                    {/* 歌曲图片  */}
                    <Head track={this.props.tracks[currentTrackIndex]}/>
                    {/* 进度条和歌曲信息  */}
                    <Progress track={this.props.tracks[currentTrackIndex]} progress={currentTime / currentTotalTime * 100 + '%'} currentTime={currentTime} currentTotalTime={currentTotalTime} />
                    {/* 声音控制，歌曲列表  */}
                    <Oper onUp={this.up} onDown={this.down} onCir={this.cir}/>
                    {/* 音频控件  */}
                    <ReactPlayer id="playy" url={this.props.tracks[currentTrackIndex].mp3Url} 
                        playing={playStatus} loop={loop}
                        onDuration={this.onDuration.bind(this)}
                        ref={ReactPlayer => { this.player = ReactPlayer }}
                    />
                </div>
            </div>
        )
    }
}