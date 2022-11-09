import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

import image0 from "../../img/000.png";
import image1 from "../../img/001.png";
import image2 from "../../img/002.png";
import image3 from "../../img/003.png";
import image4 from "../../img/004.png";
import image5 from "../../img/001.png";

const images = [image0, image1, image2, image3, image4, image5]

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1000px;


    & > * {
        :not(:last-child){
            margin-botton: 16px;
        }
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    margin-top: 16px;
    border: 1px solid grey;
    border-radius: 8px;
    background-color: white;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
    color: black;
`;

const ContentText = styled.p`
    font-size: 15px;
    line-height: 32px;
    white-space: pre-wrap;
    color: black;
`;

const CommentLabel = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: white;
`;

const ImgContainer = styled.div`
    padding: 8px 16px;
    margin-top: 16px;
    background-color: white;
`;

const Polaroid = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

function PostViewPage(props){
    const navigate = useNavigate();
    const {postId} = useParams();

    const post = data.find((item) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState("");

    return(
        <Wrapper>
            <Container>
                <Button
                    title = {"Back"}
                    onClick = {() => {
                        navigate("/");
                    }}
                ></Button>
                <PostContainer>
                    <ImgContainer><Polaroid src={images[post.imgId]}></Polaroid></ImgContainer>
                    
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>Comments</CommentLabel>
                <CommentList comments={post.comments} />

                <br />
                <TextInput 
                    height = {40}
                    value = {comment}
                    onClick = {(event) => {
                        setComment(event.target.value);
                    }}
                />

                <Button 
                    title = {"댓글 작성하기"}
                    onClick = {() => {
                        navigate("/")
                    }}
                />
            </Container>
        </Wrapper>
    )

}

export default PostViewPage;