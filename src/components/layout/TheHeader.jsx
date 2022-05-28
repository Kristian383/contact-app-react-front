import React from 'react'
import classes from "./TheHeader.module.scss"
import { useParams, Route, Link, useRouteMatch, NavLink } from 'react-router-dom';

function TheHeader() {

    // useEffect(() => {
    //     window.addEventListener("scroll",)

    //     return () => {
    //         second
    //     }
    // }, [third])


    // const [scrolledNav, setScrolledNav] = useState();


    return (
        <header  >
            {/* className={scrolledNav ? 'scrolled-nav' : ""} */}
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