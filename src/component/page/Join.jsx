import React from "react";
import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import logo from "../../img/squareLogo.png";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
`

const LogoImg = styled.img`
    padding: 50px;
    height: 400px;
`


const Texts = styled.div`
    color: #F3E3FF;
    font-weight: bold;
    ${
        (props) => props.size && `font-size: ${props.size}px;`
    }
    ${
        (props) => props.padding_right && `padding-right: ${props.padding_right}px;`
    }
    ${
        (props) => props.padding_top && `padding-top: ${props.padding_top}px;`
    }${
        (props) => props.padding_bottom && `padding-bottom: ${props.padding_bottom}px;`
    }
`

const SpanText = styled.div`
    color: white;
    display: inline;
`


function Join(props){
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    return(
        <Wrapper>
            <LogoImg src={logo}></LogoImg>
            <Texts size={"30"} padding_top={"30"} padding_bottom={"30"}>Welcome to Purplely!!!</Texts>
            <br /><br />
            <form>
                <table width={"500px"}>
                    <tr>
                        <td align="right" width={"200px"}><Texts size={"20"} padding_right={10} padding_bottom={5}>ID</Texts></td>
                        <td ><input type="text" name="id" id="id" /></td>
                    </tr>
                    <tr>
                        <td align="right" width={"200px"}><Texts size={"20"} padding_right={10} padding_bottom={5}>Password</Texts></td>
                        <td ><input type="password" name="pw" id="pw" /></td>
                    </tr>
                    <tr>
                        <td align="right" width={"200px"}><Texts size={"20"} padding_right={10} padding_bottom={5}>Password Check</Texts></td>
                        <td ><input type="password" name="pw" id="pw" /></td>
                    </tr>
                    <tr>
                        <td align="right" width={"200px"}><Texts size={"20"} padding_right={10} padding_bottom={5}>Name</Texts></td>
                        <td ><input type="text" name="name" id="name" /></td>
                    </tr>
                    <tr>
                        <td align="right" width={"200px"}><Texts size={"20"} padding_right={10} padding_bottom={5}>Gender</Texts></td>
                        <td >
                            <input type="radio" name="gender" id="gender" value="male"/><SpanText>Male</SpanText>
                            <input type="radio" name="gender" id="gender" value="male"/><SpanText>Female</SpanText>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" width={"200px"}><Texts size={"20"} padding_right={10}>Nickname</Texts></td>
                        <td ><input type="text" name="name" id="name" /></td>
                    </tr>
                    <tr>
                        <td><br /></td>
                    </tr>
                    <tr align={"center"}>
                        <td colSpan={2}>
                            <Button 
                                title={"Join"} 
                                onClick = {()=>{
                                    navigate("/login")
                                }}
                            ></Button>
                        </td>
                    </tr>
                    
                </table>
            </form>
            <br /><br /><br />
        </Wrapper>
        
    );
};

export default Join;