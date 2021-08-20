import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import VisuallyHidden from '@/components/VisuallyHidden';

type Props = {
  icon: IconDefinition;
  size: SizeProp | undefined;
  altText: string;
  onClick(): void;
} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

export default function IconButton(props: Props): JSX.Element {
  const { icon, size, altText, onClick, ...delegated } = props;

  return (
    <Wrapper onClick={() => onClick()} {...delegated}>
      <FontAwesomeIcon aria-hidden icon={icon} size={size} />
      <VisuallyHidden>{altText}</VisuallyHidden>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background: transparent;
  box-shadow: none;
  border: none;
  text-shadow: none;
`;

IconButton.defaultProps = defaultProps;
