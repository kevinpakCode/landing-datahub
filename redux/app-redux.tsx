import {combineReducers} from 'redux'
import ModaleReducer from './reducers/modale'

const AppRedux = combineReducers({
  modaleReducer: ModaleReducer
})

export default AppRedux