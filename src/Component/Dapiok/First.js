import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const First = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Design, Preview and Track the API with the team</Title>
          <Sub>
            Dapi helps streamline API integration for the dev team. OpenAPI,
            sequence diagram, API document site and mock server. It aims for
            faster integration and better tracking.
          </Sub>
          <Button>
            Try FREE Now
            <span>
              <AiOutlineArrowRight />
            </span>
          </Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default First;

const Button = styled.button`
  width: 280px;
  height: 55px;
  border-radius: 10px;
  border: 0;
  border: 1px solid lightblue;
  border-bottom-color: coral;
  outline: none;
  font-size: 18px;
  background-color: #060606;
  color: white;
  // box-shadow:rgb(0 0 0 / 20%) 0px 26px 30px -10p, rgb(0 0 0 / 43%) 0px 16px 10px -10px;
  box-shadow: 2px 2px 20px 1px rgb(91, 119, 211);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  span {
    margin-left: 10px;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :hover {
    cursor: pointer;
    // border:1px solid red;
    box-shadow: 2px 2px 32px 1px rgb(91, 119, 211);
  }
`;
const Content = styled.div`
  width: 845px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
  line-height: 75px;
  color: #f7f8f8;
`;
const Sub = styled.div`
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Hiragino Sans GB",
    Simsun, Arial, sans-self;
  line-height: 28px;
  text-align: center;
  margin-bottom: 70px;
  color: #8792a2;
  font-family: simsun, Simsun;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #060606;
  color: white;
  padding-top: 80px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 95px;
`;
