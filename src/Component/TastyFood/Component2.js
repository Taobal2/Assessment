import React from "react";
import styled from "styled-components";
import food2 from "./Images/food2.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Component2 = () => {
  return (
    <Container>
      <Wrapper>
        <ImageHolder>
          <ImageViewer>
            <Image src={food2} />
          </ImageViewer>
        </ImageHolder>
        <Content>
          <Title>About us</Title>
          <Sub>Few words about us</Sub>
          <Desc>
            We are not ordinary food truck. We create a place overflowing with
            positive energy that it expresses important to us values. Get to
            know them specifically.
          </Desc>
          <Button>
            Learn More
            <span>
              <AiOutlineArrowRight />
            </span>
          </Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Component2;

const Button = styled.div`
  width: 180px;
  height: 50px;
  border-radius: 5px;
  background-color: #387546;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  letter-spacing: 2px;
  transition: all 300ms;
  transform: scale(1);

  span {
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :hover {
    cursor: pointer;
    transform: scale(0.9);
  }
`;
const ImageHolder = styled.div`
  width: 650px;
  height: 650px;
  position: relative;
  overflow: hidden;
`;
const ImageViewer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #387546;
  position: absolute;
  left: -250px;
  display: flex;
  align-items: center;
`;
const Image = styled.img`.
width:580px;
height:580px;
position:absolute;
right:-200px;
transition:all 350ms;
transform:scale(1);


:hover{
    transform:scale(0.93);
}
`;
const Content = styled.div`
  width: 500px;
  margin-right: 90px;
`;
const Title = styled.div`
  font-size: 32px;
  color: #f19a33;
  margin-bottom: 15px;
`;
const Sub = styled.div`
  font-size: 32px;
  color: #000000;
  font-family: Raleway, sans-serif;
  font-weight: bold;
  margin-bottom: 15px;
`;
const Desc = styled.div`
  font-size: 24px;
  color: #000000;
  font-family: Raleway, sans-serif;
  margin-bottom: 25px;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #fafafa;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
