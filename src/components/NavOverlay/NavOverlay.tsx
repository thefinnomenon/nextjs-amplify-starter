import styled from 'styled-components';
import Link from 'next/link';
import DarkModeControl from '@/components/DarkModeControl';
import LanguageControl from '@/components/LanguageControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type Props = {
  isShowing: boolean;
  setIsShowing(value: boolean): void;
} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

const navItems = [
  { title: 'One', href: '/one' },
  { title: 'Two', href: '/two' },
  { title: 'Three', href: '/three' },
];

export default function NavOverlay({
  isShowing,
  setIsShowing,
}: Props): JSX.Element {
  const handleClose = () => {
    setIsShowing(false);
  };

  if (!isShowing) {
    return <></>;
  }

  return (
    <Wrapper>
      <CloseMenuIcon icon={faTimes} size='lg' onClick={() => handleClose()} />
      <NavItems>
        {navItems.map(({ title, href }) => (
          <Link key={title} href={href} passHref>
            <NavItem>{title}</NavItem>
          </Link>
        ))}
      </NavItems>
      <Controls>
        <DarkModeControl size={32} />
        <LanguageControl size={32} />
      </Controls>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px) contrast(60%) invert(0%);
  font-size: 1.5rem;
`;

const CloseMenuIcon = styled(FontAwesomeIcon)`
  float: right;
  margin-top: 24px;
  margin-right: 24px;
`;

const NavItems = styled.nav`
  margin-top: 40px;
  float: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavItem = styled.a`
  padding: 16px 32px;
  font-weight: bold;
  color: inherit;
  text-decoration: none;

  &:hover {
    border-left: 0.2rem solid;
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 16px;
  left: 32px;
  display: flex;
  gap: 16px;
  align-items: center;
`;

NavOverlay.defaultProps = defaultProps;
