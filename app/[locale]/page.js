'use client'

import '@styles/global.scss'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

import Head from 'next/head'
import Header from '@components/Header'
import Hero from '@components/Hero'
import Footer from '@components/Footer'
import {useTranslations} from 'next-intl';
import Services from '@components/Services';
import Skills from '@components/Skills';
import Contact from '@components/Contact';
import Rates from '@components/Rates';

export default function Index({locale}) {
  const t = useTranslations('home');

  return (
    <div className="container">
      <Head>
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={t('title')} locale={locale} />
        <Hero/>
        <Services/>
        <Rates/>
        <Skills/>
        <Contact/>
      </main>

      <Footer />
    </div>
  )
}


