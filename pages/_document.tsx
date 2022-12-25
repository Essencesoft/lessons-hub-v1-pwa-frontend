import Document, {Head, Html, Main, NextScript} from "next/document";
import lang from "../lang";
import React from "react";

class AppDocument extends Document {
    _locale() {
        return lang[this.props.locale || 'en']
    }
    render() {
        return (
            <Html>
                <Head>
                    <title>{this._locale()['layout.head.title']}</title>
                    <meta name="description" content={this._locale()['layout.head.description']} />
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