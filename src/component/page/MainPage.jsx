import React from "react";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";
import TitleImg from "../TitleImage/TitleImg";



// const Wrapper = styled.div`
//     padding: 16px;
//     width: calc(100% - 32px);
//     display: grid;
//     place-items: center;

//     & > * {
//         :not(:last-child){
//             margin-bottom: 16px;
//         }
//     }
// `;

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
    max-width: 1200px;
    & > * {
        :not(:last-child){
            margin-botton: 16px;
        }
    }
`;


const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 1200px;
    padding: 20px 0px;
    
`

function MainPage(props) {
    const {} = props;

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <Wrapper>
            <Container>
                <TitleImg></TitleImg>
                <ButtonWrapper>
                    <Button 
                        title = "Write Post"
                        onClick={()=>{
                            navigate("/post-write")
                        }}
                    />
                    <Button
                        title = "LogIn"
                        onClick = {() =>{
                            navigate(`/login`);
                        }}
                    ></Button>
                    {/* <Button
                        title = "Join"
                        onClick = {() =>{
                            navigate(`/join`);
                        }}
                    ></Button> */}
                </ButtonWrapper>
                
                <PostList 
                    posts = {data}
                    onClickItem = {(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
            
        </Wrapper>
        
    );
}

export default MainPage;