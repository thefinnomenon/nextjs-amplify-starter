import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

type Props = {
  size?: number;
} & typeof defaultProps;

const defaultProps = Object.freeze({
  size: 20,
});
const initialState = Object.freeze({});

export default function LanguageControl({ size }: Props): JSX.Element {
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
    <Select onChange={switchLanguage} defaultValue={locale} height={size}>
      {locales.map((lcl) => (
        <option key={lcl} value={lcl}>
          {lcl.toLocaleUpperCase()}
        </option>
      ))}
    </Select>
  );
}

const Select = styled.select<{ height?: number }>`
  height: ${({ height }) => `${height}pt`};
  border: none;
`;

LanguageControl.defaultProps = defaultProps;
