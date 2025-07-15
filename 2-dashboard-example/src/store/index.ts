import { configureStore } from '@reduxjs/toolkit'
import  counterReducer from './counter/counterSlice'
import { useDispatch,TypedUseSelectorHook, useSelector } from 'react-redux';


export const store = configureStore({
  reducer: {
        counter:counterReducer
    //aqi van todos los reducers 
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;