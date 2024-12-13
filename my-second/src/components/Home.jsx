import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
   <>
    <div className='home' id='home'>
      <main>
        <h1>Bihar Supply Agency</h1>
        <p>Solution to All you problems</p>
      </main>
    </div>


    <div className='home2'>
      <img src={vg} alt='Graphics'/>
      <div>
        <p>
          We are your one and only solution to the 
          hardare problems you face everyday. We are leading hardware prodcut dealer which provide every range of products 
          and best market price.
        </p>
      </div>
    </div>

    <div className='home3' id="about">
      <div>
        <h1>Who We Are?</h1>
        <p>Conceptualized HP, through its predecessor in interest (Landmark Engineers) in the year 1995. In the year 1999 our customers started associating our products with brand HP. Landmark Crafts Limited, an ISO 9001:2015 accredited company is located at Anand Industrial Estate, Mohan Nagar, Ghaziabad, Uttar Pradesh (India) With registered office at 403 & 404, V4 Tower Plot No.14, Community Centre, Karkardooma, New Delhi-110092.</p>
      </div>
    </div>


    <div className='home4' id="brands">
      <div>
        <h1>Brands</h1>

        <article>
          <div style={{
            animationDelay:"0.3s",
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div style={{
            animationDelay:"0.5s",
          }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div style={{
            animationDelay:"0.7s",
          }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>

          <div style={{
            animationDelay:"0.3s",
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
   </>

  )
}

export default Home