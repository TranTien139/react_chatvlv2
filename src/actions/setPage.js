
function setpage(page){
    return function(dispatch){
        dispatch({type:'SET_PAGE',payload:page});
    }
}

function setpageHot(page){
    return function(dispatch){
        dispatch({type:'SET_PAGE_HOT',payload:page});
    }
}

function setpageImage(page){
    return function(dispatch){
        dispatch({type:'SET_PAGE_IMAGE',payload:page});
    }
}

function setpageVideo(page){
    return function(dispatch){
        dispatch({type:'SET_PAGE_VIDEO',payload:page});
    }
}

module.exports.setpage = setpage;
module.exports.setpageHot = setpageHot;
module.exports.setpageImage = setpageImage;
module.exports.setpageVideo = setpageVideo;
