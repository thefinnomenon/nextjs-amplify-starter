import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Portal from '@reach/portal';
import Link from 'next/link';
import DarkModeControl from '@/components/DarkModeControl';
import LanguageControl from '@/components/LanguageControl';
import IconButton from '@/components/IconButton';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

type Props = {
  isVisible: boolean;
  setIsVisible(value: boolean): void;
} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

const navItems = [
  { title: 'one', href: '/one' },
  { title: 'two', href: '/two' },
  { title: 'three', href: '/three' },
];

export default function NavOverlay({
  isVisible,
  setIsVisible,
}: Props): JSX.Element {
  const handleClose = () => {
    setIsVisible(false);
  };

  const handleKeypress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeypress, false);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeypress, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Portal>
      <AnimatePresence>
        {isVisible && (
          <Wrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CloseOverlayButton
              icon={faTimes}
              size='lg'
              altText='Close Menu'
              onClick={() => handleClose()}
            />
            <NavItems>
              {navItems.map(({ title, href }) => (
                <Link key={title} href={href} passHref>
                  <NavItem>
                    <FormattedMessage id={title} />
                  </NavItem>
                </Link>
              ))}
            </NavItems>
            <Controls>
              <DarkModeControl size={32} />
              <LanguageControl size={32} />
            </Controls>
          </Wrapper>
        )}
      </AnimatePresence>
    </Portal>
  );
}

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(4px) contrast(60%) invert(0%);
  font-size: 1.5rem;
`;

const CloseOverlayButton = styled(IconButton)`
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
