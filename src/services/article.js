import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.articlextractor.com/v1',
        prepareHeaders: (headers) => {
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getArticle: builder.query({
            query: (params) =>  `/extract?url=${encodeURIComponent(params.articleurl)}&language=en&api_token=SWUCcDYymNgp8s6re3AlZqnUnMhtKSieKXWpMMmM\n`,
        }),
    }),
})

export const { useLazyGetArticleQuery } = articleApi






