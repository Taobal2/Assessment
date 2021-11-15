import React from "react";
import styled from "styled-components";
import image from "./Assets/track-section.png";

const Fifth = () => {
  return (
    <Container>
      <Wrapper>
        <Vertical>
          <Line></Line>
        </Vertical>
        <Content>
          <Title>Track</Title>
          <Sub>
            Follow the updates and always keeping everybody aligned on the
            latest API. Review the API designing before the performance issue
            happens.
          </Sub>
          <Image src={image} />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Fifth;

const Image = styled.img`
  width: 900px;
  height: 450px;
  object-fit: contain;
  margin-bottom: 50px;
`;
const Content = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #ff8d28;
  margin-bottom: 25px;
`;
const Sub = styled.div`
  font-size: 20px;
  color: #8792a2;
  line-height: 28px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Hiragino Sans GB",
    Simsun, Arial, sans-self;
  margin-bottom: 65px;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: 100%;
  background-color: #060606;
  color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  justify-content: center;
`;

const Vertical = styled.div`
  position: relative;
`;
const Line = styled.div`
  margin-bottom: 150px;
  :after {
    content: "";
    position: absolute;
    color: white;
    left: 0;
    top: 0;
    width: 1px;
    height: 100px;
    background-color: white;
    opacity: 0.5;
  }
`;
