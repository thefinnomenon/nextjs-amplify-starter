import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import LanguageControl from '../src/components/LanguageControl';

export default function Home() {
  return (
    <>
      <nav>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <LanguageControl />
      </nav>
      <main>
        <h1>
          <FormattedMessage id='greeting' />
        </h1>
      </main>
    </>
  );
}
