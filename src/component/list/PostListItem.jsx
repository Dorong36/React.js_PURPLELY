import React from "react";
import styled from "styled-components";
import image1 from "../../img/1.jpg";
import image2 from "../../img/2.jpg";
import image3 from "../../img/3.jpg";
import image4 from "../../img/4.jpg";
import image5 from "../../img/5.jpg";
import image6 from "../../img/6.jpg";

const images = [image1, image2, image3, image4, image5, image6]


const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    // display: flex;
    // flex-direction: column;
    // align-items: flex-start;
    // justify-content: center;
    // border: 1px solid grey;
    // border-radius: 8px;
    cursor: pointer;
    :hover {
        transform: scale(1.1);
        transition: transform 1s;
        filter: brightness(70%);
    }

    
    background-image: url(${image3});
    background-size: cover;
    background-position: center;
`;


const TitleText = styled.p`
    color : white;
    position: relative;
    font-size: 20px;
    font-weight: 500;
`;

function getImagePath(){
    return "../../img/1.jpg"
}

function PostListItem(props) {

    const {post, onClick} = props;

    return(
        <Wrapper onClick={onClick}>
            {/* <img src={images[post.id]} alt="" /> */}
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
    
};

export default PostListItem;