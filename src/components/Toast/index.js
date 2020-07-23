import React, { useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {showToast} from '../../redux/actions'
import './Toast.scss'
const Index = (props) => {
   const [className, setClassName] = useState("toast")
   let toastTxt = props.toast

    useEffect(() => {
        if(toastTxt) {
            setClassName("toast toast-open")
            setTimeout(() => {
                setClassName("toast")
                setTimeout(() => {
                    props.showToast("")
                },500)
            }, 1000)
        }
    }, [toastTxt])
    return (
        <div className={"toast-container"}>
            {  toastTxt &&  <div className={className}> {toastTxt}</div> }
        </div>
    )
}



const mapStateToProps = ({ toast }) => {
    return {
        toast
    }
}

export default connect(mapStateToProps,{showToast})(Index)