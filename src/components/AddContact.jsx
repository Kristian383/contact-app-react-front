import React, { useEffect, useState } from 'react'
import ButtonSave from './ui/ButtonSave'
import classes from "./AddContact.module.scss"
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { sendContactData } from '../store/contact-actions';

function AddContact() {

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [editMode, setEditMode] = useState(false)

    const [firstNameIsValid, setfirstNameIsValid] = useState(true)
    const [lastNameIsValid, setlastNameIsValid] = useState(true)
    const [emailIsValid, setemailIsValid] = useState(true)
    const [phoneNumberIsValid, setphoneNumberIsValid] = useState(true)

    const contacts = useSelector(state => state.contact.contacts)
    const params = useParams();

    useEffect(() => {
        const emailParam = params.email;

        if (!emailParam) {
            return;
        }

        if (contacts.length) {
            const contact = contacts.find(el => el.email === emailParam)
            setfirstName(contact.first_name);
            setlastName(contact.last_name);
            setEmail(params.email);
            setphoneNumber(contact.phone_number);
            setEditMode(true)
        }


    }, [contacts, params.email])

    function validateForm() {
        setfirstNameIsValid(true)
        setlastNameIsValid(true)
        setemailIsValid(true)
        setphoneNumberIsValid(true)

        if (!firstName.length || firstName.length > 40) {
            setfirstNameIsValid(false)
        }
        if (!lastName.length || lastName.length > 40) {
            setlastNameIsValid(false)
        }
        if (!email.length || email.length > 80) {
            setemailIsValid(false)
        }
        if (phoneNumber.length === 0 || isNaN(phoneNumber)) {
            setphoneNumberIsValid(false)
        }

        if (
            firstNameIsValid &&
            lastNameIsValid &&
            emailIsValid &&
            phoneNumberIsValid
        ) {
            return true;
        }

        return false;
    }

    const history = useHistory()
    const dispatch = useDispatch()

    function addContact(e) {
        e.preventDefault();
        if (validateForm() === false) {
            return;
        }

        const payload = {
            last_name: lastName,
            first_name: firstName,
            email: email,
            phone: phoneNumber,
            editMode: editMode,
        };
        dispatch(sendContactData(payload)).then(res => {
            if (res) {
                history.push("/contacts")
            }
        })
    }

    return (
        <div className={classes["add-contact-container"]}>
            <form onSubmit={addContact} >
                <div className={classes["form-title"]}>Add Contact</div>

                <div className={classes["input-group"]}>
                    <label htmlFor="first">First Name</label>
                    <input type="text" onChange={e => setfirstName(e.target.value)} value={firstName} id="first" />
                    {!firstNameIsValid && <p className={classes["error-text"]} >
                        Please insert less than 40 characters.
                    </p>}
                </div>

                <div className={classes["input-group"]}>
                    <label htmlFor="last">Last Name</label>
                    <input type="text" id="last" onChange={e => setlastName(e.target.value)} value={lastName} />
                    {!lastNameIsValid && <p className={classes["error-text"]} >
                        Please insert less than 40 characters.
                    </p>}
                </div>

                <div className={classes["input-group"]}>
                    <label htmlFor="last">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={editMode ? true : false}
                    />
                    {!emailIsValid && <p className={classes["error-text"]} >
                        Please insert less than 80 characters.
                    </p>}
                </div>
                <div className={classes["input-group"]}>
                    <label htmlFor="phone">Phone Number</label>
                    <input onChange={e => setphoneNumber(e.target.value)} type="tel" id="phone" value={phoneNumber} />
                    {!phoneNumberIsValid && <p className={classes["error-text"]} >
                        Please insert number with less than 20 digits.
                    </p>}
                </div>
                <div className={classes["save-btn-container"]}>
                    {/* <button-save @click.prevent="addContact"></button-save> */}
                    <ButtonSave />
                </div>
            </form >
        </div >
    )
}

export default AddContact