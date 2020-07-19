import Input from "../../components/Input/Input"
import Modal from "../../components/Modal/Modal"
import Button from "../../components/Button"
import SignIn from "../SignIn";
import React from "react";
import validator from "validator";

const styles = {
    width: "400px",
    border: "1px solid #d4d4d4",
    padding: "1rem",
    borderRadius: "10px",
    background: "white",
    boxShadow: "0px 0px 5px 5px #eee"
}

const Login = () => {
    return (
        <Modal title={"Log in "}>
            <div style={styles}>
                <h2>Login into your account</h2>
                <form action="" >
                    <Input type="email" placeholder="Email" message={hints.email} />
                    <Input type="password" placeholder="Password" message={hints.password}/>
                    <Button  size="medium" type={"success"}>Login</Button>
                </form>
                <div style={{display: "flex"}}>
                    <span style={{color: "gray"}}>Are You a new user? </span>
                    <SignIn/>
                </div>
            </div>
        </Modal>
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
            return "password must be 6 words"

    }
}

export default Login