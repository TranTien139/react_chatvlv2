import React from 'react';
import {Link} from 'react-router-dom';

class TopUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {

        let data =  this.props.top_user;

        let data_left = data.filter((obj, index)=>{
            return index%2 === 0;
        });

        let data_right = data.filter((obj, index)=>{
            return index%2 !== 0;
        });

        let list_user_left = data_left.map((object,index)=>{
            return (
                <div key={Math.random()} className="row">
                    <div className="col-4"><Link to={'/thanh-vien/'+ object.userSlug}><img src={object.image} className="img-responsive img-user" /></Link></div>
                    <div className="col-8">
                        <p className="name"><Link to={'/thanh-vien/'+ object.userSlug}>{object.name}</Link></p>
                        <p><img src="/icon/view_icon.png" /><span>&nbsp;{object.total_score}</span></p>
                    </div>
                </div>
            );
        });

        let list_user_right = data_right.map((object,index)=>{
            return (
                <div key={Math.random()} className="row">
                    <div className="col-4"><Link to={'/thanh-vien/'+ object.userSlug}><img src={object.image} className="img-responsive img-user" /></Link></div>
                    <div className="col-8">
                        <p className="name"><Link to={'/thanh-vien/'+ object.userSlug}>{object.name}</Link></p>
                        <p><img src="/icon/view_icon.png" /><span>&nbsp;{object.total_score}</span></p>
                    </div>
                </div>
            );
        });

        return(
                <div key={Math.random()} className="row top-user-list">
                    <div className="col-sm-6 pading-left0">
                        {list_user_left}
                    </div>
                    <div className="col-sm-6 pading-left0">
                        {list_user_right}
                    </div>
                </div>
        );
    }
}

export default TopUser;