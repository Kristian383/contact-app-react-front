import { createSlice } from '@reduxjs/toolkit';


const contactSlice = createSlice({
    name: "contact",
    initialState: {
        contacts: []
    },
    reducers: {
        inserAllContacts(state, payload) {
            state.contacts = payload;
        },
        removeContact(state, email) {
            let index;
            index = state.contacts.findIndex((contact) => contact.email === email);
            state.contacts.splice(index, 1);
        }
    }
})


export const contactActions = contactSlice.actions;

export default contactSlice;