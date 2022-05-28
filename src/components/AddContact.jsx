import React, { useRef, useState } from 'react'
import ButtonSave from './ui/ButtonSave'
import classes from "./AddContact.module.scss"

function AddContact() {

    const firstName = useRef("")
    const lastName = useRef("")
    const email = useRef("")
    const phoneNumber = useRef("")
    const [editMode, setEditMode] = useState(null)

    const firstNameIsValid = useRef("")
    const lastNameIsValid = useRef("")
    const emailIsValid = useRef("")
    const phoneNumberIsValid = useRef("")

    function addContact(e) {
        e.preventDefault();

    }

    return (
        <div className={classes["add-contact-container"]}>
            <form>
                <div className={classes["form-title"]}>Add Contact</div>

                <div className={classes["input-group"]}>
                    <label htmlFor="first">First Name</label>
                    <input type="text" ref={firstName} id="first" />
                    {!firstNameIsValid && <p className={classes["error-text"]} >
                        Please insert less than 40 characters.
                    </p>}
                </div>

                <div className={classes["input-group"]}>
                    <label htmlFor="last">Last Name</label>
                    <input type="text" id="last" ref={lastName} />
                    {!lastNameIsValid && <p className={classes["error-text"]} >
                        Please insert less than 40 characters.
                    </p>}
                </div>

                <div className={classes["input-group"]}>
                    <label htmlFor="last">Email</label>
                    <input
                        type="email"
                        id="email"
                        ref={email}
                        disabled={editMode ? true : false}
                    />
                    {!emailIsValid && <p className={classes["error-text"]} >
                        Please insert less than 80 characters.
                    </p>}
                </div>
                <div className={classes["input-group"]}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" ref={phoneNumber} />
                    {!phoneNumberIsValid && <p className={classes["error-text"]} >
                        Please insert number with less than 20 digits.
                    </p>}
                </div>
                <div className={classes["save-btn-container"]}>
                    {/* <button-save @click.prevent="addContact"></button-save> */}
                    <ButtonSave onClick={addContact} />
                </div>
            </form >
        </div >
    )
}

export default AddContact