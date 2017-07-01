import React from 'react';
import "./style/HotDJ.css"; 

export default class HotDJ extends React.Component {

    static defaultProps = {
        tracks: [
            {
                'img': 'http://p3.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40',
                'singer': '陈立',
                'info': '美食家陈立教授'
            },
            {
                'img': 'http://p4.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40',
                'singer': 'DJ艳秋',
                'info': '著名音乐节目主持人'
            },
            {
                'img': 'http://p4.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40',
                'singer': '国家大剧院古典音乐频道',
                'info': '国家大剧院古典音乐官方'
            },
            {
                'img': 'http://p3.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40',
                'singer': '谢谢收听',
                'info': '南京电台主持人王馨'
            },
            {
                'img': 'http://p3.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40',
                'singer': 'DJ晓苏',
                'info': '独立DJ，CRI环球旅游广播特邀DJ'
            }
        ]
    }
    render() {

        const DJList = this.props.tracks.map((list,index)=>{
            return  <li key={index}>
                        <div className="head">
                            <img src={list.img} alt=""/>
                        </div>
                        <div className="info">
                            <h4>{list.singer}</h4>
                            <p>{list.info}</p>
                        </div>
                    </li>
        })

        return (
            <div className="HotDJ">
                <h3>热门DJ</h3>
                <ul className="DJList clearfix">
                    {DJList}
                </ul>
            </div>
        )
    }
}