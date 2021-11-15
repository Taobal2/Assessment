import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineFlag,
  AiFillGithub,
} from "react-icons/ai";
import { GrGamepad } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { GiPortrait } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { GiFoodTruck, GiUnstableProjectile } from "react-icons/gi";
import image from "../TestComp/project logo.png";

export const HeaderNav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={image} />
        <MyLinks>
          <Links to="/">
            <AiOutlineHome />
          </Links>
          <Links to="/TastyFood">
            <GiFoodTruck />
          </Links>
          <Links to="/WorkHome">
            <AiOutlineFlag />
          </Links>
          <Links to="/GitHub">
            <AiFillGithub />
          </Links>
          <Links to="/Dapiok">
            <GiUnstableProjectile />
          </Links>
          <Links to="/portfolio">
            <GiPortrait />
          </Links>
          <Links to="/HomeScreen">
            <ImProfile />
          </Links>
          <Links to="/GameScreen">
            <GrGamepad />
          </Links>
        </MyLinks>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: teal;
  position: fixed;
  z-index: 100;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 200px;
  height: 70px;
  object-fit: cover;
  margin-left: 10px;
`;

const MyLinks = styled.div`
  display: flex;
`;

const Links = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  width: 60px;
  height: 40px;
  border-radius: 4px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ clr }) => (clr ? "yellow" : "black")};
  transition: all 400ms;
  transform: scale(1);

  :hover {
    background-color: brown;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
