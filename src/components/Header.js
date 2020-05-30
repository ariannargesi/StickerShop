import React from 'react'
import logo from '../assets/logo.png'
import Dropdown from './Dropdown'

export default () => (
   <div className="header-wrapper">
       <header>
           <img src= {logo}/>
           <a href="#">Blog</a>
           <Dropdown title="Stickers" href="#" moode="hover">

           </Dropdown>
       </header>
   </div>
)