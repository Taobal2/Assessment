import React, {useState, useEffect} from 'react'
import Styled from "styled-components"

const GameScreen = () => {

    const [picker, setPicker]=useState(0)
    const [computer, setComputer]=useState(0)

    const guessValue=(max, min)=>{
        return setComputer(Math.floor(Math.random()*(max-min)+min))
        console.log(computer)
    }

    return (
        <Container>
            <Wrapper>
                <Section>My Game</Section>
                <RowSection>
                    <RowBox>
                        <RowBox1>{}</RowBox1>
                        <DisplayButton>
                        <Button onClick={()=>{
                            setPicker(1)
                            console.log(picker)
                        }}
                        >1</Button>
                        <Button onClick={()=>{
                            setPicker(2)
                            console.log(picker)
                        }}>2</Button>
                        <Button onClick={()=>{
                            setPicker(3)
                            console.log(picker)
                        }}>3</Button>
                        <Button onClick={()=>{
                            setPicker(4)
                            console.log(picker)
                        }}>4</Button>
                        <Button onClick={()=>{
                            setPicker(5)
                            console.log(picker)
                        }}>5</Button>
                        </DisplayButton>
                        <RowBoxName>Me</RowBoxName>
                    </RowBox>
                    <RowBox>
                        <RowBox1>{}</RowBox1>
                        <ComputerButton onClick={()=>{
                            guessValue(1, 5)

                        }}>Click</ComputerButton>
                        <RowBoxName>Computer</RowBoxName>
                    </RowBox>
                </RowSection>
                <Result>Result</Result>
                <DisplayResult>
                    {
                        picker===computer? <span>You won</span> : <span>You lost</span>
                    }
                </DisplayResult>
            </Wrapper>
        </Container>
    )
}

export default GameScreen


const Container = Styled.div`
width:100%;
min-height:100vh;
height:100%;
background-color:blue;
padding-top:20px;

`;


const Result = Styled.div`
font-size:50px;
padding-top:30px;
color:white;
`;
const RowBox = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;
const RowSection = Styled.div`
display:flex;
width:80%;
justify-content:space-around;
`;
const Wrapper = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;
const RowBox1 = Styled.div`
width:300px;
height:200px;
border-radius:10px;
background-color:white;
color:black;
margin-bottom:10px;
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
`;
const DisplayButton = Styled.div`
display:flex;
`;
const RowBoxName = Styled.div`
padding-top:20px;
color:white;
font-size:20px;

`;

const DisplayResult = Styled.div`
font-size:30px;
color:white;
`;
const Button = Styled.div`
width:40px;
height:40px;
border-radius:50%;
margin-right:10px;
background-color:yellow;
display:flex;
align-items:center;
justify-content:center;
color:green;
`;
const ComputerButton = Styled.div`
width:50px;
height:50px;
border-radius:50%;
margin-right:10px;
background-color:yellow;
display:flex;
align-items:center;
justify-content:center;
color:green;
`;
const Section = Styled.div`
font-size:70px;
font-weight:bold;
margin-bottom:40px;
color:white;
`;
