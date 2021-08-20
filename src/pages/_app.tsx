import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/themeConfig';
import { ThemeProvider } from 'next-themes';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Stop Font Awesome core SVG library from trying to inject styles into head
config.autoAddCss = false;

// Load locale files
const locales = {
  en: require('@/locales/en.json'),
  pt: require('@/locales/pt.json'),
};

export type Locale = keyof typeof locales;

export default function MyApp({ Component, pageProps }: AppProps): any {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const messages = locales[locale as Locale];

  return (
    <ThemeProvider>
      <GlobalStyles />
      <IntlProvider
        messages={messages}
        // @ts-ignore
        locale={locale}
        defaultLocale={defaultLocale}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
  );
}
