import React from 'react';
import {Link} from 'react-router-dom';
import {NiceTime} from '../../functions/common.js';

class HotDaily extends React.Component {
    render() {
        let data = this.props.hot_daily;

        let hot_daily = data.map((object,index)=>{
           let auth = object.author.length > 0 ? object.author[0] : '';

            return (
                <div key={Math.random()} className="row item-daily-post">
                    <div className="col-5"><Link to={"/chi-tiet/"+ object._id} ><img src={object.image} className="img-fluid"/></Link>
                    </div>
                    <div className="col-7">
                        <h3 className="title"><Link to={"/chi-tiet/"+ object._id}>{object.title}</Link></h3>
                        <p>Đăng bởi <span><Link to={"/thanh-vien/"+ (auth.userSlug) }>{auth.name}</Link></span></p>
                        <p>{ NiceTime(object.published_at) }</p>
                    </div>
                </div>
            );
        });

        return hot_daily;
    }
}

export default HotDaily;