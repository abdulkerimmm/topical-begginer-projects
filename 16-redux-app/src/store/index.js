import { combineReducers } from "redux"
import countReducer from "./reducers/countReducer"
import userReducer from "./reducers/userReducer"
import { createStore } from 'redux';
import  thunk  from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
import {persistReducer,persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const reducer= combineReducers({
    count:countReducer,
    user:userReducer
  
})
    

const persistConfig={
    key:"root",
    storage,
    version:1,
    whitelist:['count','user'],
    blacklist:[]
}

const persistedReducer=persistReducer(persistConfig,reducer)
export const store=createStore(persistedReducer,applyMiddleware(thunk,logger))
export const persistor=persistStore(store)




 





export default reducer

