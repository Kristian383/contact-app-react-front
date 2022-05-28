import React from 'react'
import classes from "./ContactsView.module.scss"

function ContactsViews() {

    return (
        <div className={classes.container}>
            <h2>My Contacts</h2>
            {/* <router-link class="add-btn" to="/add">Add contact</router-link> */}
            <div className={classes['contacts-list']}>

            </div>
        </div>
    )
}

export default ContactsViews