import { apiSlice } from "./apiSlice.js";
import { MESSAGES_URL } from "../constants.js";

export const contactUsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        registerContact: builder.mutation({
            query : (data)=>({
                url: `${MESSAGES_URL}`,
                method: "POST",
                body: data,
            })
        })
    })
});

export const { useRegisterContactMutation } = contactUsApiSlice;
