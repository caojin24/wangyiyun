import React from 'react';
import "./style/recommend.css"; 
import NavLink from '../Common/NavLink'; 

export default class Recommend extends React.Component {

    static defaultProps = {
        tracks: [
            {
                'img': 'http://p1.music.126.net/h1wqC-zri7kHMs45UR-iig==/18545462627638216.jpg?param=140y140',
                'title': '『永远的乌托邦』大陆摇滚的黄金年代'
            },
            {
                'img': 'http://p1.music.126.net/fLlaUhTDuMGNNnLN-q2AbQ==/18736777650831021.jpg?param=140y140',
                'title': '【感人乡村】既温暖又能让你回味无穷'
            },
            {
                'img': 'http://p1.music.126.net/MMZp5Z4ZiXTCS7iZ14S5yA==/19145795974637609.jpg?param=140y140',
                'title': '【回忆】总有一首歌，能唤醒曾经的浪漫瞬间'
            },
            {
                'img': 'http://p1.music.126.net/WaO_LG5fWIpNsKHTFjLzgA==/19102915021187485.jpg?param=140y140',
                'title': '说晚安歌单！在你的 Me Time 时光做个柔软的梦'
            },
            {
                'img': 'http://p1.music.126.net/IQ8MqTiW8GnprdCRgb5khg==/18666408906416105.jpg?param=140y140',
                'title': '晕音乐 | R&B的慢热被窝'
            },
            {
                'img': 'http://p1.music.126.net/IttKVjlR37G82TrJGcybpg==/18705991324836217.jpg?param=140y140',
                'title': '第八十八章 宗门任务'
            },
            {
                'img': 'http://p1.music.126.net/i3uyC0I4mcUnKgXFCnGUOg==/109951162945982389.jpg?param=140y140',
                'title': '|华语励志| 用最初的心走最远的路'
            },
            {
                'img': 'http://p1.music.126.net/gR-jjzCx5Qt0h0qvHDL0ow==/18885211718884226.jpg?param=140y140',
                'title': '致男友'
            }
        ]
    }

    render() {

        const recommendList = this.props.tracks.map((list,index)=>{
            return  <li key={index}>
                        <img src={list.img}/>
                        <p>{list.title}</p>
                    </li>
        })

        return (
        <div id="reccc">
            <div className="Recommend">
                <div className="title">
                    <span className="icon1"></span>
                    <NavLink to="/List" className="hot">热门推荐</NavLink>
                    <div className="Tab">
                        <a href="##" className="tab-i">华语</a>
                        <span className="line">|</span>
                        <a href="##" className="tab-i">流行</a>
                        <span className="line">|</span>
                        <a href="##" className="tab-i">摇滚</a>
                        <span className="line">|</span>
                        <a href="##" className="tab-i">民谣</a>
                        <span className="line">|</span>
                        <a href="##" className="tab-i">电子</a>
                    </div>
                    <span className="more">
                        <a href="##" className="more-i">更多</a>
                        <i className="icon2">&nbsp;</i>
                    </span>
                </div>
                <ul className="re-list clearfix">
                    {recommendList}
                </ul>
            </div>
        </div>
        )
    }
}