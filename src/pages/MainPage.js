import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const MainPage = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>내용</Container>
      </Main>
      <Footer />
    </>
  );
};
export default MainPage;
