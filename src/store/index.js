import {combineReducers, createStore} from 'redux'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './reducers/authReducer'
import userReducer from './reducers/userReducer'

const rootReducer=combineReducers({
    auth:authReducer,
    user:userReducer
})

const persistConfig={
    key:'root',
    storage,
    // whitelist:['auth']
}

const persistedReducer=persistReducer(persistConfig,rootReducer)

const store=createStore(persistedReducer)

const persistor=persistStore(store)

export{store,persistor}