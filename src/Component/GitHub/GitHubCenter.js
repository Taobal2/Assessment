import React from "react";
import styled from "styled-components";
import image from "./GitHubImages/center.png";

const GitHubCenter = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={image} />
      </Wrapper>
    </Container>
  );
};

export default GitHubCenter;

const Image = styled.img`
  width: 95%;
  height: 95%;
  padding-top: 30px;
  object-fit: contain;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  justify-content: center;
`;
