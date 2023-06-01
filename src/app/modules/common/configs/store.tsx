import { configureStore } from '@reduxjs/toolkit';

const reducers: Record<string, unknown> = {}

const orderedReducers = Object.keys(reducers)
    .sort()
    .reduce((obj: any, key: string) => {
        obj[key] = reducers[key];
        return obj;
    }, {});

export const store = configureStore({
    reducer: orderedReducers,
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
