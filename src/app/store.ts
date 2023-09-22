import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rootReuducer } from './rootreducer';

export const store = configureStore({
    reducer: rootReuducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
