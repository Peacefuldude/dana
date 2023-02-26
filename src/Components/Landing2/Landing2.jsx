import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';

// Styles
import styles from './Landing2.module.css'

// Components
import ExportExcel from '../../Functions/Excelexport';
import Export from './Export/Export';
import Navbar from '../Navbar/Navbar';

// Functions
import { validate } from '../../Functions/validate';
import { DECmath } from '../../Functions/DECmath';

// Pictures
import mapimg from '../../Images/maps/mapD.png'

// Navbar images
import home from '../../Images/home.png'
import locpin from '../../Images/locationpin.png'
import help from '../../Images/setting.png'
import logo from '../../Images/logo.png'
// import admin from '../../Images/admin.png'

// Provinces
import mapAZARBAIJANSHARGHI from '../../Images/maps/mapAzarShargh.png'
import mapAZARBAIJANGHARBI from '../../Images/maps/mapAzarGharb.png'
import mapARDEBIL from '../../Images/maps/mapArdebil.png'
import mapESFEGAN from '../../Images/maps/mapEsfahan.png'
import mapALBORZ from '../../Images/maps/mapAlborz.png'
import mapILAM from '../../Images/maps/mapIlam.png'
import mapBOOSHEHR from '../../Images/maps/mapBooshehr.png'
import mapTEHRAN from '../../Images/maps/mapTehran.png'
import mapCHAHARMAHAL from '../../Images/maps/mapChaharmahal.png'
import mapKHORJONOOBI from '../../Images/maps/mapKhorjonoob.png'
import mapKHORRAZAVI from '../../Images/maps/mapKhorMarkaz.png'
import mapKHORSHOMALI from '../../Images/maps/mapKhorShomal.png'
import mapKHOOZESTAN from '../../Images/maps/mapKhoozestan.png'
import mapZANJAN from '../../Images/maps/mapZanjan.png'
import mapSEMNAN from '../../Images/maps/mapSemnan.png'
import mapSISTAN from '../../Images/maps/mapSistan.png'
import mapFARS from '../../Images/maps/mapShiraz.png'
import mapQAZVIN from '../../Images/maps/mapQazvin.png'
import mapQOM from '../../Images/maps/mapGhom.png'
import mapKORDESTAN from '../../Images/maps/mapKordestan.png'
import mapKERMAN from '../../Images/maps/mapKerman.png'
import mapKERMANSHAH from '../../Images/maps/mapKermanshah.png'
import mapKOKILOOYE from '../../Images/maps/mapKohkilooye.png'
import mapGOLESTAN from '../../Images/maps/mapGolestan.png'
import mapGILAN from '../../Images/maps/mapGilan.png'
import mapLORESTAN from '../../Images/maps/mapLorestan.png'
import mapMAZANDARAN from '../../Images/maps/mapMazan.png'
import mapMARKAZI from '../../Images/maps/mapMarkazi.png'
import mapHORMOZGAN from '../../Images/maps/mapHormozgan.png'
import mapHAMEDAN from '../../Images/maps/mapHamedan.png'
import mapYAZD from '../../Images/maps/mapYazd.png'

const Landing2 = () => {

    const [provinces, setProvinces] = useState({
        AZARBAIJANSHARGHI: {
            temfa: "93",
            temcan: "31.11",
            hu: "31.86"
        },
        AZARBAIJANGHARBI: {
            temfa: "88",
            temcan: "33.89",
            hu: "23.75"
        },
        ARDEBIL: {
            temfa: "85.5",
            temcan: "29.72",
            hu: "44.34"
        },
        ESFEGAN: {
            temfa: "97.5",
            temcan: "36.39",
            hu: "14.84"
        },
        ALBORZ: {
            temfa: "96",
            temcan: "35.56",
            hu: "20.47"
        },
        ILAM: {
            temfa: "95",
            temcan: "35.00",
            hu: "25.4"
        },
        BOOSHEHR: {
            temfa: "104",
            temcan: "40.00",
            hu: "43.71"
        },
        TEHRAN: {
            temfa: "100",
            temcan: "37.78",
            hu: "30.44"
        },
        CHAHARMAHAL: {
            temfa: "92",
            temcan: "33.33",
            hu: "22.96"
        },
        KHORJONOOB: {
            temfa: "98",
            temcan: "36.67",
            hu: "13.8"
        },
        KHORRAZAVI: {
            temfa: "95.5",
            temcan: "35.28",
            hu: "28"
        },
        KHORSHOMAL: {
            temfa: "95",
            temcan: "35.00",
            hu: "27.74"
        },
        KHOOZESTAN: {
            temfa: "115.5",
            temcan: "46.39",
            hu: "25.66"
        },
        ZANJAN: {
            temfa: "91.5",
            temcan: "33.6",
            hu: "23.78"
        },
        SEMNAN: {
            temfa: "101",
            temcan: "38.33",
            hu: "22.05"
        },
        SISTAN: {
            temfa: "99.5",
            temcan: "37.50",
            hu: "12.74"
        },
        FARS: {
            temfa: "100.5",
            temcan: "38.06",
            hu: "10.11"
        },
        QAZVIN: {
            temfa: "95.5",
            temcan: "35.28",
            hu: "22.58"
        },
        QOM: {
            temfa: "104",
            temcan: "40.00",
            hu: "17.42"
        },
        KORDESTAN: {
            temfa: "95",
            temcan: "35.00",
            hu: "21"
        },
        KERMAN: {
            temfa: "97.5",
            temcan: "36.39",
            hu: "11.41"
        },
        KERMANSHAH: {
            temfa: "97.5",
            temcan: "36.39",
            hu: "13.45"
        },
        KOHKILOO: {
            temfa: "9",
            temcan: "-12.78",
            hu: "18.98"
        },
        GOLESTAN: {
            temfa: "95",
            temcan: "35.00",
            hu: "46.27"
        },
        GILAN: {
            temfa: "89.5",
            temcan: "31.94",
            hu: "61.31"
        },
        LORESTAN: {
            temfa: "109.5",
            temcan: "43.06",
            hu: "24.85"
        },
        MAZANDARAN: {
            temfa: "92.5",
            temcan: "33.61",
            hu: "55.89"
        },
        MARKAZI: {
            temfa: "96",
            temcan: "35.56",
            hu: "16.94"
        },
        HORMOZGAN: {
            temfa: "105",
            temcan: "40.56",
            hu: "54.03"
        },
        HAMEDAN: {
            temfa: "92.05",
            temcan: "33.61",
            hu: "22.03"
        },
        YAZD: {
            temfa: "88.5",
            temcan: "31.39",
            hu: "19.17"
        },
    })
    
    // Admin section
    // const adminTempHandler = (event) => {
    //     setProvinces({
    //         ...provinces,
    //         [event.target.name.AZARBAIJANSHARGHI]: event.target.value,
    //     });
    // };
    
    // Gathering Data
    const [data, setData] = useState({
        temperature: "",
        humidity: "",
        baze: "",
        province: "",
        CompanyName: "",
        ProjectName: "",
        Designer: "",
        type: "",
    });

    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const [touched, setTouched] = useState({});
    
    const focusHandler = (event) => {
        setTouched({
            ...touched,
            [event.target.name]: true,
        });
    };

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setErrors(validate(data));
    }, [data, touched]);

    const typeHandler = (event) => {
        if (event.target.value === "fa") {
            setData({
                ...data,
                type: "Fahrenheit",
            });
        }
        if (event.target.value === "cen") {
            setData({
                ...data,
                type: "centigrade",
            });
        }
    }


    // Math stuff and preparing the Data
    const [result, setResult] = useState({});
    const [resultIsReady, setResultIsReady] = useState(false);

    const resultHandler = () => {
        if (!Object.keys(errors).length) {
            setResult(
                DECmath(Number(data.temperature), Number(data.humidity), Number(data.baze))
            );
            setResultIsReady(true);
        } else {
            setTouched({
                temperature: true,
                humidity: true,
            });
        }
    }

    console.log(result);

    // Map functions
    const [option0, setOption0] = useState(true);
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);
    const [option5, setOption5] = useState(false);
    const [option6, setOption6] = useState(false);
    const [option7, setOption7] = useState(false);
    const [option8, setOption8] = useState(false);
    const [option9, setOption9] = useState(false);
    const [option10, setOption10] = useState(false);
    const [option11, setOption11] = useState(false);
    const [option12, setOption12] = useState(false);
    const [option13, setOption13] = useState(false);
    const [option14, setOption14] = useState(false);
    const [option15, setOption15] = useState(false);
    const [option16, setOption16] = useState(false);
    const [option17, setOption17] = useState(false);
    const [option18, setOption18] = useState(false);
    const [option19, setOption19] = useState(false);
    const [option20, setOption20] = useState(false);
    const [option21, setOption21] = useState(false);
    const [option22, setOption22] = useState(false);
    const [option23, setOption23] = useState(false);
    const [option24, setOption24] = useState(false);
    const [option25, setOption25] = useState(false);
    const [option26, setOption26] = useState(false);
    const [option27, setOption27] = useState(false);
    const [option28, setOption28] = useState(false);
    const [option29, setOption29] = useState(false);
    const [option30, setOption30] = useState(false);
    const [option31, setOption31] = useState(false);
    const mapHandler = (event) => {
        if (event.target.value === "AZARBAIJANSHARGHI") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.AZARBAIJANSHARGHI.temcan,
                humidity: provinces.AZARBAIJANSHARGHI.hu,
                province: "East Azarbaijan",
                type: "Centigrade"
            });
            setOption1(true)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "AZARBAIJANSHARGHIfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.AZARBAIJANSHARGHI.temfa,
                humidity: provinces.AZARBAIJANSHARGHI.hu,
                province: "East Azarbaijan",
                type: "Fahrenheit"
            });
            setOption1(true)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "AZARBAIJANGHARBI") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.AZARBAIJANGHARBI.temcan,
                humidity: provinces.AZARBAIJANGHARBI.hu,
                province: "West Azarbaijan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(true)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "AZARBAIJANGHARBIfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.AZARBAIJANGHARBI.temfa,
                humidity: provinces.AZARBAIJANGHARBI.hu,
                province: "West Azarbaijan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(true)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "ARDEBIL") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.ARDEBIL.temcan,
                humidity: provinces.ARDEBIL.hu,
                province: "Ardabil",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(true)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "ARDEBILfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.ARDEBIL.temfa,
                humidity: provinces.ARDEBIL.hu,
                province: "Ardabil",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(true)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "ESFEGAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.ESFEGAN.temcan,
                humidity: provinces.ESFEGAN.hu,
                province: "Isfahan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(true)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "ESFEGANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.ESFEGAN.temfa,
                humidity: provinces.ESFEGAN.hu,
                province: "Isfahan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(true)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "ALBORZ") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.ALBORZ.temcan,
                humidity: provinces.ALBORZ.hu,
                province: "Alborz",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(true)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "ALBORZfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.ALBORZ.temfa,
                humidity: provinces.ALBORZ.hu,
                province: "Alborz",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(true)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "ILAM") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.ILAM.temcan,
                humidity: provinces.ILAM.hu,
                province: "Ilam",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(true)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "ILAMfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.ILAM.temfa,
                humidity: provinces.ILAM.hu,
                province: "Ilam",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(true)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "BOOSHEHR") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.BOOSHEHR.temcan,
                humidity: provinces.BOOSHEHR.hu,
                province: "Bushehr",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(true)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "BOOSHEHRfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.BOOSHEHR.temfa,
                humidity: provinces.BOOSHEHR.hu,
                province: "Bushehr",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(true)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "TEHRAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.TEHRAN.temcan,
                humidity: provinces.TEHRAN.hu,
                province: "Tehran",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(true)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "TEHRANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.TEHRAN.temfa,
                humidity: provinces.TEHRAN.hu,
                province: "Tehran",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(true)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "CHAHARMAHAL") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.CHAHARMAHAL.temcan,
                humidity: provinces.CHAHARMAHAL.hu,
                province: "Chaharmahal and Bakhtiari",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(true)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "CHAHARMAHALfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.CHAHARMAHAL.temfa,
                humidity: provinces.CHAHARMAHAL.hu,
                province: "Chaharmahal and Bakhtiari",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(true)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KHORJONOOB") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KHORJONOOB.temcan,
                humidity: provinces.KHORJONOOB.hu,
                province: "South Khorasan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(true)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KHORJONOOBfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KHORJONOOB.temfa,
                humidity: provinces.KHORJONOOB.hu,
                province: "South Khorasan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(true)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KHORRAZAVI") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KHORRAZAVI.temcan,
                humidity: provinces.KHORRAZAVI.hu,
                province: "Razavi Khorasan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(true)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KHORRAZAVIfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KHORRAZAVI.temfa,
                humidity: provinces.KHORRAZAVI.hu,
                province: "Razavi Khorasan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(true)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KHORSHOMAL") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KHORSHOMAL.temcan,
                humidity: provinces.KHORSHOMAL.hu,
                province: "North Khorasan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(true)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KHORSHOMALfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KHORSHOMAL.temfa,
                humidity: provinces.KHORSHOMAL.hu,
                province: "North Khorasan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(true)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KHOOZESTAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KHOOZESTAN.temcan,
                humidity: provinces.KHOOZESTAN.hu,
                province: "Khuzestan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(true)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KHOOZESTANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KHOOZESTAN.temfa,
                humidity: provinces.KHOOZESTAN.hu,
                province: "Khuzestan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(true)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "ZANJAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.ZANJAN.temcan,
                humidity: provinces.ZANJAN.hu,
                province: "Zanjan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(true)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "ZANJANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.ZANJAN.temfa,
                humidity: provinces.ZANJAN.hu,
                province: "Zanjan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(true)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "SEMNAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.SEMNAN.temcan,
                humidity: provinces.SEMNAN.hu,
                province: "Semnan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(true)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "SEMNANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.SEMNAN.temfa,
                humidity: provinces.SEMNAN.hu,
                province: "Semnan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(true)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "SISTAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.SISTAN.temcan,
                humidity: provinces.SISTAN.hu,
                province: "Sistan and Baluchestan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(true)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "SISTANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.SISTAN.temfa,
                humidity: provinces.SISTAN.hu,
                province: "Sistan and Baluchestan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(true)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "FARS") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.FARS.temcan,
                humidity: provinces.FARS.hu,
                province: "Fars",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(true)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "FARSfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.FARS.temfa,
                humidity: provinces.FARS.hu,
                province: "Fars",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(true)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "QAZVIN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.QAZVIN.temcan,
                humidity: provinces.QAZVIN.hu,
                province: "Qazvin",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(true)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "QAZVINfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.QAZVIN.temfa,
                humidity: provinces.QAZVIN.hu,
                province: "Qazvin",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(true)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "QOM") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.QOM.temcan,
                humidity: provinces.QOM.hu,
                province: "Qom",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(true)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "QOMfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.QOM.temfa,
                humidity: provinces.QOM.hu,
                province: "Qom",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(true)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KORDESTAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KORDESTAN.temcan,
                humidity: provinces.KORDESTAN.hu,
                province: "Kordestan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(true)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KORDESTANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KORDESTAN.temfa,
                humidity: provinces.KORDESTAN.hu,
                province: "Kordestan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(true)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KERNAM") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KERMAN.temcan,
                humidity: provinces.KERMAN.hu,
                province: "Kerman",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(true)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KERNAMfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KERMAN.temfa,
                humidity: provinces.KERMAN.hu,
                province: "Kerman",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(true)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KERMANSHAH") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KERMANSHAH.temcan,
                humidity: provinces.KERMANSHAH.hu,
                province: "Kermanshah",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(true)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KERMANSHAHfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KERMANSHAH.temfa,
                humidity: provinces.KERMANSHAH.hu,
                province: "Kermanshah",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(true)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KOHKILOO") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KOHKILOO.temcan,
                humidity: provinces.KOHKILOO.hu,
                province: "Kohgiluyeh and Boyer-Ahmad",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(true)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "KOHKILOOfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.KOHKILOO.temfa,
                humidity: provinces.KOHKILOO.hu,
                province: "Kohgiluyeh and Boyer-Ahmad",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(true)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "GOLESTAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.GOLESTAN.temcan,
                humidity: provinces.GOLESTAN.hu,
                province: "Golestan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(true)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "GOLESTANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.GOLESTAN.temfa,
                humidity: provinces.GOLESTAN.hu,
                province: "Golestan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(true)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "GILAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.GILAN.temcan,
                humidity: provinces.GILAN.hu,
                province: "Gilan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(true)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "GILANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.GILAN.temfa,
                humidity: provinces.GILAN.hu,
                province: "Gilan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(true)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "LORESTAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.LORESTAN.temcan,
                humidity: provinces.LORESTAN.hu,
                province: "Lorestan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(true)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "LORESTANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.LORESTAN.temfa,
                humidity: provinces.LORESTAN.hu,
                province: "Lorestan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(true)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "MAZANDARAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.MAZANDARAN.temcan,
                humidity: provinces.MAZANDARAN.hu,
                province: "Mazandaran",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(true)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "MAZANDARANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.MAZANDARAN.temfa,
                humidity: provinces.MAZANDARAN.hu,
                province: "Mazandaran",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(true)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "MARKAZI") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.MARKAZI.temcan,
                humidity: provinces.MARKAZI.hu,
                province: "Markazi",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(true)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "MARKAZIfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.MARKAZI.temfa,
                humidity: provinces.MARKAZI.hu,
                province: "Markazi",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(true)
            setOption29(false)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "HORMOZGAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.HORMOZGAN.temcan,
                humidity: provinces.HORMOZGAN.hu,
                province: "Hormozgan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(true)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "HORMOZGANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.HORMOZGAN.temfa,
                humidity: provinces.HORMOZGAN.hu,
                province: "Hormozgan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(true)
            setOption30(false)
            setOption31(false)
        }
        if (event.target.value === "HAMEDAN") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.HAMEDAN.temcan,
                humidity: provinces.HAMEDAN.hu,
                province: "Hamedan",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(true)
            setOption31(false)
        }
        if (event.target.value === "HAMEDANfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.HAMEDAN.temfa,
                humidity: provinces.HAMEDAN.hu,
                province: "Hamedan",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(true)
            setOption31(false)
        }
        if (event.target.value === "YAZD") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.YAZD.temcan,
                humidity: provinces.YAZD.hu,
                province: "Yazd",
                type: "Centigrade"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(true)
        }
        if (event.target.value === "YAZDfa") {
            setOption0(false)
            setData({
                ...data,
                temperature: provinces.YAZD.temfa,
                humidity: provinces.YAZD.hu,
                province: "Yazd",
                type: "Fahrenheit"
            });
            setOption1(false)
            setOption2(false)
            setOption3(false)
            setOption4(false)
            setOption5(false)
            setOption6(false)
            setOption7(false)
            setOption8(false)
            setOption9(false)
            setOption10(false)
            setOption11(false)
            setOption12(false)
            setOption13(false)
            setOption14(false)
            setOption15(false)
            setOption16(false)
            setOption17(false)
            setOption18(false)
            setOption19(false)
            setOption20(false)
            setOption21(false)
            setOption22(false)
            setOption23(false)
            setOption24(false)
            setOption25(false)
            setOption26(false)
            setOption27(false)
            setOption28(false)
            setOption29(false)
            setOption30(false)
            setOption31(true)
        }
    }

     // Final Data
    const excelData = [{
        "DBT[°C]": data.temperature,
        "temperature type": data.type,
        "RH [%]": data.humidity,
        "Eta_d": data.baze,
        "WBT [°C]": result.first?.toFixed(2),
        "X [g/kg air]": result.third?.toFixed(2),
        "Water con. [g/kg air]" : result.tenth?.toFixed(2),
        "DBT_out [°C]": result.fourth?.toFixed(2),
        "RH_out": result.fifth?.toFixed(2),
        "WBT_out [°C]": result.sixth?.toFixed(2),
        "DewT_out [°C]": result.seventh?.toFixed(2),
        "X [g/kg air]": result.eighth?.toFixed(2),
        "Water [g/kg air]": result.ninth?.toFixed(2),
        "Province": data.province,
    }];

    const pdfData = {
        a: data.temperature,
        b: data.humidity,
        c: data.baze,
        d: result.first?.toFixed(2),
        e: result.second?.toFixed(2),
        f: result.third?.toFixed(2),
        g: 0.00,
        h: result.fourth?.toFixed(2),
        i: result.fifth?.toFixed(2),
        j: result.sixth?.toFixed(2),
        k: result.seventh?.toFixed(2),
        l: result.eighth?.toFixed(2),
        m: result.ninth?.toFixed(2),
        n: data.province,
        o: data.CompanyName,
        p: data.ProjectName,
        q: data.Designer,
        r: data.type,
    }

    const [didPrint, setDidPrint] = useState(false);
    const printHandler = () => {
        setDidPrint(true);
        setTimeout(()=> {
            window.print();
        }, 300);
        setTimeout(()=> {
            setDidPrint(false);
        }, 600);
    }

    // Admin page
    const [adminActive, setAdminActive] = useState(false);
    
    return ( 
        <div className={styles.Landing1_Container}>
            <section className={resultIsReady ? styles.notActive_sec : styles.Navbar_section}>
                <nav>
                    <img src={logo} alt="logo" />
                    <button onClick={() => {window.location.reload()}}><img src={home} alt="icon" />Home</button>
                    <Link to="/aboutus">
                        <button><img src={locpin} alt="icon" />About us</button>
                    </Link>
                    <Link to="/help">
                        <button><img src={help} alt="icon" />Help</button>
                    </Link>
                    {/* <button onClick={()=> {setAdminActive(!adminActive)}}><img src={admin} alt="icon" />Admin</button> */}
                </nav>
            </section>
            {/* <div className={adminActive ? undefined : styles.notActive_sec}>
                <form className={styles.formContainer}>
                    <h2 className={styles.admin_header}>Here your can change the default Values.</h2>
                    <h3 className={styles.admin_header_h3}>Changes will be saved automatically.</h3>
                    <section className={styles.formContainer_sec}>
                        <section>
                            <p>Temperature colmun</p>
                            <div className={styles.formField}>
                                <label>AZARBAIJANSHARGHI</label>
                                <input
                                    className={errors.CompanyName && touched.CompanyName ? styles.uncompleted : styles.formInput}
                                    type="text"
                                    name="AZARBAIJANSHARGHI"
                                    value={provinces.AZARBAIJANSHARGHI.temcan}
                                    onChange={adminTempHandler}
                                    onFocus={focusHandler}
                                />
                                {errors.CompanyName && touched.CompanyName && <span>{errors.CompanyName}</span>}
                            </div>
                        </section>
                        <section>
                            <p>Humidity column</p>
                            <div className={styles.formField}>
                                <label>AZARBAIJANSHARGHI</label>
                                <input
                                    className={errors.CompanyName && touched.CompanyName ? styles.uncompleted : styles.formInput}
                                    type="text"
                                    name="AZARBAIJANSHARGHI"
                                    value={data.CompanyName}
                                    onChange={changeHandler}
                                    onFocus={focusHandler}
                                />
                                {errors.CompanyName && touched.CompanyName && <span>{errors.CompanyName}</span>}
                            </div>
                        </section>
                    </section>
                </form>
            </div> */}
            <div className={adminActive ? styles.notActive_sec : undefined}>
                <section className={resultIsReady ? styles.notActive_sec : styles.gathering_sec}>
                    <section className={styles.map_sec}>
                        <img className={option0 ? styles.map_sec_img : styles.notActive_sec} src={mapimg} alt="map" />
                        <img className={option1 ? styles.map_sec_img : styles.notActive_sec} src={mapAZARBAIJANSHARGHI} alt="map" />
                        <img className={option2 ? styles.map_sec_img : styles.notActive_sec} src={mapAZARBAIJANGHARBI} alt="map" />
                        <img className={option3 ? styles.map_sec_img : styles.notActive_sec} src={mapARDEBIL} alt="map" />
                        <img className={option4 ? styles.map_sec_img : styles.notActive_sec} src={mapESFEGAN} alt="map" />
                        <img className={option5 ? styles.map_sec_img : styles.notActive_sec} src={mapALBORZ} alt="map" />
                        <img className={option6 ? styles.map_sec_img : styles.notActive_sec} src={mapILAM} alt="map" />
                        <img className={option7 ? styles.map_sec_img : styles.notActive_sec} src={mapBOOSHEHR} alt="map" />
                        <img className={option8 ? styles.map_sec_img : styles.notActive_sec} src={mapTEHRAN} alt="map" />
                        <img className={option9 ? styles.map_sec_img : styles.notActive_sec} src={mapCHAHARMAHAL} alt="map" />
                        <img className={option10 ? styles.map_sec_img : styles.notActive_sec} src={mapKHORJONOOBI} alt="map" />
                        <img className={option11 ? styles.map_sec_img : styles.notActive_sec} src={mapKHORRAZAVI} alt="map" />
                        <img className={option12 ? styles.map_sec_img : styles.notActive_sec} src={mapKHORSHOMALI} alt="map" />
                        <img className={option13 ? styles.map_sec_img : styles.notActive_sec} src={mapKHOOZESTAN} alt="map" />
                        <img className={option14 ? styles.map_sec_img : styles.notActive_sec} src={mapZANJAN} alt="map" />
                        <img className={option15 ? styles.map_sec_img : styles.notActive_sec} src={mapSEMNAN} alt="map" />
                        <img className={option16 ? styles.map_sec_img : styles.notActive_sec} src={mapSISTAN} alt="map" />
                        <img className={option17 ? styles.map_sec_img : styles.notActive_sec} src={mapFARS} alt="map" />
                        <img className={option18 ? styles.map_sec_img : styles.notActive_sec} src={mapQAZVIN} alt="map" />
                        <img className={option19 ? styles.map_sec_img : styles.notActive_sec} src={mapQOM} alt="map" />
                        <img className={option20 ? styles.map_sec_img : styles.notActive_sec} src={mapKORDESTAN} alt="map" />
                        <img className={option21 ? styles.map_sec_img : styles.notActive_sec} src={mapKERMAN} alt="map" />
                        <img className={option22 ? styles.map_sec_img : styles.notActive_sec} src={mapKERMANSHAH} alt="map" />
                        <img className={option23 ? styles.map_sec_img : styles.notActive_sec} src={mapKOKILOOYE} alt="map" />
                        <img className={option24 ? styles.map_sec_img : styles.notActive_sec} src={mapGOLESTAN} alt="map" />
                        <img className={option25 ? styles.map_sec_img : styles.notActive_sec} src={mapGILAN} alt="map" />
                        <img className={option26 ? styles.map_sec_img : styles.notActive_sec} src={mapLORESTAN} alt="map" />
                        <img className={option27 ? styles.map_sec_img : styles.notActive_sec} src={mapMAZANDARAN} alt="map" />
                        <img className={option28 ? styles.map_sec_img : styles.notActive_sec} src={mapMARKAZI} alt="map" />
                        <img className={option29 ? styles.map_sec_img : styles.notActive_sec} src={mapHORMOZGAN} alt="map" />
                        <img className={option30 ? styles.map_sec_img : styles.notActive_sec} src={mapHAMEDAN} alt="map" />
                        <img className={option31 ? styles.map_sec_img : styles.notActive_sec} src={mapYAZD} alt="map" />
                        <select onChange={mapHandler} >
                            <option value="none" selected disabled hidden>Provinces List</option>
                            <option value="AZARBAIJANSHARGHI">East Azarbaijan(Centigrade)</option>
                            <option value="AZARBAIJANSHARGHIfa">East Azarbaijan(Fahrenheit)</option>
                            <option value="AZARBAIJANGHARBI">West Azarbaijan(Centigrade) </option>
                            <option value="AZARBAIJANGHARBIfa">West Azarbaijan(Fahrenheit) </option>
                            <option value="ARDEBIL">Ardabil(Centigrade) </option>
                            <option value="ARDEBILfa">Ardabil(Fahrenheit) </option>
                            <option value="ESFEGAN">Isfahan(Centigrade) </option>
                            <option value="ESFEGANfa">Isfahan(Fahrenheit) </option>
                            <option value="ALBORZ">Alborz(Centigrade) </option>
                            <option value="ALBORZfa">Alborz(Fahrenheit) </option>
                            <option value="ILAM">Ilam(Centigrade) </option>
                            <option value="ILAMfa">Ilam(Fahrenheit) </option>
                            <option value="BOOSHEHR">Bushehr(Centigrade) </option>
                            <option value="BOOSHEHRfa">Bushehr(Fahrenheit) </option>
                            <option value="TEHRAN">Tehran(Centigrade) </option>
                            <option value="TEHRANfa">Tehran(Fahrenheit) </option>
                            <option value="CHAHARMAHAL">Chaharmahal and Bakhtiari(Centigrade)</option>
                            <option value="CHAHARMAHALfa">Chaharmahal and Bakhtiari(Fahrenheit)</option>
                            <option value="KHORJONOOB">South Khorasan(Centigrade) </option>
                            <option value="KHORJONOOBfa">South Khorasan(Fahrenheit) </option>
                            <option value="KHORRAZAVI">Razavi Khorasan(Centigrade) </option>
                            <option value="KHORRAZAVIfa">Razavi Khorasan(Fahrenheit) </option>
                            <option value="KHORSHOMAL">North Khorasan(Centigrade)</option>
                            <option value="KHORSHOMALfa">North Khorasan(Fahrenheit)</option>
                            <option value="KHOOZESTAN">Khuzestan(Centigrade) </option>
                            <option value="KHOOZESTANfa">Khuzestan(Fahrenheit) </option>
                            <option value="ZANJAN">Zanjan(Centigrade) </option>
                            <option value="ZANJANfa">Zanjan(Fahrenheit) </option>
                            <option value="SEMNAN">Semnan(Centigrade) </option>
                            <option value="SEMNANfa">Semnan(Fahrenheit) </option>
                            <option value="SISTAN">Sistan and Baluchestan(Centigrade) </option>
                            <option value="SISTANfa">Sistan and Baluchestan(Fahrenheit) </option>
                            <option value="FARS">Fars(Centigrade) </option>
                            <option value="FARSfa">Fars(Fahrenheit) </option>
                            <option value="QAZVIN">Qazvin(Centigrade) </option>
                            <option value="QAZVINfa">Qazvin(Fahrenheit) </option>
                            <option value="QOM">Qom(Centigrade) </option>
                            <option value="QOMfa">Qom(Fahrenheit) </option>
                            <option value="KORDESTAN">Kordestan(Centigrade) </option>
                            <option value="KORDESTANfa">Kordestan(Fahrenheit) </option>
                            <option value="KERNAM">Kerman(Centigrade) </option>
                            <option value="KERNAMfa">Kerman(Fahrenheit) </option>
                            <option value="KERMANSHAH">Kermanshah(Centigrade) </option>
                            <option value="KERMANSHAHfa">Kermanshah(Fahrenheit) </option>
                            <option value="KOHKILOO">Kohgiluyeh and Boyer-Ahmad(Centigrade) </option>
                            <option value="KOHKILOOfa">Kohgiluyeh and Boyer-Ahmad(Fahrenheit) </option>
                            <option value="GOLESTAN">Golestan(Centigrade) </option>
                            <option value="GOLESTANfa">Golestan(Fahrenheit) </option>
                            <option value="GILAN">Gilan(Centigrade) </option>
                            <option value="GILANfa">Gilan(Fahrenheit) </option>
                            <option value="LORESTAN">Lorestan(Centigrade) </option>
                            <option value="LORESTANfa">Lorestan(Fahrenheit) </option>
                            <option value="MAZANDARAN">Mazandaran(Centigrade) </option>
                            <option value="MAZANDARANfa">Mazandaran(Fahrenheit) </option>
                            <option value="MARKAZI">Markazi(Centigrade) </option>
                            <option value="MARKAZIfa">Markazi(Fahrenheit) </option>
                            <option value="HORMOZGAN">Hormozgan(Centigrade) </option>
                            <option value="HORMOZGANfa">Hormozgan(Fahrenheit) </option>
                            <option value="HAMEDAN">Hamedan(Centigrade) </option>
                            <option value="HAMEDANfa">Hamedan(Fahrenheit) </option>
                            <option value="YAZD">Yazd(Centigrade) </option>
                            <option value="YAZDfa">Yazd(Fahrenheit) </option>
                        </select>
                    </section>
                    <form className={styles.formContainer}>
                        <h2 className={styles.header}>Enter the desired values or choose a default from the map.</h2>
                        <section className={styles.formContainer_sec}>
                            <section>
                                <div className={styles.formField}>
                                    <label>Company Name</label>
                                    <input
                                        className={errors.CompanyName && touched.CompanyName ? styles.uncompleted : styles.formInput}
                                        type="text"
                                        name="CompanyName"
                                        value={data.CompanyName}
                                        onChange={changeHandler}
                                        onFocus={focusHandler}
                                    />
                                    {errors.CompanyName && touched.CompanyName && <span>{errors.CompanyName}</span>}
                                </div>
                                <div className={styles.formField}>
                                    <label>Project Name</label>
                                    <input
                                        className={errors.ProjectName && touched.ProjectName ? styles.uncompleted : styles.formInput}
                                        type="text"
                                        name="ProjectName"
                                        value={data.ProjectName}
                                        onChange={changeHandler}
                                        onFocus={focusHandler}
                                    />
                                    {errors.ProjectName && touched.ProjectName && <span>{errors.ProjectName}</span>}
                                </div>
                                <div className={styles.formField}>
                                    <label>Designer</label>
                                    <input
                                        className={errors.Designer && touched.Designer ? styles.uncompleted : styles.formInput}
                                        type="text"
                                        name="Designer"
                                        value={data.Designer}
                                        onChange={changeHandler}
                                        onFocus={focusHandler}
                                    />
                                    {errors.Designer && touched.Designer && <span>{errors.Designer}</span>}
                                </div>
                            </section>
                            <section>
                                <div className={styles.formField}>
                                    <label>Temperature</label>
                                    <input
                                        className={errors.temperature && touched.temperature ? styles.uncompleted : styles.formInput}
                                        type="text"
                                        name="temperature"
                                        value={data.temperature}
                                        onChange={changeHandler}
                                        onFocus={focusHandler}
                                    />
                                    {errors.temperature && touched.temperature && <span>{errors.temperature}</span>}
                                </div>
                                <div className={styles.formField}>
                                    <label>Humidity</label>
                                    <input
                                        className={errors.humidity && touched.humidity ? styles.uncompleted : styles.formInput}
                                        type="text"
                                        name="humidity"
                                        value={data.humidity}
                                        onChange={changeHandler}
                                        onFocus={focusHandler}
                                    />
                                    {errors.humidity && touched.humidity && <span>{errors.humidity}</span>}
                                </div>
                                <div className={styles.formField}>
                                    <label>Efficiency</label>
                                    <input
                                        className={errors.baze && touched.baze ? styles.uncompleted : styles.formInput}
                                        type="text"
                                        name="baze"
                                        value={data.baze}
                                        onChange={changeHandler}
                                        onFocus={focusHandler}
                                    />
                                    {errors.baze && touched.baze && <span>{errors.baze}</span>}
                                </div>
                            </section>
                            <section>
                                <div className={styles.formField}>
                                    <label>Province</label>
                                    <input
                                        className={errors.province && touched.province ? styles.uncompleted : styles.formInput}
                                        type="text"
                                        name="province"
                                        value={data.province}
                                        onChange={changeHandler}
                                        onFocus={focusHandler}
                                    />
                                    {errors.province && touched.province && <span>{errors.province}</span>}
                                </div>
                                <div className={styles.formField}>
                                    <label>Temperature Type</label>
                                    <select onChange={typeHandler}>
                                        <option value="none" selected disabled hidden></option>
                                        <option value="fa">Fahrenheit</option>
                                        <option value="cen">Centigrade</option>
                                    </select>                            
                                </div>
                            </section>
                        </section>
                    </form>
                </section>
                <section className={resultIsReady ? styles.notActive_sec : styles.Prepration_sec}>
                        <button className={styles.Prepration_btn} onClick={resultHandler}>Prepare the Data</button>
                </section>
                <section className={resultIsReady ? styles.Pdf_sec : styles.notActive_sec}>
                        <  Export pdfData={pdfData}/>
                </section>
                <section className={resultIsReady ? styles.Export_sec : styles.notActive_sec}>
                    <section className={didPrint ? styles.notActive_sec : undefined}>
                        <ExportExcel excelData={excelData} fileName={"IEC model"} />
                        <button onClick={printHandler} className={styles.pdf_btn}>Print as PDF</button>
                    </section>
                </section>
            </div>
        </div>
     );
}
 
export default Landing2;