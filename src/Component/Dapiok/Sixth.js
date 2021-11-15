import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import logo from "./Assets/landing-logo.png";

const Sixth = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Ready to work on your API?</Title>
          <Sub>
            Dapi keeps everyone in the dev team aligned. Backend, Frontend PM,
            collaborative working in one platform.
          </Sub>
          <Button>
            Try FREE Now
            <span>
              <AiOutlineArrowRight />
            </span>
          </Button>
        </Content>
        <Footer>
          <Logo src={logo} />
          <Navigation>
            <List>GitHub .</List>
            <List>Twitter .</List>
            <List>Changelog .</List>
            <List>Pricing .</List>
            <List>Contact .</List>
            <List>Private Privacy .</List>
          </Navigation>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Sixth;

const Navigation = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Logo = styled.img`
  width: 60px;
  height: 42px;
  object-fit: contain;
  margin: 0 13px;
`;
const Footer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;
const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  color: #8792a2;

  font-size: 16px;
  font-family: Simsun;

  :hover {
    color: #babbbb;
    cursor: pointer;
  }
`;
const Content = styled.div`
  width: 785px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex1: 1;
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Sub = styled.div`
  font-size: 20px;
  color: #8792a2;
  word-spacing: 7px;
  margin-bottom: 50px;
`;
const Button = styled.button`
  width: 250px;
  height: 53px;
  border-radius: 5px;
  border: 0;
  outline: none;
  font-size: 18px;
  background-color: rgb(86, 142, 242);
  margin-bottom: 80px;
  color: white;
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
    background-color: #426cb6;
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
