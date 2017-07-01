import React from 'react';
import "./style/Singer.css"; 

export default class Singer extends React.Component {

    static defaultProps = {
        tracks: [
            {
                'img': 'http://p4.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62',
                'singer': '张惠妹aMEI',
                'info': '台湾歌手张惠妹'
            },
            {
                'img': 'http://p3.music.126.net/BvFxS88342IznhCjp6jJKg==/5783431162155757.jpg?param=62y62',
                'singer': '尚雯婕',
                'info': '原创电子唱作人'
            },
            {
                'img': 'http://p3.music.126.net/VIxIhQPW2wTREM_DfToHUA==/2107763790458943.jpg?param=62y62',
                'singer': '羽泉组合',
                'info': '国内知名演唱组合 羽泉'
            },
            {
                'img': 'http://p4.music.126.net/nS7TH_KYtj5lJr8OxDKgWw==/3263350517410958.jpg?param=62y62',
                'singer': '李志',
                'info': '个体音乐人李志'
            },
            {
                'img': 'http://p4.music.126.net/2iIlyuUKcyee0x1v4TzXTg==/1375489058855837.jpg?param=62y62',
                'singer': '马頔麻油叶',
                'info': '民谣音乐人'
            }
        ]
    }
    render() {

        const singerList = this.props.tracks.map((list,index)=>{
            return  <li key={index}>
                        <a href="##">
                            <div className="head">
                                <img src={list.img} alt=""/>
                            </div>
                            <div className="info">
                                <h4>{list.singer}</h4>
                                <p>{list.info}</p>
                            </div>
                        </a>
                    </li>
        })

        return (
            <div className="Singer clearfix">
                <h3>
                    <span className="someSinger">入驻歌手</span>
                    <span className="more">查看全部 ></span>
                </h3>
                <ul className="singerList clearfix">
                    {singerList}
                </ul>
                <div>
                    <a href="" className="musician">
                        <i>申请成为网易音乐人</i>
                    </a>
                </div>
            </div>
        )
    }
}