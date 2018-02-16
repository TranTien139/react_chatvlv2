import React, {Component} from 'react';
import {checkLogin} from '../actions/authAction.js';
const axios = require('axios');
const domain = require('../../config_domain.js');

class BoxReplyComment extends Component {
    constructor(props){
        super(props);
        this.state={
            reply_content: ''
        }
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(evt) {
        evt.preventDefault();
        let check = checkLogin();
        if(check) {
            let comment_id = this.props.comment_id;
            let reply_post = new Promise((resolve, reject) => {
                axios.post(domain.domain + '/comment/addReplyComment', {
                    user_id: check.id,
                    content:this.state.reply_content,
                    comment_id: comment_id
                }).then(res => {
                    res = res.data;
                    res = res.data;
                    resolve(res);
                }).catch(err => {
                    reject('');
                });
            });

            reply_post.then(data => {
                this.props.handlerFromParant(data);
                this.setState({
                    reply_content: ''
                });
            });
        }else {
            alert('Ban can phai dang nhap')
        }
    }

    handleChange(event) {
        var reply_content = this.refs.reply_content.innerHTML.trim();
        this.setState({
            reply_content: reply_content
        });
    }

    render() {
        let check = checkLogin();
        return (
            <div className="box-reply-comment">
                <form onSubmit={this.submitHandler}>
                <div className="float-left avatar">
                    {check !== null ? <img src={check.image} className="img-fluid" width="50" /> : <img src="images/avatar.jpg" className="img-fluid" width="50" />}
                </div>
                <div className="float-left get-content">
                    <div contentEditable="true" id="reply" onInput={this.handleChange.bind(this)} ref="reply_content"  placeholder="Bạn nghĩ gì về bình luận này"/>
                </div>
                <button className="box-send-comment float-right" type="submit">
                    Gửi bình luận
                </button>
                </form>
                <div className="clearfix"/>
            </div>
        );
    }
}

export default BoxReplyComment;

