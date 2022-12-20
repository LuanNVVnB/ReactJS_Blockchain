import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './theme.css';
import i18n from '../translation/i18n';
import { Trans, withTranslation } from 'react-i18next';

import ImgaeVn from "../../assets/theme/img/vn.png";
import ImgaeEn from "../../assets/theme/img/en.png";

const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'white',
        class: 'theme-mode-light'
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'black',
        class: 'theme-mode-dark'
    }
]

const color_settings = [
    {
        id: 'default',
        name: 'Default',
        background: '#7151a9',
        class: 'theme-color-default'
    },
    {
        id: 'blueOne',
        name: 'Blue',
        background: 'blue',
        class: 'theme-color-blue'
    },

    {
        id: 'cyan',
        name: 'Cyan',
        background: '#0a7285',
        class: 'theme-color-cyan'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green',
        class: 'theme-color-green'
    },
    {
        id: 'orange',
        name: 'Orange',
        background: '#492104',
        class: 'theme-color-orange'
    },
]

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}


const Theme = () => {

    const [mode, setModeTheme] = useState(localStorage.getItem("mode"));

    const [colorMode, setColorMode] = useState(localStorage.getItem("colorMode"));
    const menu_ref = useRef(null)
    const menu_toggle_ref = useRef(null)

    clickOutsideRef(menu_ref, menu_toggle_ref)

    const setActiveMenu = () => menu_ref.current.classList.add('active')

    const closeMenu = () => menu_ref.current.classList.remove('active')

    const [currMode, setcurrMode] = useState('light')

    const [currColor, setcurrColor] = useState('blue')



    const setMode = item => {
        setModeTheme(mode && mode === "dark" ? "light" : "dark");
        setcurrMode(item.id)

    }

    const setColor = color => {
        document.body.classList.remove(colorMode);
        document.body.classList.add(color.class);
        localStorage.setItem("colorMode", color.class);
        setColorMode(color.class)


        setcurrColor(color.id);

    }


    useEffect(() => {
        // dispatch(fnGetUserInfo())
        if (mode && mode === "dark") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light");
        }
        window.addEventListener("storage", currentMode());
        return () => {
            window.removeEventListener("storage", currentMode());
        }
        if (!localStorage.getItem('language')) localStorage.setItem("language", "en");

    }, [mode]);

    const currentMode = () => setModeTheme(localStorage.getItem("mode"));

    const changeLanguageEn = () => {
        localStorage.setItem("language", "en");
        i18n.changeLanguage("en");
    }
    const changeLanguageVn = () => {
        localStorage.setItem("language", "vi");
        i18n.changeLanguage("vi");
    }

    return (


        <>
            <div>

                <i className="fa fa-cogs dropdown__toggle" aria-hidden="true" ref={menu_toggle_ref} onClick={() => setActiveMenu()}></i>
                <div ref={menu_ref} className="theme-menu">
                    <h4><Trans i18nKey='herder.theme' /></h4>

                    <i className="fa fa-times theme-menu__close" onClick={() => closeMenu()}></i>

                    <div className="theme-menu__select">
                        <span><Trans i18nKey='herder.mode' /></span>
                        <ul className="mode-list">
                            {
                                mode_settings.map((item, index) => (
                                    <li key={index} onClick={() => setMode(item)} >
                                        <div style={{ background: `${item.background}` }} className={`mode-list__color  ${item.background} ${item.id === currMode ? 'active' : ''}`}>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <span>{item.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="theme-menu__select">
                        <span><Trans i18nKey='herder.chooseColor' /></span>
                        <ul className="mode-list">
                            {
                                color_settings.map((item, index) => (
                                    <li key={index} onClick={() => setColor(item)} >
                                        <div style={{ background: `${item.background}` }} className={`mode-list__color ${item.background} ${item.id === currColor ? 'active' : ''}`}>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <span>{item.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="theme-menu__select">
                        <a data-toggle="dropdown" className="dropdown-toggle Langue" href="#">
                            <span className="language"><i className="fa fa-globe" id='icon-text' aria-hidden="true"></i>
                                <Trans i18nKey={'MenuList.language'} /></span>

                        </a>
                        <ul className="dropdown-menu fadeInRight language">
                            <li onClick={() => { changeLanguageEn() }}>
                                <img src={ImgaeEn} />English
                            </li>
                            <li className="dropdown-divider"></li>
                            <li onClick={() => { changeLanguageVn() }}>
                                <img src={ImgaeVn} />Việt Nam
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default withTranslation()(Theme)
