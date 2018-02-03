export function getArticle(state = {article:[], isloading: true}, action) {
    switch(action.type){
        case 'GET_ARTICLE':
            return {...state, article: state.article.concat(action.payload), isloading: false};
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
