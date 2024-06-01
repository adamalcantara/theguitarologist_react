import React from 'react';
import "./About.css";

import Adam from "../../img/adam_square.jpg"

function About() {
  return (
    <div>
      {/* About paragraph */}
      <p id="about"><img src={Adam} id="adamHeadshot" alt="Adam's headshot"></img>Welcome to my website! My name is Adam, and I&#39;m a photographer and lutherie hobbyist. I&#39;ve been fascinated by guitars ever since I saw John Lennon playing his iconic Rickenbacker 325 in The Beatles Anthology. I started tinkering with guitars in middle school, which led to learning to build them through the books of Melvyn Hiscock, Martin Koch, and Dan Erlewine, as well as first-hand knowledge from my friends Mark Benson and Larry Davis.

      <div className='spacer'></div>

       I picked up my first DSLR in high school and have been a professional photographer for over ten years. Throughout that journey, I have always found guitars to be a fascinating subject to have in front of my camera. Guitars have the potential to be a life-long companion on a musical journey. The way they are played over a number of years, cherished by their owners, and passed from generation to generation gives each a unique personality which is so much fun to capture.

      <div className='spacer'></div>

      If you enjoy my photos and would like to keep up with my latest work, please feel free to check out my Instagram or Facebook pages!

      <div className='spacer'></div>

      For booking information, please don&#39;t hesitate to contact me!</p>

      {/* Social media */}
      <h1>Visit Me On Social Media</h1>
      <div id="socialGrid">
        <div id='instagram' className='links'>
          <a href='https://www.instagram.com/theguitarologist/' target='_blank' rel='noopener noreferrer'>
            <div className='overlay'>Instagram</div>
          </a>
        </div>
        <div id='facebook' className='links'>
          <a href='https://www.facebook.com/theguitarologist' target='_blank' rel='noopener noreferrer'>
            <div className='overlay'>Facebook</div>
          </a>
        </div>
      </div>

      {/* Testimonials grid */}
      <h1>Testimonials</h1>
      <div id='testimonialsGrid'>
        <div className='testimonial'>
          <h2>Larry Davis</h2>
          <p className='testimonialText'>"His attention to detail and ability to look for creative ways to highlight the guitars’ features have consistently received positive reactions in my marketing efforts."</p>
        </div>
        <div className='testimonial'>
          <h2>Larry Davis</h2>
          <p className='testimonialText'>"His attention to detail and ability to look for creative ways to highlight the guitars’ features have consistently received positive reactions in my marketing efforts."</p>
        </div>
        <div className='testimonial'>
          <h2>Larry Davis</h2>
          <p className='testimonialText'>"His attention to detail and ability to look for creative ways to highlight the guitars’ features have consistently received positive reactions in my marketing efforts."</p>
        </div>
      </div>
    </div>
  )
}

export default About