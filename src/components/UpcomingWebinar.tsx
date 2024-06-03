'use client'
import React from 'react'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";
import { title } from 'process';

function UpcomingWebinar() {
    const upcoming = [
        {

            "id": 1 ,

          "title": "Maximizing Productivity with Agile Methodologies",
          "description": "Learn how to implement agile practices to enhance team productivity and streamline project management. Ideal for project managers and team leaders.",
          "link": "https://example.com/webinar/agile-productivity"
        },
        {
            "id":2,
          "title": "Leveraging Data Analytics for Business Growth",
          "description": "Discover the power of data analytics in driving business decisions and growth. Perfect for business analysts and data enthusiasts.",
          "link": "https://example.com/webinar/data-analytics-growth"
        },
        {
            "id":3,
          "title": "Effective Remote Team Collaboration Strategies",
          "description": "Explore strategies to foster collaboration and communication in remote teams, ensuring productivity and team cohesion.",
          "link": "https://example.com/webinar/remote-team-collaboration"
        },
        {
            "id": 4,
          "title": "The Future of AI in Marketing",
          "description": "Join us to discuss how artificial intelligence is transforming marketing strategies and what the future holds. Ideal for marketing professionals.",
          "link": "https://example.com/webinar/ai-marketing-future"
        },
        {
            "id":5,
          "title": "Cybersecurity Best Practices for Businesses",
          "description": "Understand the latest cybersecurity threats and learn best practices to protect your business from cyber attacks.",
          "link": "https://example.com/webinar/cybersecurity-best-practices"
        },
        {
            "id":6,
          "title": "Innovative Approaches to Customer Experience",
          "description": "Learn about cutting-edge techniques to enhance customer experience and boost customer satisfaction and loyalty.",
          "link": "https://example.com/webinar/customer-experience-innovation"
        }
      ]
      
  return (
    <div className=' mt-4 py-12 bg-gray-900' >
    <div>
        <div className='text-center'>
<h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>UPCOMING WEBINARS</h2>
<p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Journey</p>
        </div>

    </div>
    <div className='m-4'>
        <HoverEffect items={upcoming}/>

    </div>
    <div className='mt-15 text-center'
    > 
    <Link href={"/courses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white
    hover:bg-gray-100 transition duration-200 '>
        View All Courses
        
    </Link>
    </div>

</div>
  )
}

export default UpcomingWebinar