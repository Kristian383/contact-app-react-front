import React, { useState, useEffect } from 'react'
import classes from "./TheContact.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TheContact({ contact }) {
    const [fullName, setFullName] = useState("");

    useEffect(() => {
        setFullName(contact.first_name + " " + contact.last_name)

    }, [])


    function toggleExpand() { }
    function openEditContact() { }
    function openDeleteModal() { }

    return (
        <div className={classes["contact-container"]} onClick={toggleExpand} >
            <img src="../user.png" alt="User" />
            <div className={classes["contact-info"]}>
                <div>
                    <FontAwesomeIcon icon={["fas", "user"]} /> {fullName}
                </div>
                <div>
                    <FontAwesomeIcon className={classes.icon} icon={["fas", "envelope"]} /> {contact.email}
                </div>
                <div>
                    <FontAwesomeIcon className={classes.icon} icon={["fas", "phone"]} /> {contact.phone_number}
                </div>
                <span className={classes["edit-btn"]}           >
                    <FontAwesomeIcon onClick={openEditContact} className={classes.icon} icon={["fas", "edit"]} />
                </span>
                <span className={classes["remove-btn"]} onClick={openDeleteModal}>
                    <FontAwesomeIcon className={classes.icon} icon={["fas", "trash"]} />
                </span>
            </div >
        </div >

        //     delete -modal
        //     <transition name="fade">
        //         <delete-modal
        //             v-if="showDeleteModal"
        //         @close-modal="closeDeleteModal"
        //         @send-delete="submitDeleteRequest"
        //         :contact="contact.first_name + ' ' + contact.last_name"
        //       ></delete-modal>
        //     </transition >
    )
}

export default TheContact