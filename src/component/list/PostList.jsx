import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

import img0 from "../../img/000.png";
import img1 from "../../img/001.png";
import img2 from "../../img/002.png";
import img3 from "../../img/003.png";
import img4 from "../../img/004.png";

// const Wrapper = styled.div`
//     width: calc(100% - 32px);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     & > * { 
//         :not(:last-child){
//             margin-botton: 16px;
//         }
//     }
// `;

// const Container = styled.div`
//     display: grid;
//     grid-template-rows: repeat(2, 280px);
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-gap: 10px;
//     margin: 0 auto;
//     justify-content: center;
//     padding: 20px;
//     max-width: 1200px;
//     background-color: #ffffff;
//     border-radius: 8px;
// `;

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 280px);
    // grid-template-columns: 380px 380px 380px;
    grid-template-columns: 1fr 1fr 1fr;

    // testing now
    // grid-template-columns: repeat(3, minmax(190px 1fr))
    // grid-auto-columns: 190px;

    grid-gap: 10px;
    margin: 0 auto;
    justify-content: center;
    padding: 20px;
    width: calc(100% - 32px);
    //max-width: 1200px;
    background-color: #ffffff;
    border-radius: 8px;
`;



let postImages = [img0, img1, img2, img3, img4, img1];


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
