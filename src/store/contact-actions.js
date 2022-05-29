import { contactActions } from './contact-slice';


export const fetchContactsData = () => {
    return async (dispatch) => {
        let url = new URL(`/contacts`, "http://192.168.1.5:5000");
        const fetchContacts = async () => {
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