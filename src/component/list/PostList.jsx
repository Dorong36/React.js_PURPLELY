import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

import img0 from "../../img/000.png";
import img1 from "../../img/001.png";
import img2 from "../../img/002.png";
import img3 from "../../img/003.png";
import img4 from "../../img/004.png";
import img5 from "../../img/005.png";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;

    background-color: #ffffff;
    gap: 10px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
`;

let postImages = [img0, img1, img2, img3, img4, img5];


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
                        bgcolor={post.bgColor}
                        postImg={postImages[Number(post.imgId)]}
                    />
                )
            })}
            
        </Wrapper>
    )
};

export default PostList;
