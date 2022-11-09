import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { useState } from "react";
import logo from "../../img/squareLogoWhite.png";


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
`;

const About = styled.div`
    color: white;
    ${
        (props) => props.size && `font-size: ${props.size}px;`
    }
`

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const LogoImg = styled.img`
    padding: 30px;
    height: 100px;
`

function PostWritePage(props){
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return(
        <Wrapper>
            <LogoImg src={logo}></LogoImg>
            <Container>
                <About size={20}>🌟 Title</About>
                <TextInput 
                    height = {20}
                    value = {title}
                    onChange = {(event)=>{
                        setTitle(event.target.value);
                    }}
                />
                <About size={20}>🌟 Content</About>
                <TextInput 
                    height = {480}
                    value = {content}
                    onChange = {(event) => {
                        setContent(event.target.value);
                    }}
                />
                <Button 
                    title = {"Write Post"}
                    onClick = {() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    )
}

export default PostWritePage;