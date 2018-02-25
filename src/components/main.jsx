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
import Member from '../containers/member.jsx';
import Search from '../containers/search.jsx';
import Register from '../containers/register.jsx';
import postArticle from '../containers/post_article.jsx';
import NotFound from '../containers/notfound.jsx';

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
            <Route path="/tim-kiem" component={Search} />
            <Route path="/dang-ki" component={Register} />
            <Route path="/dang-bai" component={postArticle} />
        </Layout>
        <Route path="*" component={NotFound}/>
    </Switch>
)