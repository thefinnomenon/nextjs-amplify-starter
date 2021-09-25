import { FormattedMessage } from 'react-intl';
const logger = require('@/services/logger')('ONE');
import SingleColumnLayout from '@/components/SingleColumnLayout';

export default function One() {
  return (
    <SingleColumnLayout>
      <h1>
        <FormattedMessage id='greeting' />
        <button
          type='button'
          onClick={() => {
            throw new Error('Sentry Frontend Error');
          }}
        >
          Throw error
        </button>
        <button
          type='button'
          onClick={() => {
            logger.info('Logged something!');
            logger.error('Logged error!');
          }}
        >
          Log something
        </button>
      </h1>
    </SingleColumnLayout>
  );
}
