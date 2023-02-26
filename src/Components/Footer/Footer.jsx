import React from 'react'
import { Link } from 'react-router-dom';

// Styles
import styles from './Footer.module.css'

const Footer = () => {
    return ( 
        <div className={styles.Footer_Container}>
            <div className={styles.copyright_div}>
                <div></div>
                <p><a href="ecma.app">Made By Ecma</a> - &copy; Copyright reserved by Daana</p>
                <div></div>
            </div>
        </div>
     );
}
 
export default Footer;