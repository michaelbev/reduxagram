import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import comments from './comments'
import posts from './postss'

const rootReducer = combineReducers({ comments, posts, routing: routerReducer })

export default rootReducer
