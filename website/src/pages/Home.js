import React from "react";
import styled from "styled-components";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <HomeWrapper>
      <Posts />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
