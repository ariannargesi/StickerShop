import React, {useState, useEffect} from 'react'
import './Dropdown.css'
const Dropdown = (props) => {
        let [ state, setState ] = useState({
            open: true,
            current: "",
            items: []
        })
    useEffect(()=>{
        const { current, items } = props
        setState({
            current,
            items
        })
    },[])
     function clickHanlder(){
        setState({
            open: !state.open
        })
    }
     return (
            <div onClick={clickHanlder} className="dropdown-wrapper">
                {/*<span style={{display:"inline-block",margin:"13px"}}>{props.title}</span><br/>*/}
                {/*<span className="current-item">*/}
                {/*    {state.current}*/}
                {/*</span>*/}
                {/*{ state.open ? false :*/}
                {/*    <ul className="dropdown">*/}
                {/*        {state.items.map((item,index) => {*/}
                {/*            return <li key={index} onClick={()=>{*/}
                {/*                setState({*/}
                {/*                    current: item*/}
                {/*                })*/}
                {/*            }}>{item}</li>*/}
                {/*        })}*/}
                {/*    </ul>*/}
                {/*}*/}
            </div>
        )
    }
export default Dropdown