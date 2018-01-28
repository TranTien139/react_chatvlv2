import React,{Component} from 'react'
import {Link} from 'react-router-dom';
const axios = require('axios');
const domain = require('../../config_domain.js');
import ListArticle from '../components/list_article.jsx';

class Home extends Component{
    constructor(props){
        super(props)
        this.state ={
            article: []
        }
    }

    componentWillMount(){
     let promise = new Promise((resolve, reject)=>{
         axios.post(domain.domain+'/articles/getArticleNew',{user_id: "1", size:20, page:1}).then(res=>{
             res = res.data;
             res = res.data.results;
             resolve(res);
         }).catch(err=>{
             reject([]);
         });
     });
     promise.then(data=>{
         this.setState({article:data});
     });
    }

    render(){
        let list_article = this.state.article;
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">

                            <ListArticle data={list_article} />

                        </div>
                        <div className="col-sm-4">
                            <div className="row top-user-home">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><h3>Top danh hài</h3></li>
                                    <li className="list-inline-item"><a className="active"> Tuần </a></li>
                                    <li className="list-inline-item"><a> Tháng </a></li>
                                    <li className="list-inline-item"><a className="all"> Tất cả </a></li>
                                </ul>
                            </div>
                            <div className="row top-user-list">
                                <div className="col-sm-6 pading-left0">
                                    <div className="row">
                                        <div className="col-4"><a href="#"><img src="images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                                        <div className="col-8">
                                            <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                            <p><img src="icon/view_icon.png" /><span>&nbsp;100</span></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4"><a href="#"><img src="images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                                        <div className="col-8">
                                            <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                            <p><img src="icon/view_icon.png" /><span>&nbsp;100</span></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4"><a href="#"><img src="images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                                        <div className="col-8">
                                            <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                            <p><img src="icon/view_icon.png" /><span>&nbsp;100</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 pading-left0">
                                    <div className="row">
                                        <div className="col-4"><a href="#"><img src="images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                                        <div className="col-8">
                                            <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                            <p><img src="icon/view_icon.png" /><span>&nbsp;100</span></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4"><a href="#"><img src="images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                                        <div className="col-8">
                                            <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                            <p><img src="icon/view_icon.png" /><span>&nbsp;100</span></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4"><a href="#"><img src="images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                                        <div className="col-8">
                                            <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                            <p><img src="icon/view_icon.png" /><span>&nbsp;100</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;