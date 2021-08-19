import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

type Props = {
  children?: JSX.Element;
} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({
  visible: false,
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export default function ScrollToTop({ children }: Props): JSX.Element {
  const [visible, setVisible] = useState(initialState.visible);

  const onScroll = () => {
    const rootElement = document.documentElement;
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    setVisible(rootElement.scrollTop / scrollTotal > 0.8);
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Wrapper visible={visible} onClick={() => scrollToTop()}>
      <DefaultScrollToTop>
        <FontAwesomeIcon icon={faArrowUp} />
      </DefaultScrollToTop>
    </Wrapper>
  );
}

const Wrapper = styled.button<{ visible: boolean }>`
  background: transparent;
  display: ${({ visible }) => (visible ? 'revert' : 'none')};
  position: fixed;
  right: 16px;
  bottom: 16px;
  cursor: pointer;
  transition: opacity 1s ease-in-out;
  border: none;
  outline: none;
`;

const DefaultScrollToTop = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: var(--bg);
  background: var(--fg);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: box-shadow 500ms;
`;

ScrollToTop.defaultProps = defaultProps;
