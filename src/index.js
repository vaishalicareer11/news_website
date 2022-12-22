import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import InputClassExample from './practice/InputClassExample';
// import InputFunctionExample from './practice/InputFunctionExample';
// import FormExample from './practice/formExample';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
   <App/>
   {/* <InputClassExample/>
   <InputFunctionExample/>
   <FormExample/> */}
   {/* <NewWebsite/> */}
  </React.StrictMode>
  </>
);

reportWebVitals();
