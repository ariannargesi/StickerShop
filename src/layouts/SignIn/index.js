import Input from "../../components/Input/Input";
import Modal from "../../components/Modal/Modal";
import Login from '../Login'
import React from "react";
import validator from "validator";
import Button from "../../components/Button";

const styles = {
    width: "400px",
    border: "1px solid #d4d4d4",
    padding: "1rem",
    borderRadius: "10px",
    background: "white",
    boxShadow: "0px 0px 5px 5px #eee"
}
const loginStyles = {
    display: "flex",
}
const SignIn = () => {
    return (
        <Modal title={"Sign up"}>
            <div style={styles}>
                <h2>Create a new account</h2>
                <form action="" className="log-sign-form">
                    <Input type="text" placeholder="Username" message={hints.username} />
                    <Input type="email" placeholder={"Email"} message={hints.email} />
                    <Input type="password" placeholder= "Password" message={hints.password}/>
                    <Button  size="medium" type={"success"}>Sign up</Button>
                    <div style={loginStyles}>
                        <span style={{color: "gray"}}> Already Have an account ? </span>
                        <div>
                            <Login/>
                        </div>
                    </div>
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

export default SignIn