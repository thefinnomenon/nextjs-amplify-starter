import {
  logger,
  consoleTransport,
  transportFunctionType,
} from 'react-native-logs';
import * as Sentry from '@sentry/nextjs';

const sentryTransport: transportFunctionType = (props) => {
  if (props.level.text === 'error') {
    Sentry.captureException(props.msg);
  }
};

const developmentConfig = {
  severity: 'debug',
  transport: consoleTransport,
  transportOptions: {
    color: 'ansi',
  },
};

const productionConfig = {
  severity: 'error',
  transport: sentryTransport,
};

let config = developmentConfig;
if (process.env.NODE_ENV === 'production') {
  /* @ts-ignore */
  config = productionConfig;
}

const LOGGER = logger.createLogger(config);

module.exports = function (namespace: string) {
  if (!namespace) {
    return LOGGER;
  }

  LOGGER.enable(namespace);
  return LOGGER.extend(namespace);
};
