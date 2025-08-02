import { configureStore } from '@reduxjs/toolkit';
import canvasSettingsReducer from './slices/canvas-settings.slice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    canvasSettings: canvasSettingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
