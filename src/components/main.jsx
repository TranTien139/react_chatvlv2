import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {Redirect} from 'react-router';
import Home from '../containers/home.jsx';
import Login from '../containers/login.jsx';
import Layout from './layout.jsx';
import Hot from  '../containers/hot.jsx';
import Video from  '../containers/video.jsx';
import Image from  '../containers/image.jsx';
import Detail from  '../containers/detail.jsx';
import NotFound from '../containers/notfound.jsx';
import Member from '../containers/member.jsx';

function isLoggedIn() { return false; }

export default ()=>(
    <Switch>
        <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/chi-tiet/:id" component={Detail} />
            <Route path="/bai-noi-bat" component={Hot} />
            <Route path="/thanh-vien/:slug" component={Member} />
            <Route path="/hinh-anh" component={Image} />
            <Route path="/video" component={Video} />
            <Route path="/dang-nhap" component={Login} />
        </Layout>
    </Switch>
)