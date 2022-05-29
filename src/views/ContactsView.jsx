import React, { useState, useEffect } from 'react'
import TheContact from '../components/TheContact'
import classes from "./ContactsView.module.scss"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsData } from '../store/contact-actions';

function ContactsViews() {
    // const [contacts, setContacts] = useState([])
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contact.contacts)

    useEffect(() => {
        dispatch(fetchContactsData())
    }, [dispatch])

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