import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 8px;
    background-color: #626262;
    color: #ffffff;

    & > * {
        :not(:last-child) {
            margin-botton: 16px;
        }
    }
`;

function CommentList(props){
    const {comments} = props;

    return(
        <Wrapper>
            {comments.map((comment, index) => {
                return <CommentListItem key={comment.id} comment={comment}></CommentListItem>
            })}
        </Wrapper>
    )
    ;
};

export default CommentList;