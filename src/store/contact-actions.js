import { contactActions } from './contact-slice';


export const fetchContactsData = () => {
    return async (dispatch) => {
        const fetchContacts = async () => {
            let url = new URL(`/contacts`, "http://192.168.1.5:5000");
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data;
        }

        try {
            const contactData = await fetchContacts()
            dispatch(
                contactActions.inserAllContacts({
                    contacts: contactData.contacts
                })
            )
        } catch (error) {
            console.log(error)
        }
    }
}

export const sendContactData = (payload) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            let url = new URL(`/contact`, "http://192.168.1.5:5000");

            const { editMode, ...body } = payload;

            let method = editMode === true ? "PUT" : "POST";

            const response = await fetch(
                url,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: method,
                    body: JSON.stringify(body)
                }
            );

            if (!response.ok) {
                throw new Error('Sending contact data failed.');
            }
            const data = await response.json();
            return data
        };

        try {
            await sendRequest();
            // const contact = 
            // console.log("contact", contact)
            // dispatch(
            //     contactActions.insertContact({})
            // )
            return true
        } catch (error) {
            throw new Error('Sending contact data failed.');
        }
    };
};

export const deleteContact = (payload) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            let url = new URL(`/contact`, "http://192.168.1.5:5000");

            const response = await fetch(
                url,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "DELETE",
                    body: JSON.stringify(payload)
                }
            );

            if (!response.ok) {
                throw new Error('Deleting contact failed.');
            }
            // return response.status === 200;
        }

        try {
            await sendRequest();
            dispatch(
                contactActions.removeContact(payload.email)
            )
        } catch (error) {
            throw new Error('Deleting contact failed.');
        }
    }
}