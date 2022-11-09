import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/purplely.png";
import Button from "../ui/Button";
import logo2 from "../../img/logo_white.png";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const LogoImg = styled.img`
    height: 35px;
    padding-bottom: 10px;
    :hover {
        cursor: pointer;
    }
`


function Header(props) {

    const navigate = useNavigate();

  return (
        <Wrapper>
            <LogoImg src={logo2} onClick = {()=>{navigate("/")}}/>
        </Wrapper>
  );
}
export default Header;