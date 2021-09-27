import React from 'react'
import styled from "styled-components"
import TopHeader from './TopHeader'
import BottomBuild from "./GitHubBottom/BottomBuild"
import GitHubCenter from './GitHubCenter'



const GitHubApp = () => {
    return (
        <Container>
            <TopHeader/>
            <GitHubCenter/>
            <BottomBuild/>
        </Container>
    )
}

export default GitHubApp

const Container = styled.div`
background-color:#1D2125;
`;
