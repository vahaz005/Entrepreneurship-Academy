"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


function Whychooseus() {
    const myschool = [
        
            {
              "title": "Experienced Instructors",
              "description": "Our courses are taught by industry experts with years of experience in their respective fields. They bring real-world knowledge and practical insights to the classroom. Benefit from their extensive industry networks. Learn from their successes and challenges. Be inspired by their passion and dedication."
            },
            {
              "title": "Comprehensive Curriculum",
              "description": "Our curriculum covers all the essential topics and skills you need to succeed. Each course is designed to be thorough and up-to-date with the latest industry trends. Engage with in-depth modules and practical exercises. Ensure you have a well-rounded understanding. Prepare yourself for real-world applications."
            },
            {
              "title": "Flexible Learning",
              "description": "Learn at your own pace with our flexible online courses. Access course materials anytime, anywhere, on any device. Fit your studies around your busy schedule. No need to sacrifice work or family time. Enjoy the convenience of self-paced learning."
            },
            {
              "title": "Hands-on Projects",
              "description": "Gain practical experience with hands-on projects and real-world scenarios. Apply what you've learned in a safe and supportive environment. Build a portfolio of work to showcase your skills. Collaborate with peers on challenging assignments. Prepare yourself for the demands of your chosen field."
            },
            {
              "title": "Community Support",
              "description": "Join a community of like-minded learners and professionals. Get support from peers and mentors throughout your learning journey. Share insights and collaborate on projects. Network with industry professionals. Be part of a supportive and engaging community."
            }
          ]
          

    
  return (
    <div>
        <StickyScroll content={myschool}/>
    </div>
  )
}

export default Whychooseus