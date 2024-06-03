

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const keywordsApi = createApi({
  reducerPath: 'keywordsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gw.cortical.io/nlp' }),
  endpoints: (builder) => ({
    getKeywords: builder.mutation({
      query: (body) => ({
        url: '/keywords',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJvcmciOiI2NTNiOTllNjEzOGM3YzAwMDE2MDM5NTEiLCJpZCI6IjcwMjAwNmFmZmU3MjQxZDM4MTE5MmViYzE4ZTg0NTA5IiwiaCI6Im11cm11cjEyOCJ9'
        },
        body,
      }),
    }),
  }),
});

export const { useGetKeywordsMutation } = keywordsApi;


