import React from 'react';
import NewsApi from './newApi';

export default function Crime(props) {
  return (
    <>
   <NewsApi category={props.category}/>
    </>
  )
}
