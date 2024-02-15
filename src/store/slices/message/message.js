import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "messages",
    initialState: {
        massagesArr: [],
        virtualMessageArr: [],
        isMessages: false
    },
    reducers: {
        actionAddMessage(state, { payload }) {
            var virtualValue = ''
            if (payload.includes('hi') || payload.includes('hell') || payload.includes('how do you do')) {
                virtualValue = `Hi, welcome to The Outnet, I'm your virtual assistant.\nBefore we direct you to one of our advisors we would like to ask you a few questions so we can better assist you.`;
            } else if (payload.includes('new product')) {
                virtualValue = `"We've just received some exciting new arrivals! Our latest collection features trendy styles and fresh designs to keep you on the fashion forefront. Whether you're into casual wear or looking for something more formal, we have a variety of options to suit every taste.`
            } else if (payload.includes('top product')) {
                virtualValue = `This season, most popular items are our Levis, Adidas and Gucci. They been flying off the shelves, and customers love it for its style, comfort and versatility. Additionally, our collection Levis is receiving great reviews, with on-trend designs that are perfect for the current fashion scene. Feel free to check them out on our website, and if you have any specific preferences or questions, I'm here to assist you!`
            } else if (payload.includes('discount')) {
                virtualValue = `Yes, we currently have some fantastic discounts available! Our promotions include coats by Louis Vuitton, jeens by Levis, allowing you to save on your favorite items.`
            }
            else {
                virtualValue = `Sorry, I don't understand you`
            }
            return {
                massagesArr: [...state.massagesArr, payload],
                isMessages: true,
                virtualMessageArr: [...state.virtualMessageArr, virtualValue]
            }
        },
        actionCleanMessages(state, { payload }) {
            return {
                ...state,
                massagesArr: []
            }
        }
    }
})

export const messageReducer = messageSlice.reducer
export const { actionAddMessage, actionCleanMessages } = messageSlice.actions