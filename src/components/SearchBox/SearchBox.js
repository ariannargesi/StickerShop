import React,{useState,useRef} from 'react'
import './SearchBox.css'

const SearchBox = () => {
    const [isOpen, setOpen] = useState(false)
    const [input, setInput] = useState("")
    const ref = useRef(null)
    function handelOpen(){
        if(isOpen == false )
            setOpen(true)
    }

    function handelClose(){
        setOpen(false)
    }
    function handelInputChange(event){
        setInput(event.target.value)
     }
    return (
        <div className="search-wrapper" onClick={handelOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="feather feather-search">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            {
                isOpen ?
                <div className="search-open">
                    <div onClick={handelClose} className="close-search-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    <form action="">
                        <input value={input} onChange={handelInputChange} type="text" placeholder="Name or Category" className="input-search-box"/>
                        <button disabled={input.length == 0 ? true : false}  type="submit" className="search-search-box" className="submit-search-box" >search</button>

                    </form>
                </div>
                :
                <></>
            }
        </div>
    )
}


export default SearchBox

