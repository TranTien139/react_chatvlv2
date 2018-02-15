export function getHot(state = {hot:[], isloading: true}, action) {
    switch(action.type){
        case 'GET_HOT':
            return {...state, hot: state.hot.concat(action.payload), isloading: false};
            break;
        case 'GET_HOT_REJECT':
            return {...state}
            break;
        default:
            return state;
            break;
    }
    return state;
}

export function getImage(state = {image:[], isloading: true}, action) {
    switch(action.type){
        case 'GET_IMAGE':
            return {...state, image: state.image.concat(action.payload), isloading: false};
            break;
        case 'GET_IMAGE_REJECT':
            return {...state}
            break;
        default:
            return state;
            break;
    }
    return state;
}

export function getVideo(state = {video:[], isloading: true}, action) {
    switch(action.type){
        case 'GET_VIDEO':
            return {...state, video: state.video.concat(action.payload), isloading: false};
            break;
        case 'GET_VIDEO_REJECT':
            return {...state}
            break;
        default:
            return state;
            break;
    }
    return state;
}
