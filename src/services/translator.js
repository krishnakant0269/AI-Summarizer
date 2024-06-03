import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const translatorApi = createApi({
    reducerPath: "translatorApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://translate-plus.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '9f59056e33msh1e75fdad51d4b48p16e44ajsn36739427429c');
            headers.set('X-RapidAPI-Host', 'translate-plus.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTranslate: builder.mutation({
            query: (body) => ({
              url: '/translate',
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body,
            }),
          }),
    }),
});

export const { useGetTranslateMutation } = translatorApi;









