import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-data-extraction-and-summarization.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '9f59056e33msh1e75fdad51d4b48p16e44ajsn36739427429c');
            headers.set('X-RapidAPI-Host', 'article-data-extraction-and-summarization.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getArticle: builder.query({
            query: (params) =>  `/article?url=${encodeURIComponent(params.articleurl)}`,
        }),
    }),
})

export const { useLazyGetArticleQuery } = articleApi







