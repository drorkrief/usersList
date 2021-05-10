import { FaGithub, FaLinkedin, FaDesktop, FaStoreAlt } from "react-icons/fa";
import React  from 'react';


const About = () => (
  <div style={{backgroundColor :"lightgray",boxShadow:"0 0 20px 0" }}>
    <section style={{textAlign:"center",fontSize:"2rem", paddingTop:"20px"}}>
      <h1 style={{textShadow:"0 1px 4px black " ,fontWeight:"400", letterSpacing:"3px"}}>
        thank you for visiting my project
      </h1>
      <p>In this project i show how you can use api service to get data and display it in convenience tables</p>
      <p>I used the following technologies to create this project:</p>
      <div style={{width:"30%", margin:"auto", paddingBottom:"100px"}}>
      <ul 
       style={{textAlign:"left"}}
      >
        <li>javaScript</li>
        <li>reactJS</li>
        <li>nodeJS/npm packages</li>
        <li>rest API</li>
      </ul>
   
      </div>
    <h2>
      Links
    </h2>
    <ul 
       style={{textAlign:"center" ,listStyleType:"none"}}
      >
        <li><a rel="noopener noreferrer" target="_blank" href="https://merkazakdusha.com">Online Store <FaStoreAlt/></a></li>
        <li><a rel="noopener noreferrer" target="_blank" href="https://drorkrief.tk">My Website <FaDesktop/></a></li>
        <li><a rel="noopener noreferrer" target="_blank" href="https://il.linkedin.com/in/dror-krief-377932197">Linkedin <FaLinkedin/></a></li>
        <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/drorkrief">Github <FaGithub/></a></li>
      
       
      </ul>
    </section>
  </div>
);
export default About;
