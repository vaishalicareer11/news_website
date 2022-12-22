
import React from "react";
import { useState, useEffect } from "react";
import "../App.css"; 
import NewsItem from "./newitem";
import gif from "../assest/image/News_Animata.gif";

const NewsApi = (props) => {
  const [articles, setarticles] = useState([]);
  const [heading, setheading] = useState([]);
  // const [page, setPage] = useState(1);
  // const [pageSize, setPageSize] = useState(6);
  // const [totalResults, settotalResults] = useState(9642);
  
 
  useEffect(() => {
     const url = `https://newsapi.org/v2/everything?q=${props.category}&language=en&apiKey=bc1ed9f0dfb44b6f8c67f26661027735`;
   //const url = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=bc1ed9f0dfb44b6f8c67f26661027735`;
    console.log(props.category);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setarticles(data.articles);
      }
      catch (error) {
        console.log("error", error);
      }
    };
  // top_heading api
    const headingUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bc1ed9f0dfb44b6f8c67f26661027735`;
    const heading_fetchData = async()=>{
        try{
        const result = await fetch(headingUrl);
        const heading_data = await result.json();
        setheading(heading_data.articles);
        // console.log(heading);
    }
    catch(error){
      document.write(error);
    }
    };
    heading_fetchData();
    fetchData();
    document.title =`Latest - ${props.category} Related News`;
  },[props.category]);
   
  return (
    <>
    <section className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
            <div className="fix-top">
           <h6><span>[</span> Latest NEWS <span>]</span></h6>
           <hr/>
          <marquee direction="up" scrollamount="3" loop="infinite" className="tops_heading">
            <p></p>
           {
            heading.map((item)=>{
              return(
                <>
               <a href={item.url} target="_blank" rel="noreferrer">
                <img src={gif} alt="gif" width="30px" height="30px" />
                <span>{item.title}</span></a>
                <span style={{color:"#757575", fontSize:"12px"}}>Published on : {item.publishedAt}</span>
                </>
              )
            })
           }

           </marquee>
           {/* small-screen show only */}
           <marquee direction="left" scrollamount="3" loop="infinite" className="tops_heading">
            <p></p>
           {
            heading.map((item)=>{
              return(
                <>
               <a href={item.url} target="_blank" rel="noreferrer">
                <img src={gif} alt="gif" width="30px" height="30px" />
                <span>{item.title}</span></a>
                </>
              )
            })
           }

           </marquee>
          </div>
          </div>
          
          <div className=" col-xl-9 col-lg-8 col-md-12 col-sm-12">
          <div className="row">
            {
              articles.map((item) => {
                return (
                  <NewsItem alt={item.author}
                   src={item.urlToImage}
                    url={item.url}
                     desc={item.description}
                      title={item.title}/>
                )
              })
            }
          </div>
          </div>
        </div>
        
        </section>
    </>
  );
}
export default NewsApi;
