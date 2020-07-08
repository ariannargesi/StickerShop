import Input from "../../components/Input/Input";
import Modal from "../../components/Modal/Modal";
import React from "react";
import validator from "validator";

const Login = () => {
    return (
        <Modal title={"Log in "}>
            <form action="">
                <Input type="email" placeholder="email" message={hints.email} />
                <Input type="password" placeholder="password" message={hints.password}/>
                <button type="submit"> log in</button>
            </form>
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