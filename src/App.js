// default
import logo from './logo.svg';
import './App.css';
import image7 from './img/7.jpg';

// react import
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
import styled, {keyframes} from 'styled-components';

// pages
import MainPage from "./component/page/MainPage";
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';


const MainTitleText = styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const Wrapper = styled.div`
  margin: 0px auto;
  padding: 70px 30px;
  background: linear-gradient(-45deg, #7a30ff, #df9bff, #b486b8, #ff87ab);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
`



function App(gradient) {
  return (
    <Wrapper gradient>
      <BrowserRouter>
        <MainTitleText>React 미니 블로그</MainTitleText>
        <Routes>
          <Route index element={<MainPage/>} />
          <Route path = "post-write" element={<PostWritePage/>} />
          <Route path = "post/:postId" element={<PostViewPage/>} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
