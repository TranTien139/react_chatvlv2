import React from 'react';
import {Link} from 'react-router-dom';
import {NiceTime} from '../../functions/common.js';
import ReplyComment from '../components/reply_comment.jsx';
import BoxReplyComment from '../components/boxreply_comment.jsx';
const axios = require('axios');
const domain = require('../../config_domain.js');

class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open_reply: false,
            data_reply: []
        }
        this.handleData = this.handleData.bind(this);
    }

    openReply = (id_comment)=>{
        let reply = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/comment/getReplyComment',{user_id: "0","comment_id":id_comment, size:100, page:1}).then(res=>{
                res = res.data;
                res = res.data.results;
                resolve(res);
            }).catch(err=>{
                reject('');
            });
        });

        reply.then(data=>{
            this.setState({open_reply: true,data_reply:data});
        })
    }

    handleData(data) {
        let old_reply = this.state.data_reply;
        old_reply.push(data);
        this.setState({data_reply: old_reply});
    }

    render() {
        let object = this.props.object_comment;
        return (
            <div key={Math.random()} className="item-comment">
                <div className="box-avatar-cmt float-left">
                    <img src={object.getUser.image} className="img-fluid" width="70"/>
                </div>
                <div className="box-content-cmt float-left">
                    <div className="name"><cite>{object.getUser.name}</cite></div>
                    <div className="time">
                        <time>{ NiceTime(object.created_at / 1000) }</time>
                    </div>
                    <div className="clearfix"/>
                    <div className="content-comment">
                        <p dangerouslySetInnerHTML={{__html: object.content}}></p>
                    </div>
                    <div className="count-like-share">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <div className="comment-reply-link"><a onClick={this.openReply.bind(this,object.id)}>Xem thêm trả lời ({object.count_reply} trả lời)</a></div>
                            </li>
                            <li className="list-inline-item"><span className="like"><a >Thích</a></span>{object.like} Người thích bình luận này
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"/>
                    { this.state.open_reply === true ? <ReplyComment data_reply={this.state.data_reply} /> : ''}
                    { this.state.open_reply === true ? <BoxReplyComment comment_id={object.id} handlerFromParant={this.handleData} /> : ''}
                </div>
                <div className="clearfix"/>
            </div>
        );
    }
}

export default Comment;