import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Menu from '../../components/Menu/Menu'
import MenuItem from '../../components/MenuItem/MenuItem'
import Toast from '../../components/Toast'
import Search from '../../components/SearchBox'
import UserCardPanel from '../../layouts/UserCardPanel/UserCardPanel'
import SignIn from '../../layouts/SignIn'
import Login from '../../layouts/Login'
export default () => {
return (
   <div className="header-wrapper">
       <header>
           <div>
               <img className="logo" src={logo}/>
               <Menu title="Stickers" href="#">
                   <MenuItem title="For Geeks" href="/Geeks" mode="bold">
                       <NavLink to="/Developers">For Developers</NavLink>
                       <NavLink to="/Developers">For Developers</NavLink>
                   </MenuItem>
               </Menu>
           </div>
           <div style={{ flexDirection: "row-reverse"}}>
               <Login/>
               |
               <SignIn/>
               <UserCardPanel />
               <Search/>
           </div>
       </header>
       <Toast/>
   </div>
)
}


