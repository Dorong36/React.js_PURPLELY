import React from "react";
import styled from "styled-components";
import data from "../../data.json";

function BackgroundImg(props){
    const post = props;
    return(
        <img src={"../../img/"+post.id+".jpg"} alt="" />
    )
}

export default BackgroundImg;