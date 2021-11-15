import React from "react";
import styled from "styled-components";

const Top = () => {
  return (
    <Container>
      <Logo src={"head.svg"} />
      <LogoLinks>
        <Links clr>Overview</Links>
        <Links>Release Note</Links>
        <Links>Help</Links>
      </LogoLinks>
    </Container>
  );
};

export default Top;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: 30px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
`;
const LogoLinks = styled.div`
  display: flex;
`;
const Links = styled.div`
  margin: 0 20px;
  color: ${({ clr }) => (clr ? "#7D46D9" : "white")};

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
