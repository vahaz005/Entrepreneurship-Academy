'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

function Scrolling() {
  const testimonial =   [
        {
          "quote": "This product has completely transformed my workflow. Highly recommend!",
          "name": "Alice Johnson",
          "title": "Product Manager"
        },
        {
          "quote": "Exceptional quality and outstanding customer service. Will definitely buy again.",
          "name": "Mark Peterson",
          "title": "Sales Director"
        },
        {
          "quote": "The best investment I've made in a long time. It exceeded all my expectations.",
          "name": "Sara Williams",
          "title": "Entrepreneur"
        },
        {
          "quote": "A game-changer in our industry. It's intuitive and easy to use.",
          "name": "David Lee",
          "title": "Software Engineer"
        },
        {
          "quote": "I was impressed with the results from day one. Truly a fantastic experience.",
          "name": "Emily Davis",
          "title": "Marketing Specialist"
        },
        {
          "quote": "Top-notch service and great attention to detail. Highly satisfied.",
          "name": "John Smith",
          "title": "Consultant"
        },
        {
          "quote": "This has significantly improved our team's productivity. We love it!",
          "name": "Jessica Brown",
          "title": "Project Coordinator"
        },
        {
          "quote": "Reliable, efficient, and worth every penny. A must-have for professionals.",
          "name": "Michael Thompson",
          "title": "Financial Analyst"
        },
        {
          "quote": "An innovative solution that has met all our needs. Highly recommended!",
          "name": "Laura Martinez",
          "title": "Creative Director"
        },
        {
          "quote": "Excellent performance and incredible support. I am very pleased with the results.",
          "name": "Robert Wilson",
          "title": "Operations Manager"
        }
      ]
      
  return (
    <div className='mt-4 h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center'>
        <h2 className='text-3xl font-bold text-center mb-8 z-10 text-white'>
        Hear Our Hrmony:Voices Of Success
    </h2>
    <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl'
        >
        <InfiniteMovingCards
        items={testimonial}
        direction = "right" 
        speed='slow'

        
        
        />
        </div>

    </div>
        </div>
  )
}

export default Scrolling