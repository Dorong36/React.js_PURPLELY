import React from "react";
import styled from "styled-components";
import logo2 from "../../img/logo_white.png";
import logo1 from "../../img/squareLogoWhite.png";


const FooterDiv = styled.footer`
  color: white;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${
    (props) => {
      return `justify-content: ${props.justify};`
    }
  }
`

const LogoImg = styled.img`
  ${
    (props) => {
      return `height: ${props.height}px;`
    }
  }
  padding: 10px;
`




function Footer() {
  return (
    <FooterDiv>
      <Container justify={"space-between"}>
        <Container justify={"flex-start"}>
          <LogoImg src={logo1} height={"50"}></LogoImg>
          <LogoImg src={logo2} height={"15"}></LogoImg>
        </Container>
        <Container justify={"flex-end"}>
          Yu Do Yeong | 2022
        </Container>
      </Container>
      
    </FooterDiv>
  );
}

export default Footer;