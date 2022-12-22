import React from 'react';

export default function NewsItem(props) {
  return (
    <>
      {/* <div className="col-lg-6 col-md-6">
        <div className="card my-2">
          <img src={props.src} className="card-img-top news-card" alt={props.alt} />
          <div className="card-body" style={{ height: "250px" }}>
            <h5 className="card-title">{props.title.length > 70 ? (props.title.slice(0, 60)) : (props.title)}...</h5>
            <p className="card-text">{props.desc.length > 200 ? (props.desc.slice(0, 200)) : (props.desc)}...</p>
            {/* <div className="card-text">{props.desc}</div> */}
            {/* <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div> */}
      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="card my-2">
          <div className="card-body">
            <div className="card-title">{props.title.length > 80 ? (props.title.slice(0, 80)) : (props.title)}...</div>
            <div className="card-text d-flex justify-content-between">
              <div className='text'>{props.desc.length > 150 ? (props.desc.slice(0,150)) : (props.desc)}...</div>
              <div className='img'><img src={props.src} className="card-img-top news-card" alt={props.alt}/></div>
            </div>
            <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-outline-dark">Know More</a>
          </div>
        </div>
      </div>
    </>
  )
}
