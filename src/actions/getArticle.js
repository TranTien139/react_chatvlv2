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

function getArticleHot(page) {
    return function (dispatch) {
        axios.post(domain.domain+'/articles/getHotArticle',{user_id: "0", type:1, size:10, page: page}).then(response=>{
            response = response.data;
            response = response.data.results;
            dispatch({type:'GET_HOT', payload: response});
        }).catch(err=>{
            dispatch({type:'GET_HOT_REJECT', payload: err});
        });
    }
}

module.exports.getArticleNew = getArticleNew;
module.exports.getArticleHot = getArticleHot;