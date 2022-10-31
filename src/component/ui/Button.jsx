import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border: 1px solid yellow;
    border-radius: 8px;
    background-color: rgb(111, 34, 255);
    cursor: pointer;
    color: rgb(255, 243, 75);
`;

function Button(props){
    const {title, onClick} = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
};

export default Button;