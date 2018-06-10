import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './sass/style.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';


const App = () => {
  return(
    <BrowserRouter>
    <React.Fragment>
      <Header name="Neha Sharma" title="neha"/>
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
    </BrowserRouter>
  )
}
export default App;
