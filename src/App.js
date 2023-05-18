import React from 'react';
import { Link, Element, Button } from 'react-scroll';
import Header from './header/header';
import Home from './home/home';
import Footer from './footer/footer';
import About from './about us/about';
import Donate from './donate/donate';
import Team from './Our team/team';
// import Top from './top/GoToTop';
import Gallery from './gallery/gallery';
import './App.css';

function App() {
  return (
    <>
    <div>
      
    <Header/>

      <Element name="component1" className="element">
      <Home/>
      </Element>
      <Element name="component2" className="element">
      <About/>
      </Element>
      <Element name="component3" className="element">
      <Donate/>
      </Element>
      <Element name="component4" className="element">
      <Team/>
      <Gallery/>
      </Element>
      <Element name="component5" className="element">
      <Footer/>

      </Element>
    
    </div>
   
   
    

    </>
  );
}

export default App;
