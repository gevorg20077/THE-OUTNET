import { createSlice } from "@reduxjs/toolkit";

const clickChat = createSlice({
    name: 'clickChat',
    initialState: false,
    reducers: {
        actionClickChat(state, action) {
            return !state
        },
        actionClickArrowDown(state, action) {
            return false
        },
        actionClickYes(state, action) {
            return false
        },
        actionClickEnd(state, action) {
            return false
        }
    }
})

export const clickChatReducer = clickChat.reducer
export const { actionClickChat } = clickChat.actions
export const clickArrowDownReducer = clickChat.reducer
export const { actionClickArrowDown } = clickChat.actions
export const clickYesReducer = clickChat.reducer
export const { actionClickYes } = clickChat.actions
export const clickEndReducer = clickChat.reducer
export const { actionClickEnd } = clickChat.actions