import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 2px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    // border: 1px solid grey;
    // border-radius: 8px;
    // background: #F3E3FF;
    // cursor: pointer;
    // :hover {
    //     background: lightgrey;
    // }
`;

const ContentText = styled.p`
    padding-left: 10px;
    font-size: 16px;
    white-space: pre-wrap;
`;

function CommentListItem(props) {
    const{comment} = props;

    return(
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
            
        </Wrapper>
    )
};

export default CommentListItem;