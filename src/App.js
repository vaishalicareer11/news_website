import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import NewsHeader from './news/newsHeader';
import Crime from './component/Crime';
import Technology from './component/Technology';
import NewsFooter from './news/newsFooter';
 
function App() {
  
  return (
  <>
  <BrowserRouter>
  <NewsHeader/>
   <Routes>
   <Route path="/"  element={<Technology category="technology"/>}/>
   <Route path="/crime"  element={<Crime category="crime"/>}/>
   <Route path="/sports"  element={<Crime category="sport"/>}/>
   <Route path="/bollywood"  element={<Crime category="bollywood"/>}/>
   <Route path="/education"  element={<Crime category="education"/>}/>
   </Routes>
   <NewsFooter/>
  </BrowserRouter>
  </>
  );
}

export default App;
