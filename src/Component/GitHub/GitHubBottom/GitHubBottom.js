import React from 'react'
import styled from "styled-components"
import image from "../GitHubImages/co-authoring.png"

const GitHubBottom = ({chn, text, content, image}) => {
    return (
       <Container>
           <Wrapper chn ={chn}>
               <WrapperImage src={image}/>
               <WrapperContent>
                   <Header>
                   {text}
                   </Header>
                   <Para>
                      {content}
                   </Para>
               </WrapperContent>
           </Wrapper>
       </Container>
    )
}

export default GitHubBottom


const Container = styled.div`
width:100%;
display:flex;
justify-content:center;

`;
const Wrapper = styled.div`
width:800px;
padding-top:50px;
display:flex;
justify-content:space-between;
flex-direction:${({chn})=> (chn ? "row-reverse" : "row")};
align-items:center;


`;
const WrapperImage = styled.img`
width:300px;
height:200px;
border-radius:10px;
object-fit:contain;



`;
const Header = styled.div`
font-size:18px;
font-weight:bold;
margin-bottom:20px;
color:white;
`;
const Para = styled.div``;
const WrapperContent = styled.div`
width:400px;
color:#B2AFB0

`;