import axios from 'axios';
let domain = require('../../config_domain.js');

function getArticleNew(page) {
    return function (dispatch) {
        axios.post(domain.domain+'/articles/getArticleNew',{user_id: "0", size:10, page: page}).then(response=>{
            response = response.data;
            response = response.data.results;
            dispatch({type:'GET_ARTICLE', payload: response});
        }).catch(err=>{
            dispatch({type:'GET_ARTICLE_REJECT', payload: err});
        });
    }
}

module.exports.getArticleNew = getArticleNew;