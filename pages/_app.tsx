import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import lang from "../lang";
import {IntlProvider} from "react-intl";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getDirection, parseLocale, DEFAULT_LOCALE, DEFAULT_LANG_DIRECTION} from "../meta/lang";
import {ThemeProvider} from "react-bootstrap";

export default function App({Component, pageProps}: AppProps) {
    const routerObj = useRouter();

    const [locale, setLocale] = useState(DEFAULT_LOCALE)
    const [langDirection, setLangDirection] = useState(DEFAULT_LANG_DIRECTION)

    useEffect(() => {
        setLocale(parseLocale(routerObj.locale))
    }, [
        routerObj
    ])

    useEffect(() => {
        setLangDirection(getDirection(locale))
    }, [
        locale
    ])

    useEffect(() => {
        if(langDirection.rtl){
            require('bootstrap/dist/css/bootstrap.rtl.min.css')
        }
    }, [
        langDirection
    ])

    return (
        <IntlProvider locale={locale} messages={lang[locale]}>
            <ThemeProvider dir={langDirection.direction}>
                <Component {...pageProps} locale={locale} langDirection={langDirection}/>
            </ThemeProvider>
        </IntlProvider>
    )
}
