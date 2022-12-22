import { NavLink } from "react-router-dom";
import logo from "../assest/image/logo.png";
import header_logo from "../assest/image/header-logo.png";
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useState } from "react";
const NewsHeader =()=>{
   // sticky nav
   const [colorChange, setColorchange] = useState(false);
   const current = new Date();
   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   const month = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  const date = `${weekday[current.getDay()]},${month[current.getMonth()]} ${current.getDate()},${current.getFullYear()}`;

   const changeNavbarColor = () =>{
      if(window.scrollY >= 80){
        setColorchange(true);
      }
      else{
        setColorchange(false);
      }
   };
   window.addEventListener('scroll', changeNavbarColor);

    return(
    <>
    {/* header-part */}
    <header>
      <div className="container-fluid">
       <div className="row py-md-4 py-2 align-items-center">
        <div className="col-md-4 col-6 col-sm-4 order-sm-1 order-1">
          <div className="date"> {date}
          <p>EPAPER | TODAY’S PAPER</p>
          </div>
        </div>
        <div className="col-md-4 col-12 col-sm-4 order-sm-2 order-3">
          <div className="img">
            <img src={header_logo} alt="header-img" />
            <p className="journalism-sec">JOURNALISM OF COURAGE</p>
          </div>
        </div>
        <div className="col-md-4 col-6 col-sm-4 order-sm-3 order-2">
         <ul className="d-flex menu-icon">
          <li><a href="#">Newsletter <EmailIcon className="icon"/></a></li>
          <li><a href="#"><LinkedInIcon className="icon"/></a></li>
          <li><a href="#"><InstagramIcon className="icon"/></a></li>
         </ul>
       </div>
      </div>
      </div>
   {/* NAVBAR */}
   <nav className={colorChange ? "navbar navbar-expand-lg colorChange py-lg-1" : "navbar navbar-expand-lg mb-3"}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"> <img src={logo} alt="logo" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink className="nav-link " to="/">Technology</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/crime">Crime</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/sports">Sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/bollywood">BollyWood</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/education">Education</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
    </>
    );
}

export default NewsHeader;