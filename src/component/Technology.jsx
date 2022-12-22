import React from "react";
import NewsApi from "./newApi";
const Technology = (props)=>{
    return(
        <>
   <NewsApi category={props.category}/>
    </>
    );
}

export default Technology;