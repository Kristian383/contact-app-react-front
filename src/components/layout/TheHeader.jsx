import React, { useState } from 'react'
import classes from "./TheHeader.module.scss"
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

function TheHeader() {

    // useEffect(() => {
    //     window.addEventListener("scroll",)

    //     return () => {
    //         second
    //     }
    // }, [third])


    const [scrolledNav, setScrolledNav] = useState();


    return (
        <header className={scrolledNav ? 'scrolled-nav' : ""} >
            <nav className={classes.container}>
                <div className={classes.title}><h2>ContactApp</h2></div>
                <ul className={classes.navigation}>
                    <li>
                        <Link className={classes.link} to={`/contacts`}>
                            Contacts
                        </Link>
                        {/* <router-link class="link" active-class="active" to="/"
                        >Home</router-link
                        > */}
                    </li>

                    <li>
                        {/* <router-link class="link" active-class="active" to="/add"
                        >Add Contact</router-link
                        > */}
                        <Link className={classes.link} to={`/add`}>
                            Add Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default TheHeader