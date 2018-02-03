import { combineReducers } from 'redux'
import {setpage} from './setpage.js'
import {getArticle} from './getArticle.js'

const rootReducer = combineReducers({
    page: setpage,
    article: getArticle,
    isloading: true,
});

export default rootReducer
