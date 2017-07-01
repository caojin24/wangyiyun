import React from 'react';
import Slider from 'react-slick';
import "./style/New.css"; 

function SampleNextArrow(props) {
  const {onClick} = props
  return (
    <div
      className="next"
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {onClick} = props
  return (
    <div
      className="prev"
      onClick={onClick}
    ></div>
  );
}

export default class New extends React.Component {

    
    static defaultProps = {
        tracks: [
            {
                'img': 'http://p3.music.126.net/DSGvdBaVhj1gwgh18Z9d3Q==/18812643953229012.jpg?param=100y100',
                'title': '我想和你唱 第二季 第9期',
                'singer': '群星'
            },
            {
                'img': 'http://p3.music.126.net/CdSkAnfQhO5rrPo54noCHA==/18990764835137467.jpg?param=100y100',
                'title': 'Evolve',
                'singer': 'Imagine Dragons'
            },
            {
                'img': 'http://p3.music.126.net/ZZAQGWl9mR7g5xCyWWH3Pw==/19149094509535913.jpg?param=100y100',
                'title': '夏至未至 影视原声带',
                'singer': '群星'
            },
            {
                'img': 'http://p4.music.126.net/TqGCB0KK2LK9X9zKr0rqAQ==/18517974836952021.jpg?param=100y100',
                'title': '2017跨界歌王 第十一期',
                'singer': '群星'
            },
            {
                'img': 'http://p4.music.126.net/2JyOziYmboPfELKXpk_1YQ==/18811544441563748.jpg?param=100y100',
                'title': 'Alien: Covenant (Original Motion Picture Soundtrack)',
                'singer': 'Jed Kurzel'
            },
            {
                'img': 'http://p3.music.126.net/DSGvdBaVhj1gwgh18Z9d3Q==/18812643953229012.jpg?param=100y100',
                'title': '我想和你唱 第二季 第9期',
                'singer': '群星'
            },
            {
                'img': 'http://p3.music.126.net/CdSkAnfQhO5rrPo54noCHA==/18990764835137467.jpg?param=100y100',
                'title': 'Evolve',
                'singer': 'Imagine Dragons'
            },
            {
                'img': 'http://p3.music.126.net/ZZAQGWl9mR7g5xCyWWH3Pw==/19149094509535913.jpg?param=100y100',
                'title': '夏至未至 影视原声带',
                'singer': '群星'
            },
            {
                'img': 'http://p4.music.126.net/TqGCB0KK2LK9X9zKr0rqAQ==/18517974836952021.jpg?param=100y100',
                'title': '2017跨界歌王 第十一期',
                'singer': '群星'
            },
            {
                'img': 'http://p4.music.126.net/2JyOziYmboPfELKXpk_1YQ==/18811544441563748.jpg?param=100y100',
                'title': 'Alien: Covenant (Original Motion Picture Soundtrack)',
                'singer': 'Jed Kurzel'
            },
            {
                'img': 'http://p3.music.126.net/DSGvdBaVhj1gwgh18Z9d3Q==/18812643953229012.jpg?param=100y100',
                'title': '我想和你唱 第二季 第9期',
                'singer': '群星'
            },
            {
                'img': 'http://p3.music.126.net/CdSkAnfQhO5rrPo54noCHA==/18990764835137467.jpg?param=100y100',
                'title': 'Evolve',
                'singer': 'Imagine Dragons'
            },
            {
                'img': 'http://p3.music.126.net/ZZAQGWl9mR7g5xCyWWH3Pw==/19149094509535913.jpg?param=100y100',
                'title': '夏至未至 影视原声带',
                'singer': '群星'
            },
            {
                'img': 'http://p4.music.126.net/TqGCB0KK2LK9X9zKr0rqAQ==/18517974836952021.jpg?param=100y100',
                'title': '2017跨界歌王 第十一期',
                'singer': '群星'
            },
            {
                'img': 'http://p4.music.126.net/2JyOziYmboPfELKXpk_1YQ==/18811544441563748.jpg?param=100y100',
                'title': 'Alien: Covenant (Original Motion Picture Soundtrack)',
                'singer': 'Jed Kurzel'
            }
        ]
    }

    render() {

        const settings = {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        const NewList = this.props.tracks.map((list,index)=>{
            return  <div key={index}>
                        <img src={list.img}/>
                        <p className="newTitle">{list.title}</p>
                        <p className="newSinger">{list.singer}</p>
                    </div>
        })


        return (
            <div className="New">
               <div className="title">
                    <span className="icon1"></span>
                    <a href="##" className="new">新碟上架</a>
                    <span className="more">
                        <a href="##" className="more-i">更多</a>
                        <i className="icon2">&nbsp;</i>
                    </span>
                </div>
                <div className="new-banner">
                    <div className="inner">
                        <Slider {...settings}>
                            {NewList}
                        </Slider>
                    </div>
                </div> 
            </div>
        )
    }
}