import React from 'react';
import "./style/progress.css"; 

export default class Progress extends React.Component{

    timeConvert(timestamp) {
        var minutes = Math.floor(timestamp / 60);
        var seconds = Math.floor(timestamp - (minutes * 60));

        if(seconds < 10) {
          seconds = '0' + seconds;
        }

        timestamp = minutes + ':' + seconds;
        return timestamp;
    }
    
    render() {
        return (
            <div className="progre">
                <div className="songInfo clearfix">
                    <span className="songName" id="songnnn">{this.props.track.name}</span>
                    <span className="singerName" id ="songer">{this.props.track.singer}</span>
                </div>
                <div className="prog">
                    <div className="barbg">
                        <div className="cur" style={{'width':this.props.progress}}>
                            <span className="btn"></span>
                        </div>
                    </div>
                    <span className="time">{this.timeConvert(this.props.currentTime)}/{this.timeConvert(this.props.currentTotalTime)}</span>
                </div>
            </div>
        )
    }
}