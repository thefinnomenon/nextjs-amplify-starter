import { FormattedMessage } from 'react-intl';
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
      </h1>
    </SingleColumnLayout>
  );
}
