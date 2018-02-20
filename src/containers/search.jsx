import React,{Component} from 'react';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {Link} from 'react-router-dom'
import {NiceTime} from '../../functions/common.js';
import Loading from '../components/loading.jsx';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            isloading: false,
            list_result: []
        }
    }

    handleInput(e){
        let value = this.text.value;
        this.setState({isloading: true});
            let promise = new Promise((resolve, reject) => {
                axios.post(domain.domain + '/articles/searchArticle', {
                    text: value
                }).then(res => {
                    res = res.data;
                    res = res.data;
                    resolve(res);
                }).catch(err => {
                    reject([]);
                });
            });

            promise.then(data => {
                this.setState({list_result: data, isloading: false});
            }).catch(err => {
                this.setState({list_result: [], isloading: false});
            });
        }


    render(){
        const list_result = this.state.list_result.map((object, index)=>{
            let auth = object.author.length > 0 ? object.author[0] : '';
            return(
                <div key={Math.random()} className="main-item">
                    <div className="row">
                        <div className="col-sm-8 left-content-item text-center">
                            <Link to={"/chi-tiet/"+ object._id} ><img src={object.image} className="img-fluid" />
                                { object.type === 'video'?  <div className="icon-play" />:''  }
                            </Link>
                        </div>
                        <div className="col-sm-4">
                            <div className="right-content-item">
                                <h2><Link to={"/chi-tiet/"+ object._id}  className="jump_focus">{object.title}</Link></h2>
                                <div className="uinfo">
                                    bởi <Link to={'/thanh-vien/'+auth.userSlug }>{auth.name}</Link>
                                    <span>&nbsp;{ NiceTime(object.published_at) }</span>
                                </div>
                                <div className="count-like-share">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><span className="view"><img src="icon/view_icon.png" /></span>{ object.total_view || 0 }
                                        </li>
                                        <li className="list-inline-item"><span className="comment"><img src="icon/comment_icon.png" /></span>{object.total_comment}
                                        </li>
                                        <li className="list-inline-item"><span className="like"><img src="icon/icon_camxuc2.png" /></span>{object.total_like}
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return(
            <div>
                <div className="container">
                    <div className="space40">

                    </div>
                    <div className="row">
                        <div className="col-sm-6 offset-3">
                            <div className="form-group">
                                <input className="form-control" ref={(text)=> this.text = text} onChange={this.handleInput.bind(this)} type="text" required placeholder="Nhập từ khóa tìm kiếm bài viết" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8 offset-2">
                            {list_result.length > 0 ? list_result: 'Không có kết quả nào được hiển thị'}
                            {this.state.isloading === true ? <Loading/> : ''}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;