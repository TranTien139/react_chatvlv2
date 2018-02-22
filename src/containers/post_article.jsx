import React,{Component} from 'react';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {Link} from 'react-router-dom';
import {setStorage} from '../actions/authAction.js';
import {checkLogin,getToken} from '../actions/authAction.js';
import {ToastContainer} from "react-toastr";

class postArticle extends Component{
    constructor(props){
        super(props);
        this.state ={
            type: 'image'
        }
        this.PostArticle = this.PostArticle.bind(this);
    }

    componentWillMount(){
        document.title = 'Đăng bài viết';
    }

    PostArticle = (event)=>{
        event.preventDefault();
        let check = checkLogin();
        if(check) {
            let image = this.state.type === "image" ? this.image.value : "http://i.ytimg.com/vi/"+ this.video.value +"/0.jpg";
            let data_post = {"user_id": check.id ,"title": this.title.value, "description": this.description.value,"linkVideo": this.video.value || '', "image": image};
            axios.post(domain.domain + '/articles/addPostArticle?access_token='+ getToken() , data_post ).then(res => {
                    res = res.data;
                this.message.success('Bạn đã đăng bài viết thành công', 'Thành công', {
                    closeButton: true,
                });
                setTimeout(function () {
                    window.location.href = '/';
                }, 1000);

                }).catch(err => {
                this.message.error('Có lỗi xảy ra khi đăng bài viết', 'Cảnh báo', {
                    closeButton: true,
                });
                });
        }else {
            this.message.error('Bạn phải đăng nhập mới được thực hiện hành động này', 'Cảnh báo', {
                closeButton: true,
            });
        }

    }

    handleChange(e){
        let value = e.target.value;
        this.setState({type: value});
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
                                    <input type="text" placeholder="Nhập tiêu đề bài viết" className="form-control" ref={(title) => this.title = title} required />
                                </div>

                                <div className="form-group">
                                    <label>Mô tả: </label>
                                    <input type="text" placeholder="Nhập mô tả bài viết" className="form-control" ref={(description) => this.description = description} />
                                </div>

                                <div className="form-group">
                                    <label>Loại: </label>
                                    <select className="form-control" name="type" onChange={this.handleChange.bind(this)} value={this.state.type}>
                                        <option value="image" >ảnh</option>
                                        <option value="video" >Video</option>
                                    </select>
                                </div>

                                {this.state.type === "image" ? <div className="form-group">
                                    <label>Link ảnh : </label>
                                    <input type="text" placeholder="Nhập full link ảnh" className="form-control" ref={(image) => this.image = image} required />
                                </div> : <div className="form-group">
                                    <label>Code link youtube: </label>
                                    <input type="text" placeholder="Nhập code link youtube: ví dụ VH73_OD7GEk" className="form-control" ref={(video) => this.video = video} required />
                                </div>}

                                <button type="submit" className="btn btn-primary">Đăng bài</button>
                            </div>
                        </div>
                    </form>
                </div>

                <ToastContainer
                    ref={ref => this.message = ref}
                    className="toast-top-right"
                />

            </div> )
    }
}

export default postArticle;