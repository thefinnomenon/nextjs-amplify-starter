import { FormattedMessage } from 'react-intl';
import SingleColumnLayout from '../src/components/SingleColumnLayout';

export default function One() {
  return (
    <SingleColumnLayout>
      <h1>
        <FormattedMessage id='greeting' />
      </h1>
    </SingleColumnLayout>
  );
}
