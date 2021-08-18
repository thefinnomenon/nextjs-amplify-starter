import '@storybook/addon-console';
import { RouterContext } from "next/dist/shared/lib/router-context";

import { configureActions } from '@storybook/addon-actions';

configureActions({
  clearOnStoryChange: true,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}