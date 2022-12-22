import React from 'react';
import NewsApi from './newApi';

export default function Education(props) {
  
  return (
    <>
   <NewsApi category={props.category}/>
    </>
  )
}