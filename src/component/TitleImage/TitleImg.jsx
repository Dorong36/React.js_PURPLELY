import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import img0 from "../../img/000.png";
import img1 from "../../img/001.png";
import img2 from "../../img/002.png";
import img3 from "../../img/003.png";
import img4 from "../../img/004.png";

const LayoutBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ViewWindow = styled.div`
    // width: calc(100% - 32px);
    max-width: 1200px;
    max-height: 600px;
    width: 1200px;
    height: 600px;
    overflow: hidden;
`;

const Elements = styled.div`
    width: 6000px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    transition: ${props => (props.boolean ? '' : 'transform 1.5s ease-in')};
    ${({count}) => {
        return count? `transform: translateX(-${count * 1200}px)` : null;
    }}
`;


// const Element = styled.div`
//     width: 1200px;  
//     height: 600px;
//     margin: 10px 0;
//     background-image: url(${props => props.imgUrl});
//     background-size: cover;
//     vertical-align: middle;
// `;

const Element = styled.img`
    max-width: 1200px;  
    max-height: 600px;
    margin: 10px 0;
    object-fit: cover;
`;


function TitleImg(props){

    // const elementHeight =120;
    const elementLength = 4;
    const [count, setCount] = useState(0);
    const boolean = useRef(false);


    useEffect(() => {
        const timer = setInterval(
            () => {
                if(count < elementLength - 1){
                    boolean.current = false;
                    setCount(prev => prev + 1);
                }else{
                    boolean.current = true;
                    setCount(0);
                }
            },
            10000
        );
    
        return () => {
            clearInterval(timer);
        };
    }, [count]);

    return(
        <LayoutBox>
            <ViewWindow>
                <Elements count={count}>
                    {/* <Element name="0" imgUrl={img0}></Element>
                    <Element name="1" imgUrl={img1}></Element>
                    <Element name="2" imgUrl={img2}></Element>
                    <Element name="3" imgUrl={img3}></Element>
                    <Element name="4" imgUrl={img4}></Element> */}
                    <Element name="0" src={img0}></Element>
                    <Element name="1" src={img1}></Element>
                    <Element name="2" src={img2}></Element>
                    <Element name="3" src={img3}></Element>
                    <Element name="4" src={img4}></Element>
                </Elements>
            </ViewWindow>
        </LayoutBox>
    );
}

export default TitleImg;