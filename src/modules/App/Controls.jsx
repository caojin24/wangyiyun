import React from 'react';
import "./style/controls.css"; 

export default class Controls extends React.Component{

    render() {

        let className;
        if(this.props.isPlay === true){
            className = 'pause';
        }else{
            className = 'play';
        }

        return (
            <div className="controls clearfix">
                <div className="pre" onClick={this.props.onPrevious}>上一首</div>
                <div id="pauuu" className={className} onClick={this.props.onPlay}>播放/暂停</div>
                <div className="next" onClick={this.props.onNext}>下一首</div>
            </div>
        )
    }
}