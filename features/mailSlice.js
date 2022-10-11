import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
    name: "mail",
    initialState: {
        sendMessageIsOpen: false,
    },
    reducers: {
        openSendMessage: state => {
            state.sendMessageIsOpen = true;
        },
        closedSendMessage: state => {
            state.sendMessageIsOpen = true;
        }
    }
})

// Exports actions
export const { openSendMessage, closedSendMessage } = mailSlice;

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;