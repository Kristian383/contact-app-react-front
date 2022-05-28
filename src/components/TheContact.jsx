import React from 'react'
import classes from "./TheContact.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TheContact({ contact }) {
    const fullName = "kiki"

    function toggleExpand() { }
    function openEditContact() { }
    function openDeleteModal() { }

    return (
        <div className={classes["contact-container"]} onClick={toggleExpand} >
            <img src="../user.png" alt="User" />
            <div className={classes["contact-info"]}>
                <div>
                    {/* <font-awesome-icon class="icon" icon="user" /> {{ fullName }} */}
                    <FontAwesomeIcon icon={["far", "user"]} /> {fullName}
                </div>
                {/* <div>
                    <FontAwesomeIcon className={classes.icon} icon={["far", "envelope"]} /> {contact.email}
                </div> */}
                <div>
                    {/* <FontAwesomeIcon className={classes.icon} icon={["far", "phone"]} /> {contact.phone_number} */}
                </div>
                <span className={classes["edit-btn"]}           >
                    <FontAwesomeIcon onClick={openEditContact} className={classes.icon} icon={["far", "edit"]} />
                </span>
                <span className={classes["remove-btn"]} onClick={openDeleteModal}>
                    {/* <font-awesome-icon class="icon" icon="trash" /> */}
                    <FontAwesomeIcon className={classes.icon} icon={["far", "trash"]} />

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