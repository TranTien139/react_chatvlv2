import { combineReducers } from 'redux'
import {setpage} from './setpage.js'

const rootReducer = combineReducers({
    page: setpage
})

export default rootReducer
