import React from 'react'
import TheContact from '../components/TheContact'
import classes from "./ContactsView.module.scss"

function ContactsViews() {
    const contacts = []
    return (
        <div className={classes.container}>
            <h2>My Contacts</h2>
            {/* <router-link class="add-btn" to="/add">Add contact</router-link> */}
            <div className={classes['contacts-list']}>
                {
                    contacts.map((contact) => (
                        <TheContact key={contact} contact={contact} />
                    ))
                }
            </div>
        </div>
    )
}

export default ContactsViews