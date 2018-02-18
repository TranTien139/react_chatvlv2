import React,{Component} from 'react';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {Link} from 'react-router-dom';
import {setStorage} from '../actions/authAction.js';

class postArticle extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }

    PostArticle = (event)=>{
        event.preventDefault();

        // let input_login = {"title":this.title.value,"linkVideo":this.linkVideo.value};
        // axios.post(domain.domain+'/users/login',input_login).then(res=>{
        //     res = res.data;
        //     let token = res.id;
        //     if(token && res.userId){
        //         let getUserInfo = new Promise((resolve,reject)=>{
        //             axios.post(domain.domain+'/user_generals/getUserInfo',{"id": res.userId}).then(respon=>{
        //                 respon = respon.data;
        //                 respon = respon.data;
        //                 resolve(respon)
        //             }).catch(err=>{
        //                 reject(err);
        //             });
        //         });
        //         getUserInfo.then(data=>{
        //             setStorage(token, data);
        //             window.location.href = '/';
        //         });
        //     }
        // }).catch(err=>{
        // });

    }

    render(){
        return(
            <div>
                <div className="container">
                    <form onSubmit={this.PostArticle.bind(this)}>
                        <div className="row">
                            <div className="col-sm-6 offset-3">
                                <div className="form-group">
                                    <label>Tiêu đề: </label>
                                    <input type="text" className="form-control" ref={(title) => this.title = title} required />
                                </div>
                                <div className="form-group">
                                    <label>Loại: </label>
                                    <select className="form-control" ref={(type) => this.type = type} required>
                                        <option value="image" >ảnh</option>
                                        <option value="video" >Video</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>ảnh : </label>
                                    <input type="text" className="form-control" ref={(image) => this.image = image} required />
                                </div>

                                <div className="form-group">
                                    <label>Link video : </label>
                                    <input type="text" className="form-control" ref={(video) => this.video = video} required />
                                </div>

                                <button type="submit" className="btn btn-primary">Đăng bài</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div> )
    }
}

export default postArticle;