import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';


const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
});
const Store = () => configureStore({
    reducer:rootReducer,
    middleware
});
export default Store;