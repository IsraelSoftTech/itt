import React, { useEffect, useState } from "react";



import Header from "./Components/header/header";
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About";



import Experience from "./Components/experience/experience";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/portfolio";

import Contact1 from "./Components/Contact1/Contact";
import Footer from "./Components/footer/footer";


import Testimonials from "./Components/testimonials/testimonials";
import Team from "./Components/team/team";

//Import React-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Create BrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Header />
        
        <About />
        
        <Team />
        <Services />
        <Portfolio />
       
        <Testimonials />
        <Contact1 />
        <Footer />
      </div>
    ),
  },
  {
    path: "/experience",
    element: (
      <div>
         <Nav />
        <Experience />
        <Footer />
      </div>
    )
  },
  {
    path: "/",
    element: (
      <div>
        <Header />
      </div>
    )
  },
  {
    path: "/about",
    element: (
      <div>
         <Nav />
        <About />
        <Footer />
      </div>
    )
  },
  {
    path: "/services",
    element: (
      <div>
         <Nav />
        <Services/>
        <Footer />
      </div>
    )
  },
  {
    path: "/team",
    element: (
      <div>
         <Nav />
        <Team/>
        <Footer />
      </div>
    )
  },
  {
    path: "/portfolio",
    element: (
      <div>
         <Nav />
        <Portfolio/>
        <Footer />
      </div>
    )
  },
  {
    path: "/testimonials",
    element: (
      <div>
         <Nav />
        <Testimonials/>
        <Footer />
      </div>
    )
  },
  {
    path: "/contact",
    element: (
      <div>
         <Nav />
        <Contact1 />
        <Footer />
      </div>
    )
  },

]);



const App = () => {
  return (
    <div className="App">
      
      <RouterProvider router={router} />
      
    </div>
  );
};

export default App;
