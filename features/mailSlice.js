import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
    name: "mail",
    initialState: {
        sendMessageIsOpen: false,
    },
    reducers: {
        openSendMessage: (state) => {
            state.sendMessageIsOpen = true;
        },
        closedSendMessage: (state) => {
            state.sendMessageIsOpen = false;
        }
    }
})

// Exports actions
export const { openSendMessage, closedSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;