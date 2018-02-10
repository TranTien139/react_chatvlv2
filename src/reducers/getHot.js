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
