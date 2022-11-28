// default
import './App.css';


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
import Login from './component/page/Login';
import Join from './component/page/Join';
import Header from './component/HeaderFooter/Header';
import Footer from './component/HeaderFooter/Footer';

//Scoll to top
import ScrollToTop from './component/ui/ScrollToTop';




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
  padding: 30px 30px;
  background: linear-gradient(-45deg, #441A78, #000000, #ffffff);   // 실험용, 나중에 흰색 빼자
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
`


const LogoImg = styled.img`
  height: 100px;
`



function App(gradient) {
  return (
    <Wrapper gradient>
      <BrowserRouter>
      <ScrollToTop></ScrollToTop>
        <Header></Header>
        <hr></hr>
        <Routes>
          <Route index element={<MainPage/>} />
          <Route path = "post-write" element={<PostWritePage/>} />
          <Route path = "post/:postId" element={<PostViewPage/>} />
          <Route path = "login" element={<Login/>} />
          <Route path = "join" element={<Join/>} />
        </Routes>
        <hr></hr>
        <Footer></Footer>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
