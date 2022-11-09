import React from "react";
import styled from "styled-components";



// const Wrapper = styled.div`
//     width: calc(100% - 32px);
//     padding: 16px;
//     cursor: pointer;
//     :hover {
//         transform: scale(1.1);
//         transition: transform 1s;
//         filter: brightness(70%);
//     }
//     background-image: url(${image3});
//     background-size: cover;
//     background-position: center;
// `;

const Wrapper = styled.div`
    border-radius: 8px;
    padding: 10px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    cursor: pointer;
    width: calc(100%-32px);

    :hover {
        transform: scale(1.1);
        transition: transform 1s;
    }
    ${({bgcolor}) => {
        return bgcolor? `background: ${bgcolor}`: "black";
    }}
`;

// const Wrapper = styled.div`
//     border-radius: 8px;
//     padding: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     :hover {
//         transform: scale(1.1);
//         transition: transform 1s;
//     }
//     ${({bgcolor}) => {
//         return bgcolor? `background: ${bgcolor}`: "black";
//     }}
// `;

const TitleText = styled.p`
    color : white;
    font-size: 19px;
    font-weight: 500;
    line-height: 25px;
    white-space: pre-wrap;
`;

const Polaroid = styled.img`
    padding-top: 7px;
    width: 350px;
    height: 175px;
    object-fit: cover;   // background-size: cover과 같은 기능!!
`


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