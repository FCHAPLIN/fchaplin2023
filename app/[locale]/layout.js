import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export function generateStaticParams() {
  return [{locale: 'fr'}, {locale: 'en'}];
}
 
export default async function LocaleLayout({children, params: {locale}}) {
  
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


