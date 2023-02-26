import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './Navbar.module.css'

// Images
import home from '../../Images/home.png'
import logo from '../../Images/logo.png'
import admin from '../../Images/admin.png'

const Navbar = () => {

    return ( 
        <div className={styles.Navbar_container}>
            <nav>
                <img src={logo} alt="logo" />
                <Link>
                    <button><img src={home} alt="icon" />Home</button>
                </Link>
                <Link>
                    <button><img src={admin} alt="icon" />Admin</button>
                </Link>
            </nav>
        </div>
     );
}
 
export default Navbar;