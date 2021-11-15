import React from "react";
import styled from "styled-components";
import image from "./Images/food.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import image2 from "./Images/pepper.png";

const Component1 = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Healthy & Fresh Food For You</Title>
          <Sub>
            Created for lovers of healthy delicious and non-obvious food.
          </Sub>
          <Button>
            Check Menu
            <span>
              <AiOutlineArrowRight />
            </span>
          </Button>
          <Picture src={image2} />
        </Content>
        <ImageHolder>
          <ImageViewer>
            <Image src={image} />
          </ImageViewer>
        </ImageHolder>
      </Wrapper>
    </Container>
  );
};

export default Component1;

const Picture = styled.img`
  margin-left: -35px;
  width: 200px;
`;
const Image = styled.img`
  width: 500px;
  height: 600px;
  object-fit: contain;
  margin-right: 100px;
  transition: all 300ms;
  transform: scale(1);

  :hover {
    transform: scale(0.93);
  }
`;

const ImageHolder = styled.div`
  width: 900px;
  height: 900px;
  position: relative;
  overflow: hidden;
`;

const ImageViewer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #387546;
  position: absolute;
  right: -179px;
  top: -190px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
font-size:19px;
font-family:Arial
display:flex;
justify-content:center;
align-items:center;
color:white;
border:0;
outline:none;
width:200px;
height:50px;
border-radius:10px;
margin-left:100px;
margin-bottom:50px;
background-color:#F19A33;
box-shadow:rgb(000/20%) 0px 26px 30px -10p;
transition:all 300ms;
transform:scale(1);

:hover{
    cursor:pointer;
    transform:scale(0.93)
}

span{
   font-size:13px;
   padding-left:8px;
}

`;
const Content = styled.div`
  width: 550px;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  color: black;
`;
const Title = styled.div`
font-size:56px;
font-family:Raleway, sans-serif;
font-weight:bold:px;
margin-bottom:23px;
margin-left:100px;

color:black;

`;
const Sub = styled.div`
  font-size: 23px;
  font-family: Raleway, sans-serif;
  margin-left: 100px;
  margin-bottom: 30px;

  color: black;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: linear-gradient(#b6cba7, #fafafa);
  padding-top: 95px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  // flex-wrap:wrap;
`;
