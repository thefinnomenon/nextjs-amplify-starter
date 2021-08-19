import { FormattedMessage } from 'react-intl';
import Header from '../src/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>
          <FormattedMessage id='greeting' />
        </h1>
      </main>
    </>
  );
}
