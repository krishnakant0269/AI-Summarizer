
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const summaryApi = createApi({
    reducerPath: 'summaryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://open-ai21.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '9f59056e33msh1e75fdad51d4b48p16e44ajsn36739427429c');
            headers.set('X-RapidAPI-Host', 'open-ai21.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.mutation({
            query: (body) => ({
                url: '/summary',
                method: 'POST',
                body,
              }),
        }),
    }),
})

export const { useGetSummaryMutation } = summaryApi



