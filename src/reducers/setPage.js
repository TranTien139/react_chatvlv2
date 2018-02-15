/**
 * Created by Tien on 2/14/2018.
 */

export function setpage(state = {}, action) {
    switch(action.type){
        case 'SET_PAGE':
            return {...state, page: action.payload};
            break;
        default:
            return state;
            break;
    }
    return state;
}

export function setpageHot(state = {}, action) {
    switch(action.type){
        case 'SET_PAGE_HOT':
            return {...state, page: action.payload};
            break;
        default:
            return state;
            break;
    }
    return state;
}

export function setpageImage(state = {}, action) {
    switch(action.type){
        case 'SET_PAGE_IMAGE':
            return {...state, page: action.payload};
            break;
        default:
            return state;
            break;
    }
    return state;
}

export function setpageVideo(state = {}, action) {
    switch(action.type){
        case 'SET_PAGE_VIDEO':
            return {...state, page: action.payload};
            break;
        default:
            return state;
            break;
    }
    return state;
}