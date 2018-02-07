import React from 'react';
import {Link} from 'react-router-dom';
import {NiceTime} from '../../functions/common.js';

class HotDaily extends React.Component {
    render() {
        let data = this.props.hot_daily.results;

        let hot_daily = data.map((object,index)=>{
            return (
                <div key={Math.random()} className="row item-daily-post">
                    <div className="col-5"><Link to={"/chi-tiet/"+ object.id} ><img src={object.image} className="img-fluid"/></Link>
                    </div>
                    <div className="col-7">
                        <h3 className="title"><Link to={"/chi-tiet/"+ object.id}>{object.title}</Link></h3>
                        <p>Đăng bởi <span><Link to={"/chi-tiet/"+object.id }>{object.getUser.name}</Link></span></p>
                        <p>{ NiceTime(object.published_at) }</p>
                    </div>
                </div>
            );
        });

        return hot_daily;
    }
}

export default HotDaily;