import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.png'
import Menu from '../../components/Menu/Menu'
import MenuItem from '../../components/MenuItem/MenuItem'
import Search from '../../components/SearchBox/SearchBox'
import Modal from '../../components/Modal/Modal'
import Input from "../../components/Input/Input";
import validator from "validator";
export default () => {
    const getEmailHint = (text) => {
        if(text == "")
            return "enter email"
        return validator.isEmail(text) ? "" : "Enter a valid email"
    }
    const getPasswordHint = (text) => {
        if(text == "")
            return "enter password"
        return text.length < 6 ? "most be atlist 6 word" : ""
    }

return (
   <div className="header-wrapper">
       <header>
           <img className="logo" src={logo}/>
           <a href="#">Blog</a>
           <Menu title="Stickers" href="#">
                <MenuItem title="For Geeks" href="/Geeks" mode="bold">
                    <NavLink to="/Developers">For Developers</NavLink>
                    <NavLink to="/Developers">For Developers</NavLink>
                </MenuItem>
            </Menu>
           <Search/>
           <Modal title={"sign in"}>
               <form action="" className="log-sign-form">
                    <Input type="text" placeholder="username" message={hints.username} />
                    <Input type="email" placeholder={"Email Address"} message={hints.email} />
                    <Input type="password" placeholder= "password" message={hints.password}/>
                    <button type="submit">Sign in</button>
                    <Modal title={"Log in "}>
                        <form action="">
                            <Input type="email" placeholder="email" message={hints.email} />
                            <Input type="password" placeholder="password" message={hints.password}/>
                            <button type="submit"> log in</button>
                        </form>
                    </Modal>
               </form>
           </Modal>
       </header>
   </div>
)
}

const hints = {
    username: (value) => {
        if (value === "")
            return "Enter First name"
    },
    email: (value) => {
        if(value === "")
            return "Enter Email Address"
        else if(!validator.isEmail(value))
            return "Enter valid Email"
    },
    password: (value) => {
        if(value === "")
            return "Enter Password"
        else if(value.length < 6 )
            return "password must be atlist 6 words"

    }
}



