import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';  // 必须的  
import 'bootstrap/dist/css/bootstrap-theme.css';  //  可选的  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './modules/Common/reset.css';
import App from './modules/App/App';
import MyMusic from './modules/MyMusic/MyMusic';
import Rank from './modules/Rank/Rank';
import List from './modules/List/List';
import Detail from './modules/List/Detail';
import Home from './modules/Home/Home';
import SongDetail from './modules/List/song-detail';
import DownLoad from './modules/DownLoad/DownLoad';
import Login from './modules/Login/Login';
import Register from './modules/Login/Register';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute path="/" component={Home}/>
            <Route path="/MyMusic" component={MyMusic}/>
            <Route path="/Rank" component={Rank}/>
            <Route path="/List" component={List}/>
            <Route path="/Detail/:itemId" component={Detail}/>
            <Route path="/SongDetail/:songId" component={SongDetail}/>
            <Route path="/DownLoad" component={DownLoad}/>
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register}/>
        </Route>
    </Router>
),document.getElementById('root'));
registerServiceWorker();

