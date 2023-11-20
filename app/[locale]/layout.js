import '@styles/global.scss'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import Header from "@components/Header";
import Footer from "@components/Footer";
import {getTranslations} from 'next-intl/server';


export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export async function generateMetadata({ params }) {
  const t = await getTranslations('home');
  return {
    title: t("title"),
  }
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  const t = await getTranslations('home');
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="container">
            <Header title={t("title")} locale={locale} />
            <main>
              {children}
            </main>

            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
