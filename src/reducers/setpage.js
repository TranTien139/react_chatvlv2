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
