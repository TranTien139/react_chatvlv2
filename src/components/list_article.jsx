import React from 'react';
import {Link} from 'react-router-dom';
import {NiceTime} from '../../functions/common.js';

class ListArticle extends React.Component {
    render() {
        let data =  this.props.data;
        let list_article = data.map((object,index)=>{
        return (
            <div key={index} className="main-item">
                <div className="row">
                    <div className="col-sm-8 left-content-item text-center">
                        <Link to={"/chi-tiet/"+ object.id} ><img src={object.image} className="img-fluid" />
                            { object.type === 'video'?  <div className="icon-play" />:''  }
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <div className="right-content-item">
                            <h2><Link to={"/chi-tiet/"+ object.id}  className="jump_focus">{object.title}</Link></h2>
                            <div className="uinfo">
                                bởi <Link to={'/thanh-vien/'+object.getUser.userSlug }>{object.getUser.name}</Link>
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
                            <div className="list-emotion">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_like.gif" /></a></li>
                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_love.gif" /></a></li>
                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_haha.gif" /></a></li>
                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_wow.gif" /></a></li>
                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_sad.gif" /></a></li>
                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_angry.gif" /></a></li>
                                </ul>
                            </div>
                            <div className="your_selected">
                                Bạn: <span><img src="icon/icon_like.gif" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        });

        return list_article;
    }
}

export default ListArticle;