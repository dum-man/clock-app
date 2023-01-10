import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IClock, IQuote } from "./types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://" }),
  endpoints: (builder) => ({
    getTimeZone: builder.query<IClock, void>({
      query: () => ({
        url: "worldtimeapi.org/api/ip",
      }),
    }),
    getRandomQuote: builder.query<IQuote, void>({
      query: () => "api.quotable.io/random",
    }),
  }),
});

export default apiSlice;

export const { useGetTimeZoneQuery, useGetRandomQuoteQuery } = apiSlice;
