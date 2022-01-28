import {combineReducers} from 'redux'
import { searchMonster } from './monster/monster.action'
import { rootReducer } from 'react'
const rootReducer= combineReducers({
    search:searchReducer
})
export default rootreducer