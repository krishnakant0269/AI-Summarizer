import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

import { articleApi } from '../services/article'
import { keywordsApi } from '../services/keywords'
import { translatorApi } from '../services/translator'
import { summaryApi } from '../services/summarize'


export const store = configureStore({
    reducer: {
        auth : authSlice,
        [articleApi.reducerPath] : articleApi.reducer,
        [keywordsApi.reducerPath] : keywordsApi.reducer,
        [translatorApi.reducerPath] : translatorApi.reducer,
        [summaryApi.reducerPath] : translatorApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware, keywordsApi.middleware, translatorApi.middleware, summaryApi.middleware),
})