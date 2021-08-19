import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

type Props = {
  size?: number;
} & typeof defaultProps;

const defaultProps = Object.freeze({
  size: 24,
});
const initialState = Object.freeze({});

export default function DarkModeControl({ size }: Props): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // If not mounted, do not show control
  if (!mounted) {
    return <></>;
  }

  return (
    <DarkModeSwitch
      checked={theme === 'dark'}
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size={size}
    />
  );
}

const Wrapper = styled.div``;

DarkModeControl.defaultProps = defaultProps;
