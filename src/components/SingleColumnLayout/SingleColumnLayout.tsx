import styled from 'styled-components';
import Meta from '../Meta';
import ScrollToTop from '../ScrollToTop';
import Header from '../Header';

type Props = {
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

export default function SingleColumnLayout({
  children,
  ...rest
}: Props): JSX.Element {
  return (
    <>
      <Meta {...rest} />
      <ScrollToTop />
      <Wrapper>
        <Header />
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding-bottom: 20px;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: auto;
  margin-top: 80px; // Header offset
  padding: 0 16px;
  max-width: 700px;
`;

SingleColumnLayout.defaultProps = defaultProps;
