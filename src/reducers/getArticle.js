export function getArticle(state = {article:[], isloading: true}, action) {
    let isloading = false;
    if(typeof action.payload !== 'undefined' && action.payload.length === 0){
        isloading = -1;
    }
    switch(action.type){
        case 'GET_ARTICLE':
            return {...state, article: state.article.concat(action.payload), isloading: isloading};
            break;
        case 'GET_ARTICLE_REJECT':
            return {...state}
            break;
        default:
            return state;
            break;
    }
    return state;
}
