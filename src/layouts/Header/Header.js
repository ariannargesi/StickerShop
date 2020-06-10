import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import Menu from '../../components/Menu/Menu'
import MenuItem from '../../components/MenuItem/MenuItem'

export default () => (
   <div className="header-wrapper">
       <header>
           <img src={logo}/>
           <a href="#">Blog</a>
           <Menu title="Stickers" href="#">
                <MenuItem title="Movie and Series" href="#" mode="bold">
                    <a href="#">the walking dead</a>
                    <a href="#">the big bang theory</a>
                    <a href="#">game of thrones</a>
                    <a href="#">breaking bad</a>
                    <a href="#">the vikings</a><a href="#">breaking bad</a>
                    <a href="#">the vikings</a><a href="#">breaking bad</a>
                    <a href="#">the vikings</a>
                    <a href="#">narcos</a>
                </MenuItem>
                <MenuItem title="Movie and Series" href="#">
                    <a href="#">the walking dead</a>
                    <a href="#">the big bang theory</a>
                    <a href="#">game of thrones</a>
                    <a href="#">breaking bad</a>
                    <a href="#">the vikings</a>
                    <a href="#">narcos</a>
                </MenuItem>
                <MenuItem title="Movie and Series" href="#">
                    <a href="#">the walking dead</a>
                    <a href="#">the big bang theory</a>
                    <a href="#">game of thrones</a>
                    <a href="#">breaking bad</a>
                    <a href="#">the vikings</a>
                    <a href="#">narcos</a>
                </MenuItem>
                <MenuItem title="Movie and Series" href="#">
                    <a href="#">the walking dead</a>
                    <a href="#">the big bang theory</a>
                    <a href="#">game of thrones</a>
                    <a href="#">breaking bad</a>
                    <a href="#">the vikings</a>
                    <a href="#">narcos</a>
                </MenuItem>
            </Menu>
       </header>
   </div>
)