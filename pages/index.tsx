import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import MainLayout from '../layout/MainLayout'
import {MainLayoutProps} from "../meta/props";
import {FormattedMessage} from "react-intl";

export default function Home(props: MainLayoutProps) {
    return (
        <MainLayout {...props}>
            <h1>
                <FormattedMessage id="page.index.welcome" values={{appName: process.env.APP_NAME}}/>
            </h1>
        </MainLayout>
    )
}
