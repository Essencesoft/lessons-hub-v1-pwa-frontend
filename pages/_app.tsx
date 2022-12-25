import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import lang from "../lang";
import {IntlProvider} from "react-intl";
import React from "react";
import {useRouter} from "next/router";
import {LangDirection} from "../meta/lang";

function getDirection(locale : string) : LangDirection{
  if (locale.startsWith('ar')) {
    return {
      direction: 'rtl'
    };
  }

  return {
    direction: 'ltr'
  };
}

export default function App({ Component, pageProps }: AppProps) {
  const routerObj = useRouter();

  const locale = routerObj.locale || 'en'

  return (
    <IntlProvider locale={locale} messages={lang[locale]}>
      <Component {...pageProps} locale={locale} langDirection={getDirection(locale)}/>
    </IntlProvider>
  )
}
