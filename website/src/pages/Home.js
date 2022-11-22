import React from "react";
import { useSinglePostContext } from "../context/SinglePostContext";
import styled from "styled-components";

import Posts from "../components/Posts";
import SinglePost from "../components/SinglePost";


const Home = () => {
  const { isSinglePostOpen, toggleSinglePost } = useSinglePostContext();

  return (
    <HomeWrapper>
      <Posts />
      {isSinglePostOpen && (
        <SinglePost handleClose={toggleSinglePost}/>
      )}
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
