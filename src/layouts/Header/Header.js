import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import Menu from '../../components/Menu/Menu'
import MenuItem from '../../components/MenuItem/MenuItem'
import Search from '../../components/SearchBox/SearchBox'
export default () => (
   <div className="header-wrapper">
       <header>
           <img src={logo}/>
           <a href="#">Blog</a>
           <Menu title="Stickers" href="#">
                <MenuItem title="For Geeks" href="/Geeks" mode="bold">

                </MenuItem>
            </Menu>
           <Search/>
       </header>
   </div>
)