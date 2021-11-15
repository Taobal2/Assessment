import React from "react";
import styled from "styled-components";
import logo from "./Assets/landing-logo.png";

const HeaderBar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoHolder>
          <Logo src={logo} />
          <span>Dapi</span>
        </LogoHolder>
        <Navigation>
          <Nav>Changelog</Nav>
          <Nav>Pricing</Nav>
          <Nav>Contact</Nav>
        </Navigation>
        <Button1>Login</Button1>
        <Button2>Sign up</Button2>
      </Wrapper>
    </Container>
  );
};

export default HeaderBar;

const Button1 = styled.button`
  width: 90px;
  height: 30px;
  font-size: 18px;
  font-family: sfrounded;
  font-weight: bold;
  margin: 0 5px;
  border: 0;
  margin: 0 10px;
  outline: none;
  background-color: transparent;
  color: #568ef2;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;

  :hover {
    cursor: pointer;
    color: #28406c;
  }
`;
const Button2 = styled.button`
  width: 100px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: 0;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 90px;
  font-family: sfrounded;
  background-color: rgb(86, 142, 242);
  transition: all 300ms;

  :hover {
    cursor: pointer;
    background-color: #426cb6;
  }
`;
const LogoHolder = styled.div`
width:130px;
height:40px;
display:flex;
align-items:center;center;
margin-left:90px;
display:flex;
align-items:center;


span{
    font-size:18px;
    font-family:sfrounded;
    font-weight:bold;
}
`;
const Logo = styled.img`
  width: 40px;
  height: 32px;
  object-fit: contain;
  margin: 0 13px;
  // background-color:blue;
`;
const Navigation = styled.div`
  display: flex;
  flex: 1;
`;
const Nav = styled.div`
  margin: 0 20px;
  font-size: 16px;
  font-family: Simsun;

  :hover {
    color: #babbbb;
    cursor: pointer;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 95px;
  color: white;
  z-index: 10;
  position: fixed;
  background: rgba(6, 6, 6, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 0px solid rgba(255, 255, 255, 0.18);
  margin-top: 80px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
