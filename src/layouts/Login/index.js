import Input from "../../components/Input/Input"
import Modal from "../../components/Modal/Modal"
import Button from "../../components/Button"
import React from "react";
import validator from "validator";

const Login = () => {
    return (
        <Modal title={"Log in "}>
            <div style={{width: "500px"}}>
                <h2>Login into your account</h2>
                <form action="" >
                    <Input type="email" placeholder="email" message={hints.email} />
                    <Input type="password" placeholder="password" message={hints.password}/>
                    <Button  size="medium" type={"success"}>Login</Button>
                </form>
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