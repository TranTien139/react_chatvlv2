import { combineReducers } from 'redux'
import {setpage} from './setpage.js'
import {getArticle} from './getArticle.js'
import {getHot} from './getHot.js'

const rootReducer = combineReducers({
    page: setpage,
    article: getArticle,
    hot:getHot,
    isloading: true,
});

export default rootReducer
