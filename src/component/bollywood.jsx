import React from 'react';
import NewsApi from './newApi';

export default function Bollywood(props) {
  return (
    <>
   <NewsApi category={props.category}/>
    </>
  )
}
