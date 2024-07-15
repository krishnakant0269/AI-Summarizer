import { configureStore } from '@reduxjs/toolkit'
import { keywordsApi } from '../services/keywords'
import { translatorApi } from '../services/translator'
import { articleApi } from '../services/summarize'


export const store = configureStore({
    reducer: {
        [articleApi.reducerPath] : articleApi.reducer,
        [keywordsApi.reducerPath] : keywordsApi.reducer,
        [translatorApi.reducerPath] : translatorApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware, keywordsApi.middleware, translatorApi.middleware,),
})


