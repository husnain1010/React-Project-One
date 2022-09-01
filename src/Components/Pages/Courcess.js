import React from 'react'
import Header from "../Common/Header";
import Companies from "../Home/Companies";
import Explore from "../Home/Explore";
import Feedback from "../Home/Feedback";
import Footer from "../Home/Footer";
import HeroSection from "../Home/HeroSection";
import PopularCourses from "../Home/PopularCourses";
import Question from "../Home/Question";
import Register from "../Home/Register";
import Students from "../Home/Students";

const Courcess = () => {
  return (
    <div>
        <Header />
        <Students />
        <Register />
        <Explore />
        <Companies />
      <HeroSection />
     
      <PopularCourses name="husnain"/>
      
      
      
      <Feedback />
      <Question />
      x
      <Footer />
    </div>
  )
}

export default Courcess