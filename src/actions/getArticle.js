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

function getArticleImage(page) {
    return function (dispatch) {
        axios.post(domain.domain+'/articles/getArticleNew',{user_id: "0", type:1, size:10, page: page}).then(response=>{
            response = response.data;
            response = response.data.results;
            dispatch({type:'GET_IMAGE', payload: response});
        }).catch(err=>{
            dispatch({type:'GET_IMAGE_REJECT', payload: err});
        });
    }
}

function getArticleVideo(page) {
    return function (dispatch) {
        axios.post(domain.domain+'/articles/getArticleNew',{user_id: "0", type:2, size:10, page: page}).then(response=>{
            response = response.data;
            response = response.data.results;
            dispatch({type:'GET_VIDEO', payload: response});
        }).catch(err=>{
            dispatch({type:'GET_VIDEO_REJECT', payload: err});
        });
    }
}

function getTopUser(type) {
    return function (dispatch) {
        axios.post(domain.domain+'/users/getTopUser',{user_id: "0",type: type }).then(res=>{
            res = res.data;
            res = res.data.results;
            dispatch({type:'GET_TOPUSER'+type, payload: res});
        }).catch(err=>{
            dispatch({type:'GET_TOPUSER_REJECT', payload: err});
        });
    }
}

module.exports.getArticleNew = getArticleNew;
module.exports.getArticleHot = getArticleHot;
module.exports.getArticleImage = getArticleImage;
module.exports.getArticleVideo = getArticleVideo;
module.exports.getTopUser = getTopUser;