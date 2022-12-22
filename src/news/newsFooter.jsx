import React from "react";
import { NavLink } from "react-router-dom";
const NewsFooter = ()=>{
    return(
     <footer className="footer">
      <div className="container">
      <div className="row">
        <h4>TOP CATEGORIES</h4>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-4 col-4">
            <ul>
                <li><NavLink to="/technology">Technology</NavLink ></li>
                <li><NavLink to="/crime">Crime</NavLink ></li>
            </ul>
        </div>
        <div className="col-md-4 col-sm-4 col-4">
            <ul>
                <li><NavLink to="/sport">Sports</NavLink ></li>
                <li><NavLink to="/education">Education</NavLink ></li>
            </ul>
        </div>
        <div className="col-md-4 col-sm-4 col-4">
            <ul>
                <li><NavLink to="/bollywood">Bollywood</NavLink ></li>
                <li><NavLink to="/technology">Home</NavLink ></li>
            </ul>
        </div>
      </div>
      </div>
     </footer>
    );
}

export default NewsFooter;