import React from "react";
import Navbar from './navbar';
import Img from './img';
import Discription from "./disccription";
import Contact from './contact'
import Footer from './footer';
import Cards from './card'


export default function Dashboard(){
        return (
          <div>
              <Navbar />
              <Img />
              <Discription />
              <Contact />
              <Footer />
              
          </div>
        );
      }
    
