import pino from 'pino';
/* @ts-ignore */
import cloudwatchStream from 'pino-cloudwatch';
const { createWriteStream } = require('pino-sentry');

const {
  CLOUDWATCH_NODEJS_LOG_GROUP,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
} = process.env;

// export const logger = pino(
//   {
//     name: 'mqtt-broker',
//     level: process.env.LOG_LEVEL || 'info',
//   },
//   cloudwatchStream({
//     group: CLOUDWATCH_NODEJS_LOG_GROUP,
//     aws_access_key_id: AWS_ACCESS_KEY_ID,
//     aws_secret_access_key: AWS_SECRET_ACCESS_KEY,
//     aws_region: AWS_REGION,
//   }),
// );

const stream = createWriteStream({
  dsn: process.env.SENTRY_DSN,
  messageAttributeKey: 'message',
  stackAttributeKey: 'trace',
  extraAttributeKeys: ['req', 'context'],
  maxValueLength: 250,
});

const logger = pino({}, stream);

export default logger;
