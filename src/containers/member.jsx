import React,{Component} from 'react'
import ListArticle from '../components/list_article.jsx';
import Loading from '../components/loading.jsx';
const axios =  require('axios');
const domain = require('../../config_domain.js');

class Member extends Component{
    constructor(props){
        super(props)
        this.state ={
            article: '',
            page: 1
        }
    }

    componentDidMount(){

        let slug_user = this.props.match.params.slug;

        let promise = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/articles/getArticleNew',{user_id: "0", slug_user:slug_user, size:10,page: this.state.page}).then(res=>{
                res = res.data;
                res = res.data.results;
                resolve(res);
            }).catch(err=>{
                reject([]);
            });
        });

        Promise.all([promise]).then((data)=>{
            this.setState({article: data[0]});
        });
    }


    NextPage = (page)=>{
        this.setState({page: page});
    }

    render(){

        let list_article = this.state.article;

        return list_article ? (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">

                            <ListArticle data={list_article} />
                            <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.state.page +1)} className="more-comment">XEM THÊM...</a></div>

                        </div>

                    </div>
                </div>
            </div>
        ) : <Loading />;
    }
}

export default Member;