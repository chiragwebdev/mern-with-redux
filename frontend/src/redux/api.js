import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postapi = createApi({
    reducerPath: "postapi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/'
    }),
    endpoints: (builder) => ({
        Allpost: builder.query({
            query: () => ({
                url: 'datasend',
                method: 'get'
            })
        }),
        Idpost: builder.query({
            query: (id) => ({
                url: `datasend/${id}`,
                method: 'get'
            })
        }),
        CreatnewData: builder.mutation({
            query: (newpost) => ({
                url: 'datasend',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: newpost,

            })
        })
        // Deletepost: builder.mutation({
        //     query: (id) => ({
        //         url: `users/${id}`,
        //         method: 'delete'
        //     })
        // }),

    })
})

export const { useAllpostQuery, useIdpostQuery, useCreatnewDataMutation ,useDeletepostMutation, } = postapi 