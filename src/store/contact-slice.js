import { createSlice } from '@reduxjs/toolkit';


const contactSlice = createSlice({
    name: "contact",
    initialState: {
        contacts: [],
        notification: null
    },
    reducers: {
        inserAllContacts(state, action) {
            state.contacts = action.payload.contacts;
        },
        removeContact(state, action) {
            let index;
            index = state.contacts.findIndex((contact) => contact.email === action.payload);
            state.contacts.splice(index, 1);
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
})


export const contactActions = contactSlice.actions;

export default contactSlice;