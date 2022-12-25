import Document, {Head, Html, Main, NextScript} from "next/document";
import lang from "../lang";
import React from "react";
import {getDirection, parseLocale} from "../meta/lang";

class AppDocument extends Document {
    _localeData() : { [key: string]: any } {
        return lang[this._locale()]
    }
    _languageDirection(): string{
        return getDirection(this._locale()).direction
    }
    _locale() : string{
        return parseLocale(this.props.locale)
    }
    render() {
        return (
            <Html dir={this._languageDirection()} lang={this._locale()}>
                <Head>
                    <title>{this._localeData()['layout.head.title']}</title>
                    <meta name="description" content={this._localeData()['layout.head.description']} />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <meta name="theme-color" content="#fff" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default AppDocument