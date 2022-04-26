import React from 'react'
import Header from "../layouts/Header/Header"
import Footer from "../layouts/Footer/Footer"
const About = () => {
    const styles = {
        minHeight: "500px",
        boxShadow: "0 3px 6px rgba(229, 170, 97, 0.15), 0 1px 3px rgba(0, 0, 0, 0.11)",
        margin: "0 auto",
        borderRadius: "5px",
        padding: "1rem",
        border: "1px solid #eee",

    }
    const about = (
        <div className="about" style={styles}>
            Some Data
        </div>
    )
    return (
        <div>
            <Header/>
            { about }
            <Footer/>
        </div>
    )
}
export default About