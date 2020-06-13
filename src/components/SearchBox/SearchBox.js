import React,{useState} from 'react'
import './SearchBox.css'

const SearchBox = () => {
    const [ui,setUi] = useState({
        open: false
    })
    const [data, setData] = useState([])

    function handelClose(){
        if(!ui.open){
            setUi({
                open: true
            })
        }
    }
    function handelOpen(){
        setUi({
            open: false
        })
    }
    console.log(ui.open)
    return (
        <div className="search-wrapper" onClick={handelOpen}>
            search
            {
                ui.open ?
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
                        <input type="text" placeholder="Name or Category"/>
                        <button type="submit" className="search-search-box">search</button>
                    </form>

                </div>
                :
                <></>
            }
        </div>
    )
}


export default SearchBox

