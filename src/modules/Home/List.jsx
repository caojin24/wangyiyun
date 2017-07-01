import React from 'react'
import "./style/List.css"; 
import NavLink from '../Common/NavLink'; 

export default class List extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nowlist: [],
            oldlist: [],
            hotlist: []
        };
    }

    componentDidMount(){
        var that = this;
        fetch('http://www.caojin.online/api/nowlist.php')
        .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
        })
        .then(function(data) {
            that.setState({
                nowlist: data.song_list
            })
        });
        
        fetch('http://www.caojin.online/api/oldlist.php')
        .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
        })
        .then(function(data) {
            that.setState({
                oldlist: data.song_list
            })
        });
        
        fetch('http://www.caojin.online/api/hotlist.php')
        .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
        })
        .then(function(data) {
            that.setState({
                hotlist: data.song_list
            })
        });
    
    }

    

    render() {

        const now = this.state.nowlist.map((list,index)=>{
            return  <li key={index}>
                        <span className="songIndex">{index+1}</span>
                        <NavLink to="/Detail" className="songIcon">{list.title}</NavLink>
                        <div className="opera">
                            <a href="##" className="play"></a>
                            <a href="##" className="tolist"></a>
                            <a href="##" className="collect"></a>
                        </div>
                    </li>
        })
        const old = this.state.oldlist.map((list,index)=>{
            return  <li key={index}>
                        <span className="songIndex">{index+1}</span>
                        <NavLink to="/Detail"  className="songIcon">{list.title}</NavLink>
                        <div className="opera">
                            <a href="##" className="play"></a>
                            <a href="##" className="tolist"></a>
                            <a href="##" className="collect"></a>
                        </div>
                    </li>
        })
        const hot = this.state.hotlist.map((list,index)=>{
            return  <li key={index}>
                        <span className="songIndex">{index+1}</span>
                        <NavLink to="/Detail"  className="songIcon">{list.title}</NavLink>
                        <div className="opera">
                            <a href="##" className="play"></a>
                            <a href="##" className="tolist"></a>
                            <a href="##" className="collect"></a>
                        </div>
                    </li>
        })

        return (
            <div id="lisss">
            <div className="List">
                <div className="title">
                    <span className="icon1"></span>
                    <a href="##" className="listt">榜单</a>
                    <span className="more">
                        <a href="##" className="more-i">更多</a>
                        <i className="icon2">&nbsp;</i>
                    </span>
                </div>
                <div className="List-con">
                    <dl className="new">
                        <dt className="top">
                            <div className="list-cover">
                                <img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt=""/>
                            </div>
                            <div className="list-title">
                                <p>新歌榜</p>
                            </div>
                        </dt>
                        <dd>
                            <ol>
                                {now}
                            </ol>
                            <div className="more">
                                <a href="">查看全部></a>
                            </div>
                        </dd>
                    </dl>
                    <dl className="old">
                        <dt className="top">
                            <div className="list-cover">
                                <img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt=""/>
                            </div>
                            <div className="list-title">
                                <p>老歌榜</p>
                            </div>
                        </dt>
                        <dd>
                            <ol>
                                {old}
                            </ol>
                            <div className="more">
                                <a href="">查看全部></a>
                            </div>
                        </dd>
                    </dl>
                    <dl className="hot">
                        <dt className="top">
                            <div className="list-cover">
                                <img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt=""/>
                            </div>
                            <div className="list-title">
                                <p>热歌榜</p>
                            </div>
                        </dt>
                        <dd>
                            <ol>
                                {hot}
                            </ol>
                            <div className="more">
                                <a href="">查看全部></a>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        )
    }
}