import React from 'react';
import NewsApi from './newApi';

export default function Sport(props) {
  return (
    <>
   <NewsApi category={props.category}/>
    </>
  )
}
