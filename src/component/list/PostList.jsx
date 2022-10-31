import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

// const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;

//     & > * { 
//         :not(:last-child){
//             margin-botton: 16px;
//         }
//     }
// `;
const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 200px);
    grid-template-columns: 200px 200px 200px;
    grid-gap: 2px;
    margin: 0 auto;

    
`;

function PostList(props) {
    const {posts, onClickItem} = props;

    return(
        <Wrapper>
            {posts.map((post, index) => {
                return(
                    <PostListItem 
                        key={post.id} 
                        post={post} 
                        onClick={()=>{
                            onClickItem(post)
                        }}
                    />
                )
            })}
        </Wrapper>
    )
};

export default PostList;
