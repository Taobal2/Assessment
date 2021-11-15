import React from "react";
import styled from "styled-components";
import data1 from "./data1.json";

const Component3 = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Menu</Title>
          <Sub>Explore Our Best Food</Sub>
          <Desc>Below you can see our best selling meals!</Desc>
        </Content>
        <Section>
          {data1.map((props) => (
            <Card>
              <Image src={props.image} />
              <Items>
                <Name>{props.name}</Name>
                <Price>{props.price}</Price>
              </Items>
              <About>{props.about}</About>
            </Card>
          ))}
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Component3;

const About = styled.div`
  font-size: 16px;
  margin-left: 20px;
  font-weight: 500px;
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 410px;
  border-radius: 6px;
  background-color: White;
  margin: 0 10px;
  transition: all 300ms;
  transform: scale(1);

  :hover {
    transform: scale(1.04);
  }
`;
const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
  margin-top: 30px;
`;
const Name = styled.div`
  font-family: Raleway, sans-serif;
  font-size: 24px;
  font-weight: bold;
`;
const Price = styled.div`
  font-size: 22px;
  font-weight: bold;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 6px 6px 0 0;
  object-fit: cover;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Title = styled.div`
  color: #f19a33;
  font-size: 32px;
`;
const Sub = styled.div`
  font-size: 56px;
  font-weight: bold;
  color: #000000;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 40px;
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
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 40px;
`;
