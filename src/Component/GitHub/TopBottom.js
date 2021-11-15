import React from "react";
import styled from "styled-components";

const TopBottom = () => {
  return (
    <Container>
      <Title>GitHub Desktop</Title>
      <Wrapper>
        Focus on what matters instead of fighting with Git. Whether you're new
        to Git or a seasoned user, GitHub Desktop simplifies your development
        workflow.
      </Wrapper>
      <Button>Download for Windows (64bit)</Button>

      <span>
        Download for<p>macOS</p>or<p>Windows (msi)</p>By downloading, you agree
        to the<p>Open Source Applications Terms.</p>
      </span>
    </Container>
  );
};

export default TopBottom;

const Container = styled.div`
width:100%;
padding-top:50px;
display:flex;
flex-direction:column;
align-items:center;

span{
    display:flex;
    margin:30px:0;
    font-size:13px;
    color:#B2AFB0;
    
}

p{
    margin:0px 5px;
    color:#7D46D9;


:hover{
    cursor:pointer;
    text-decoration:underline;
}



`;
const Title = styled.div`
  font-size: 40px;
  margin-top: 10px;
`;
const Wrapper = styled.div`
  width: 800px;
  font-size: 16px;
  text-align: center;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 45px;
  color: #b2afb0;
`;
const Button = styled.div`
  background-color: #8149e2;
  padding: 10px;
  font-size: 23px;
  margin-bottom: 15px;
  outline: none;
  border-radius: 5px;
  font-family: poppins;
  transition: all 500ms;

  :hover {
    background-color: #d410f2;
    cursor: pointer;
  }
`;
