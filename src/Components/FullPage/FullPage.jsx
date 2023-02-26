import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

// Stylse
import styles from './FullPage.module.css'

// Images
import imgOption1 from '../../Images/IEC.jpg';
import imgOption2 from '../../Images/DEC.jpg';
import imgOption3 from '../../Images/IDEC.png';
import home from '../../Images/home.png'
import locpin from '../../Images/locationpin.png'
import help from '../../Images/setting.png'
import logo from '../../Images/logo.png'

// Components
// import Navbar from '../Navbar/Navbar';
import Landing1 from '../Landing1/Landing1';
import Landing2 from '../Landing2/Landing2';
import Footer from '../Footer/Footer';

const FullPage = () => {

    // Nav hanlder
    const [navActive, setNavActive] = useState(true);

    // Options Handler
    const [options, setOptions] = useState(true)
    const [option1, setOption1] = useState(false)
    const [option2, setOption2] = useState(false)
    const [option3, setOption3] = useState(false)
    const clickHandler = (option) => {
        if (option === "option1") {
            setOption1(true);
            setOptions(false);
            setNavActive(false);
        }
        if (option === "option2") {
            setOption2(true);
            setOptions(false);
            setNavActive(false)
        }
        if (option === "option3") {
            setOption3(true);
            setOptions(false);
            setNavActive(false)
        }
    }

    return ( 
        <div className={styles.fullpage_container}>
            <main>
                <section className={navActive ? styles.Navbar_section : styles.notActive_sec}>
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
                </section>
                <section className={options ? styles.App_Ops_sec : styles.Ops_notActive}>
                    <h1>Choose between the options below.</h1>
                    <div>
                        <button onClick={() => {clickHandler("option1")}}><img src={imgOption1} alt="First Options" /></button>
                        <button onClick={() => {clickHandler("option2")}}><img src={imgOption2} alt="Second Options" /></button>
                        <button onClick={() => {clickHandler("option3")}}><img src={imgOption3} alt="Third Options" /></button>
                    </div>
                </section>
                <section className={option1 ? styles.Landing_section : styles.Ops_notActive}>
                    <  Landing1  />
                </section>
                <section className={option2 ? styles.Landing_section : styles.Ops_notActive}>
                    <  Landing2  />
                </section>
                {/* <section className={styles.Footer_sections}>
                    <  Footer  />
                </section> */}
            </main>
        </div>
     );
}
 
export default FullPage;