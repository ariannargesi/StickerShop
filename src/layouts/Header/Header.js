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
               <a href="/">
                   <img className="logo" src={logo}/>
               </a>
               <Menu title="Stickers" href="#">
                   <MenuItem title="For Geeks" href="/Geeks" mode="bold">
                       <NavLink to="/Developers">For developers</NavLink>
                       <NavLink to="/Websites">Websites icons</NavLink>
                       <NavLink to="/Games">For gamers</NavLink>
                       <NavLink to="/Designers">For Designers</NavLink>
                   </MenuItem>
               </Menu>
           </div>
           <div style={{ flexDirection: "row-reverse"}}>
               <div className="user-account-modals" style={{display: "flex", flexDirection: "row"}}>
                   <Login/>
                   |
                   <SignIn/>
               </div>
               <UserCardPanel />
               <Search/>
           </div>
       </header>
       <Toast/>
   </div>
)
}




const Username = (props) => {
    if(props.username)
        return <h1>Welcome back {props.username}</h1>
    else 
        return <h1>You need to login first</h1>
}