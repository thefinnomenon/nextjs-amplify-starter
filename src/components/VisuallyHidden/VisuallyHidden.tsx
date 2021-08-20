// Copied from Josh Comeau's CSS course
import styled from 'styled-components';
import { useState, useEffect } from 'react';

type Props = {
  children: string;
} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

const VisuallyHidden = ({ children, ...delegated }: Props): JSX.Element => {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };

      const handleKeyUp = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keydown', handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return <div>{children}</div>;
  }

  return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.span`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1;
  width: 1;
  margin: -1;
  padding: 0;
  border: 0;
`;

VisuallyHidden.defaultProps = defaultProps;

export default VisuallyHidden;
