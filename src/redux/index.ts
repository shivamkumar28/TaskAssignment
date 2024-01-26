import { combineReducers, configureStore } from '@reduxjs/toolkit'
import general from './general.slice';


const rootReducer = combineReducers({
    general: general,
});

const store = configureStore({
    reducer: rootReducer,
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch