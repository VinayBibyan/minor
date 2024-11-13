import React from 'react'
import Plant from "../../Images/Plant.svg";
import Plant2 from "../../Images/Plant2.svg";
import '../Landing/Landing.css'
import Footer from "../../Footer/Footer.jsx"
import Header from '../Header/Header.jsx';

function About({backgroundC}) {
  return (
    <>
    <Header/>
    <div className="about" style={{backgroundColor: backgroundC}}>
        <h4>About Us</h4>
        <hr className="underLine"/>
        <div className="content">
          <div className="left-svg">
            <img src={Plant2} className="w-[22rem]" alt="" />
          </div>
          <p>
            At Adapt Learn, we believe that every child, regardless of their abilities, deserves access to quality education tailored to their unique needs. Our platform is dedicated to creating inclusive learning experiences, specially crafted for children with dyslexia, deafness, blindness, and other learning challenges.
            <h1 className=" bg-blue-700 w-fit py-1 px-3 rounded-sm my-2">Our Story</h1>
            Adapt Learn was inspired by the vision of a world where all children can learn and grow without barriers. Recognizing the gaps in educational resources for specially-abled kids, we set out to design a platform that caters to their learning requirements with compassion and expertise.
            <h1 className=" bg-blue-700 w-fit py-1 px-3 rounded-sm my-2">Our Mission</h1>
            Our mission is to empower specially-abled children by providing courses that are accessible, engaging, and effective. By combining adaptive technology with innovative teaching approaches, we aim to help children overcome their learning challenges, discover new interests, and build confidence in their abilities. Through Adapt Learn, we strive to make education inclusive, equitable, and enjoyable for every learner.
          </p>
          <div className="right-svg">
            <img src={Plant} className="w-[30rem]" alt="" />
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About