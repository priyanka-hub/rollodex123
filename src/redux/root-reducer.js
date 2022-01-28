import {combineReducers} from 'redux'
import { searchReducer } from './monster/monster.reducer'
//import { userReducer } from 'react'
const rootReducer= combineReducers({
    search:searchReducer
})
export default rootReducer