import React from 'react'
import classes from "./DeleteModal.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DeleteModal({ contact }) {
    function closeDeleteModal() { }
    function sendDeleteEmail() { }

    return (
        <div className={`${classes["delete-modal-wrapper"]} ${classes.open}`} id="modal" ref="modal">
            <div className={classes["delete-modal"]}>
                <div className={classes["modal-header"]}>
                    <span ><FontAwesomeIcon icon={["fas", "trash"]} /> </span>
                    <h3>Delete contact - {{ contact }}?</h3>
                </div>
                <div className={classes["modal-body"]}>
                    <p>
                        You'll <b>permanently</b> lose all the data and there is no way back.
                    </p>
                </div>
                <div className={classes["modal-footer"]}>
                    <button className={`${classes.btn} classes["cancel-btn"]`} onClick={closeDeleteModal}>Cancel</button>
                    <button className={`${classes.btn} classes["delete-btn"]`} onClick={sendDeleteEmail}>Delete</button>
                </div>
            </div >
        </div >
    )
}

export default DeleteModal