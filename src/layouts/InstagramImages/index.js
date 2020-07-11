import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './InstagramImages.scss'

const InstagramImages = () => {

    const [list, setList] = useState(null)
    useEffect(() => {
       axios({
           url: "https://www.instagram.com/ariannargesi/?__a=1",
           method: "get",
           headers: {'Content-Type': 'application/json'}
       }).then( result => {
           console.log(result)
       } ).catch(err => console.log(err))
    }, [list])

    return (
        <div></div>
    )
}

export default InstagramImages


