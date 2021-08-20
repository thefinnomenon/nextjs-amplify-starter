import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import GlobalStyles from '@/styles/themeConfig';
import { ThemeProvider } from 'next-themes';
import { IntlProvider } from 'react-intl';

const locale = 'en';

// Load locale files
const locales = {
  en: require('@/locales/en.json'),
  pt: require('@/locales/pt.json'),
};

const messages = locales[locale];

const AllTheProviders: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
