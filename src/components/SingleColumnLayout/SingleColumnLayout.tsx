import styled from 'styled-components';
import Meta from '@/components/Meta';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';

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
      <Wrapper>
        <ScrollToTop />
        <Header />
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
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
