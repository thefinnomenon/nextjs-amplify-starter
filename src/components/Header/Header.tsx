import Link from 'next/link';
import Image from 'next/Image';
import styled from 'styled-components';
import DarkModeControl from '../DarkModeControl';
import LanguageControl from '../LanguageControl';

type Props = {} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

const navItems = [
  { title: 'One', href: '/one' },
  { title: 'Two', href: '/two' },
  { title: 'Three', href: '/three' },
];

export default function Header(props: Props): JSX.Element {
  return (
    <Wrapper>
      <Logo href='/'>
        <a>
          <Image src='/vercel.svg' height={40} width={100} alt='Site logo' />
        </a>
      </Logo>
      <NavItems>
        {navItems.map(({ title, href }) => (
          <Link key={title} href={href} passHref>
            <NavItem>{title}</NavItem>
          </Link>
        ))}
      </NavItems>
      <Controls>
        <DarkModeControl />
        <LanguageControl />
      </Controls>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  padding: 0px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  flex-shrink: 0;
`;

const NavItems = styled.nav`
  height: 100%;
  padding: 0 32px;
  display: flex;
  flex: 1;
  max-width: 400px;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.a`
  display: block;
  height: auto;
  padding: 8px 24px;
  font-weight: bold;
  color: inherit;
  text-decoration: none;

  &:hover {
    border-bottom: 0.2rem solid;
  }
`;

const Controls = styled.div`
  height: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
`;

Header.defaultProps = defaultProps;
