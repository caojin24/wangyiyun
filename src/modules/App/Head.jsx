import React from 'react';
import "./style/head.css"; 

export default class Head extends React.Component{
    render() {
        return (
            <div className="songHead">
                <img src={this.props.track.picUrl} alt="歌曲图片" id="songimg"/>
            </div>
        )
    }
}