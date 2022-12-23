import React from "react";
import {MainLayoutProps} from "../../meta/props";
import Head from "next/head";
import {FormattedMessage} from "react-intl";
import lang from "../../lang";

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const { children, langDirection, locale } = props

    return (
        <div>
            <Head>
                <title>{lang[locale]['layout.head.title']}</title>
                <meta name="description" content={lang[locale]['layout.head.description']} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main dir={langDirection.direction}>
                {React.Children.toArray(children)}
            </main>
        </div>
    );
}

export default MainLayout