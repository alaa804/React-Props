import React from "react";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import ProjectsList from "./components/ProjectList"
import Contact from "./components/Contact";
import Footer from "./components/Footer";



import imgSrc from "./images/alaa.jpg";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import project4 from "./images/project4.png";

import "./App.css";


const navLinks = [
  {
    link: "About",
    href: "#about-me",
  },
  {
    link: "Project",
    href: "#projects",
  },
  {
    link: "Contact",
    href: "#contact",
  },
];

const projects = [
  {
    projectName: "learning html",
    imgSrc: project1,
  },

  {
    projectName: "learning CSS",
    imgSrc: project2,
  },
  {
    projectName: "learning JavaScript",
    imgSrc: project3,
  },
  {
    projectName: "learning React Js",
    imgSrc: project4,
  },
];

const footerCopyRights = {
  name: "Alaa Taguiaa",
  year: 2020,
};


function App() {
    return <React.Fragment>
           <NavBar navLinks={navLinks} name="Alaa Taguiaa" />
           <Introduction imgSrc={imgSrc} name="Alaa Taguiaa" text="GoMyCode.Tn" />
           <ProjectsList listOfProjects={projects} />
          <Contact />
          <Footer copyrights={footerCopyRights} />
    </React.Fragment>

}

export default App;
