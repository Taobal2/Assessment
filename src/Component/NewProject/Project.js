import React from 'react';
import styled from "styled-components";
import image from "./site.png";
import GlobalButton from "./GlobalButton";


const Project = () => {
    return (
        <Container>
            <Wrapper>
                <Box>
                    <Title>Best WP Project Bidding 
                        Theme – Freelance Marketplace 2021
                    </Title>
                    <SubTitle>The most complete freelancer marketplace theme in the world.
                         Build your freelancer website with the best template. Finest written
                          code and awesome customer support!
                    </SubTitle>
                    <Sub>Starting from<span><p>$</p>149</span><GlobalButton name="see Pricing" bg="green" /></Sub>
                    <MyButton>
                    <GlobalButton name="VIEW DEMO" cl />
                    <GlobalButton name="PURCHASE THEMES" cl />
                    </MyButton>
                    <Text>Latest Update Released on 19 August 2021
                        Works with WordPress v5.8
                    </Text>
                    
                </Box>
                <Image src={image} />
            </Wrapper>
        </Container>
    )
}

export default Project


const Container = styled.div`
width:100%;
min-height:100vh;
height:100%;
background-image: url("newbg.jpeg");
background-posiyion: center;
background-repeat: no-repeat;
background-size: cover;
color:white;
`;
const Wrapper = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:center;
`;

const Box = styled.div`
width:320px;
height:400px;
color:white;
margin:20px;
display:flex;
font-size:13px;
flex-direction:column;
`;

const Image = styled.img`
min-width:320px;
width:480px;
min-height:360px;
height:450px;
color:white;
margin:20px;
object-fit: contain;
`;

const Title = styled.h2`
color:white;
margin:0px;
margin-bottom:15px;
`;
const SubTitle = styled.div`
font-size:14px;
`;
const Sub = styled.div`
display:flex;
align-items: center;
margin-bottom:30px;
font-size:15px;

span{
    color:lightgreen;
    font-weight:bold;
    margin-left:5px;
    display:flex;


    p{
        margin:0px;
        font-size:12px;
    }
}

`;

const MyButton = styled.div`
display:flex;
align-items: center;
margin-bottom:20px;
`;

const Text = styled.div`
font-size:15px;
`;