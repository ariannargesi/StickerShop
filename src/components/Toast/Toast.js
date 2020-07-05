import React, {useEffect} from 'react' 
import { connect } from 'react-redux'
import {showToast} from '../../redux/actions'
import './Toast.scss'
const Toast = (props) => {   
    const toastTxt = props.toast 
    useEffect(() => {
        if(toastTxt)
        setTimeout(() => {
                props.showToast("")
        }, 3000)
    })

    return (
        <div className={"toast-container"}>
            
        </div>
    )
}

const mapStateToProps = ({ toast }) => {
    return {
        toast
    }
}

export default connect(mapStateToProps,{showToast})(Toast) 