import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './Aboutus.module.css'

// Images
import email from '../../Images/email.png'
import phone from '../../Images/phone.png'
import map from '../../Images/map.png'
import home from '../../Images/home.png'
import locpin from '../../Images/locationpin.png'
import help from '../../Images/setting.png'
import logo from '../../Images/logo.png'

const AboutUs = () => {
    return ( 
        <div className={styles.AboutUs_Container}>
            <nav>
                <img src={logo} alt="logo" />
                    <Link to="/home">
                        <button><img src={home} alt="icon" />Home</button>
                    </Link>
                    <Link to="/aboutus">
                        <button><img src={locpin} alt="icon" />About us</button>
                    </Link>
                    <Link to="/help">
                        <button><img src={help} alt="icon" />Help</button>
                    </Link>
                    {/* <button onClick={()=> {setAdminActive(!adminActive)}}><img src={admin} alt="icon" />Admin</button> */}
            </nav>
            <div>
                <h1>Reach us via:</h1>
                <section className={styles.info_sec}>
                    <section className={styles.info_op}>
                        <img src={email} alt="" />
                        <div>
                            <p>Email:</p>
                            <p>dana.eutech@gmail.com</p>
                        </div>
                    </section>
                    <section className={styles.info_op}>
                        <img src={phone} alt="" />
                        <div>
                            <p>Telephone Number:</p>
                            <p>028-33901145</p>
                        </div>
                    </section>
                </section>
                <section className={styles.info_sec}>
                    <section className={styles.info_op}>
                        <img src={phone} alt="" />
                        <div>
                            <p>Phone Number:</p>
                            <p>09128860513</p>
                        </div>
                    </section>
                    <section className={styles.info_op}>
                        <img src={phone} alt="" />
                        <div>
                            <p>Fax:</p>
                            <p>028-33901879</p>
                        </div>
                    </section>
                </section>
                
                <h1>Find us here:</h1>
                <a href="https://www.google.com/maps/place/Qazvin,+Persian+Gulf+Ave,+No.+214,+Iran/@36.3195382,50.0087533,19z/data=!3m1!4b1!4m6!3m5!1s0x3ff4aacf4e620bf9:0x46da14850668ea4d!8m2!3d36.3195382!4d50.0093005!16s%2Fg%2F11n0_x2vw7">
                    <img className={styles.map_img} src={map} alt="" />
                </a>
                <h3>Qazvin, Imam Khomeini International university, Rosh center, Royesh building, Dana Company.</h3>

            </div>
        </div>
     );
}
 
export default AboutUs;