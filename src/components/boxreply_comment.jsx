import React, {Component} from 'react';
import {checkLogin} from '../actions/authAction.js';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {ToastContainer} from "react-toastr";

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
            if(this.state.reply_content.length <= 3){
                return this.message.error('Bạn phải nhập nội dung ít nhất 3 kí tự', 'Cảnh báo', {
                    closeButton: true,
                });
            }
            let comment_id = this.props.comment_id;
                axios.post(domain.domain + '/comment/addReplyComment', {
                    user_id: check.id,
                    content:this.state.reply_content,
                    comment_id: comment_id
                }).then(res => {
                    res = res.data;
                    res = res.data;

                    this.props.handlerFromParant(res);

                    this.setState({
                        reply_content: ''
                    });
                    this.message.success('Bạn đã trả lời bình luận thành công', 'Thành công', {
                        closeButton: true,
                    });
                }).catch(err => {
                    this.setState({
                        reply_content: ''
                    });
                });

        }else {
            this.message.error('Bạn phải đăng nhập mới được thực hiện hành động này', 'Cảnh báo', {
                closeButton: true,
            });
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

                <ToastContainer
                    ref={ref => this.message = ref}
                    className="toast-top-right"
                />

            </div>
        );
    }
}

export default BoxReplyComment;

