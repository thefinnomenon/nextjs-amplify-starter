import { FormattedMessage } from 'react-intl';
import SingleColumnLayout from '@/components/SingleColumnLayout';

export default function Home() {
  return (
    <SingleColumnLayout>
      <h1>
        <FormattedMessage id='greeting' />
      </h1>
    </SingleColumnLayout>
  );
}
