import React from "react";
import styled from "styled-components";
import bottom from "./Images/bottom.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Component5 = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Logo></Logo>
          <Time>Today 12pm - 9pm</Time>
          <Note>Working Hours</Note>
        </Box>
        <Box>
          <Logo></Logo>
          <Time>Piastowska 4, Cracow</Time>
          <Note>Find us</Note>
        </Box>
        <Box>
          <Logo></Logo>
          <Time>503 204 176</Time>
          <Note>Call to Us</Note>
        </Box>
        <ImageHolder>
          <ImageViewer>
            <ImageWrapper>
              <Image src={bottom} />
            </ImageWrapper>
          </ImageViewer>
        </ImageHolder>
        <Navigation>
          <Nav>
            <span>About us</span>
            <Link>
              <FacebookIcon />
            </Link>
          </Nav>
          <Nav>
            <span>Menu</span>
            <Link>
              <TwitterIcon />
            </Link>
          </Nav>
          <Nav>
            <span>Contact</span>
            <Link>
              <InstagramIcon />
            </Link>
          </Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Component5;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const Nav = styled.div`
  margin: 0 30px;
  font-size: 24px;
  color: white;
  margin-top: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  span {
    margin-bottom: 15px;
  }
`;
const Link = styled.div`
  .MuiSvgIcon-root {
    font-size: 40px;
  }
`;
const ImageWrapper = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 50%;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -100px;
`;
const ImageHolder = styled.div`
  width: 2100px;
  height: 550px;
  border: 0;
  background-color: #fafafa;
  position: relative;
  overflow: hidden;
`;
const ImageViewer = styled.button`
  width: 2100px;
  height: 2100px;
  border-radius: 50%;
  background-color: #5f906a;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -380px;
  top: 260px;
  bottom: --50px;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 70px;
`;
const Box = styled.div`
  width: 350px;
  height: 170px;
  border-radius: 80px;
  background-color: white;
  margin: 40px 25px;
  outline: none;
  border: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 32px 1px rgb(91, 119, 211);
  align-items: center;
  justify-content: center;
  transition: all 1ms;
  transform: scale(1);

  :hover {
    transform: scale(1.02);
  }
`;
const Logo = styled.div``;
const Time = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
`;
const Note = styled.div`
  font-size: 18px;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #fafafa;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 40px;
`;
