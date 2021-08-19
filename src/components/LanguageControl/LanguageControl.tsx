import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

type Props = {} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

export default function LanguageControl(props: Props): JSX.Element {
  const [cookie, setCookie] = useCookies(['NEXT_LOCALE']);
  const router = useRouter();
  const { locale, locales } = router;

  const switchLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push('/', '/', { locale });
    if (cookie.NEXT_LOCALE !== locale) {
      setCookie('NEXT_LOCALE', locale, { path: '/' });
    }
  };

  // If no locales defined, don't bother rendering control
  if (!locales) {
    return <></>;
  }

  return (
    <Select onChange={switchLanguage} defaultValue={locale}>
      {locales.map((lcl) => (
        <option key={lcl} value={lcl}>
          {lcl.toLocaleUpperCase()}
        </option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  width: 48px;
  height: 40px;
  font-size: 16px;
  border: none;
`;

LanguageControl.defaultProps = defaultProps;
