import React, {Component} from 'react';
import {NiceTime} from '../../functions/common.js';

class ReplyComment extends Component {
    render() {
        let data_reply = this.props.data_reply;
        let list_reply = data_reply.map((object, index) => {
            return (
                <div key={Math.random()} className="main-box-reply">
                    <div className="list-reply-comment">
                        <div className="box-avatar-cmt float-left">
                            <img src={object.getUser.image} className="img-fluid" width="50"/>
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
                        </div>
                    </div>
                    <div className="clearfix"/>
                </div>
            )
        });
        return list_reply;

    }
}

export default ReplyComment;

