import React from "react";
import styled from "styled-components";
import Picture from "./Assets/design-section.png";

const Third = () => {
  return (
    <Container>
      <Wrapper>
        <Vertical>
          <Line></Line>
        </Vertical>
        <Content>
          <Title>Design</Title>
          <Sub>
            More than just editing an openAPI doc, you can define the model
            relationship, draw sequence diagram to understand better the logic
            behind each API.
          </Sub>
        </Content>
        <Image src={Picture} />
      </Wrapper>
    </Container>
  );
};

export default Third;

const Image = styled.img`
  width: 870px;
  height: 600px;
  object-fit: contain;
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
  color: #a475c8;
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
