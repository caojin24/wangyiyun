import React from 'react';
import "./style/oper.css"; 

export default class Oper extends React.Component{
    render() {
        return (
            <div className="oper">
                <div className="volume">音量</div>
                <div className="circulation" onClick={this.props.onCir}>循环</div>
            </div>
        )
    }
}