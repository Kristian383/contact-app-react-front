import React, { useState, useEffect } from 'react'
import TheContact from '../components/TheContact'
import classes from "./ContactsView.module.scss"
import { Link } from 'react-router-dom';

function ContactsViews() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        let url = new URL(`/contacts`, "http://192.168.1.5:5000");
        const fetchContacts = async () => {
            const response = await fetch(url);
            const responseData = await response.json();
            setContacts(responseData.contacts)
        }
        fetchContacts()
    }, [])

    return (
        <div className={classes.container}>
            <h2>My Contacts</h2>
            <Link className={classes["add-btn"]} to="/add">Add contact</Link>
            <div className={classes['contacts-list']}>
                {
                    contacts.map((contact, index) => (
                        <TheContact key={index} contact={contact} />
                    ))
                }
            </div>
        </div>
    )
}

export default ContactsViews