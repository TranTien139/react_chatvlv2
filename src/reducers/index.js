import { combineReducers } from 'redux'
import {setpage,setpageHot,setpageImage,setpageVideo} from './setPage.js'
import {getArticle} from './getArticle.js'
import {getHot,getVideo,getImage} from './getHot.js'


const rootReducer = combineReducers({
    page: setpage,
    article: getArticle,
    hot:getHot,
    image:getImage,
    video:getVideo,
    isloading: true
});

export default rootReducer
