import React from "react";
import styled from "styled-components";
import logo from "./Images/logo.png";

const HeaderNav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Navigation>
          <Links>About us</Links>
          <Links>Menu</Links>
          <Links>Contact</Links>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default HeaderNav;

const Navigation = styled.div`
  display: flex;
  padding-right: 40px;
`;
const Logo = styled.img`
  width: 160px;
  height: 60px;
  margin-left: 25px;
  object-fit: contain;
  padding-left: 40px;
`;
const Links = styled.div`
  margin: 0 30px;
  font-size: 20px;

  font-weight: bolder;
  font-family: Raleway, sans-serif;
  transition: all 300ms;

  :hover {
    color: #f19a33;
    cursor: pointer;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 95px;
  background-color: #ffffff;
  position: fixed;
  z-index: 100;
  margin-top: 80px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
