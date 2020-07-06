import React, {useEffect} from 'react' 
import { connect } from 'react-redux'
import {showToast} from '../../redux/actions'
import { useTransition, animated } from 'react-spring'
import './Toast.scss'
const Toast = (props) => {   
    const toastTxt = props.toast 
    
    useEffect(() => {
        if(toastTxt)
        setTimeout(() => {
                props.showToast("")
        }, 1000)
    })

    const transitions = useTransition(toastTxt ? true : false, null, {
        from: {  opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const getTransitions = transitions.map(({ item, key, props }) =>
             item && <animated.div key={key} style={props}><div className="toast">  {toastTxt} </div>  </animated.div>
    )
    
    return (
        <div className={"toast-container"}>
           {getTransitions}
        </div>
    )
}

const mapStateToProps = ({ toast }) => {
    return {
        toast
    }
}

export default connect(mapStateToProps,{showToast})(Toast) 