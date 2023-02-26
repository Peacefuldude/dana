import React, { useEffect, useState } from "react";

// Picture
import logo from '../../../Images/logo.png'
import pdf2 from '../../../Images/pdf2.png'
import pdf3 from '../../../Images/pdf3.png'
import IEC from '../../../Images/IEC.jpg'

// Styles
import styles from "./Export.module.css";

const Export = (pdfData) => {

    // Date vars
    // var today = new Date();
    // const currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <div className={styles.Pdfsection_Container}>
            <section className={styles.pdf_header}>
                <img src={logo} alt="logo" />
                <div>
                    <p>This report file is made by {pdfData.pdfData.q} for {pdfData.pdfData.o} Co. under name of the {pdfData.pdfData.p} project for an IEC model.</p>
                </div>
            </section>
            {/* <section className={styles.com_data}>
                <img src={IEC} alt="" />
                <section>
                    <p>This report file is made by {pdfData.pdfData.q} for {pdfData.pdfData.o} Co. under name of the {pdfData.pdfData.p} project for an IEC model.</p>
                    <p>This report file is made by Daana App and all it's rights belongs to the respecful owner and creator.</p>
                </section>
            </section> */}
            <section className={styles.pdf_end_sec}>
                <img src={pdf2} alt="" />
                <div className={styles.end_sec_div}>
                    <div>
                        <section>
                            <p>Temperature</p>
                            <p>temperature type</p>
                            <p>Humidity</p>
                        </section>
                        <section>
                            <p>{pdfData.pdfData.a}</p>
                            <p>{pdfData.pdfData.r}</p>
                            <p>{pdfData.pdfData.b}</p>
                        </section>
                    </div>
                    <div>
                        <section>
                            <p>Efficiency</p>
                            <p>Province</p>
                        </section>
                        <section>
                            <p>{pdfData.pdfData.c}</p>
                            <p>{pdfData.pdfData.n}</p>
                        </section>
                    </div>
                </div>
            </section>
            {/* <section className={styles.test}>
            <div>
                <h1>Outputs</h1>
            </div>
            </section> */}
            <section className={styles.pdf_end_sec}>
                <img src={pdf3} alt="" />
                <div className={styles.end_sec_div}>
                    <div>
                        <section>
                            <p>WBT [°C]</p>
                            <p>X [g/kg air]</p>
                            <p>Water con. [g/kg air]</p>
                            <p>DBT_out [°C]</p>
                            <p>RH_out</p>
                        </section>
                        <section>
                            <p>{pdfData.pdfData.d}</p>
                            <p>{pdfData.pdfData.f}</p>
                            <p>{pdfData.pdfData.g}</p>
                            <p>{pdfData.pdfData.h}</p>
                            <p>{pdfData.pdfData.i}</p>
                        </section>
                    </div>
                    <div>
                        <section>
                            <p>WBT_out [°C]</p>
                            <p>DewT_out [°C]</p>
                            <p>X [g/kg air]</p>
                            <p>Water [g/kg air]</p>
                        </section>
                        <section>
                            <p>{pdfData.pdfData.j}</p>
                            <p>{pdfData.pdfData.k}</p>
                            <p>{pdfData.pdfData.l}</p>
                            <p>{pdfData.pdfData.m}</p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Export;
