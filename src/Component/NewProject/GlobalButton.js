import React from 'react';
import styled from "styled-components";


const GlobalButton = ({name, bg, cl}) => {
    return (
        <Container bg={bg}>
            <Button cl={cl}>
                {name}
            </Button>
        </Container>
    )
}

export default GlobalButton


const Container = styled.div`
width:150px;
height:40px;
border-radius:5px;
margin:10px;
background-color:${({bg}) => (bg ? "yellow" : "#0069D9" )};
border-radius:5px;
transition:all 500ms;
transform:scale(1);


:hover{
    // background-color:${({bg})=> (bg ? "#0069D9" : "#2D2CA2" )};
    cursor:pointer;
    transform:scale(1.05);
}
`;
const Button = styled.div`
width:120px;
height:40px;
display:flex;
justify-content:center;
align-items:center;
color: ${({cl})=> (cl ? "white" : "black")};
`;