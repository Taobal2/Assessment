import React from "react";
import styled from "styled-components";
import data2 from "./data2.json";

const Component4 = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Good food = happy clients</Title>
        <Section>
          {data2.map((props) => (
            <Card>
              <Image src={props.image} />
            </Card>
          ))}
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Component4;

const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  height: 270px;
  width: 400px;
  margin: 10px;
  border-radius: 6px;
  transition: all 300ms;
  transform: scale(1);

  :hover {
    transform: scale(1.05);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
`;
