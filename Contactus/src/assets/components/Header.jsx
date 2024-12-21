import { nav } from "framer-motion/client";
import React from 'react'
const Header = () => {
  return (
    <nav>
        <div className="logo">
            <img src="public\images\logo (2).png" alt="logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Header