import React from 'react'
import classes from "./TheHeader.module.scss"
import { NavLink } from 'react-router-dom';

function TheHeader() {

    return (
        <header  >
            <nav className={classes.container}>
                <div className={classes.title}><h2>ContactApp</h2></div>
                <ul className={classes.navigation}>
                    <li>
                        <NavLink activeClassName={classes.active} className={classes.link} to={`/contacts`}>
                            Contacts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} className={classes.link} to={`/add`}>
                            Add Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default TheHeader