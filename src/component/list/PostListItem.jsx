import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    border-radius: 8px;
    padding: 10px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    cursor: pointer;
    width: calc(100%-32px);
    height: 270px;

    :hover {
        transform: scale(1.1);
        transition: transform 1s;
    }
    ${({bgcolor}) => {
        return bgcolor? `background: ${bgcolor}`: "black";
    }}
`;
const Polaroid = styled.img`
    padding-top: 7px;
    height: 175px;
    max-width: 350px;
    object-fit: cover;  // background-size: cover과 같은 기능!!
`
const TitleText = styled.div`
    color : white;
    font-size: 19px;
    font-weight: 500;
    line-height: 25px;
    white-space: pre-wrap;
    // 텍스트 상하 가운데 정렬
    line-height: 95px;
`;




function PostListItem(props) {

    const {post, onClick, bgcolor, postImg} = props;

    return(
        <Wrapper onClick={onClick} bgcolor={bgcolor}>
            <Polaroid src = {postImg}></Polaroid>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
    
};

export default PostListItem;