import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import {showToast} from '../../redux/actions'
import './Toast.scss'
const Index = (props) => {
    const toastTxt = props.toast
    let className = "toast"
    if(toastTxt) className += " toast-open"
    useEffect(() => {
        if (toastTxt){
            className = "toast"
            setTimeout(() => {
                props.showToast("")
            }, 1000)
    }
    })


    return (
        <div className={"toast-container"}>
           <div className={className}> {toastTxt}</div>
        </div>
    )
}

const mapStateToProps = ({ toast }) => {
    return {
        toast
    }
}

export default connect(mapStateToProps,{showToast})(Index)