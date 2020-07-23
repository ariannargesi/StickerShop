import React,{useState,useEffect, useRef} from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import searchSvg from '../../assets/icons/search.svg'
import closeSvg from '../../assets/icons/close.svg'
import axios from 'axios'
import './SearchBox.sass'
import Loading from "../Loading/Loading";
import SearchResultItem from "../SearchResultItem/SearchResultItem";

const SearchBox = () => {
    const [isOpen, setOpen] = useState(false)
    const [input, setInput] = useState("")
    const [data, setData] = useState(null)
    const [anim, setAnim] = useState("search")

    const ref = useRef(null)

    const clickOutsideHandler = () => {
        if(isOpen) {
            setOpen(false)
            setInput("")
        }
     
    }
    useClickOutside(ref, clickOutsideHandler)
    useEffect(() => {
        axios.get("https://flerbo.herokuapp.com/api/s/search/?term="+input)
            .then((data) => {
                if(data.status === 200) {
                    setData(data.data.data)
                }
            })
            .catch(err => {

            })
    },[input])

    function handelOpen(){
        if(isOpen == false ){
            setOpen(true)
            setTimeout(() => {
                setAnim("search search-open");
            }, 10);
        }
    }
    function handelClose(){
        setAnim("search")
        setTimeout(() => {
            setOpen(false)
            setInput("")
        },300)
    }
    function handelInputChange(event){
        setData(null)
        setInput(event.target.value)

     }

    return (
        <div className="search-wrapper" onClick={handelOpen}>
            <span className="material-icons">search</span>
            {
                isOpen &&
                <div className={anim} ref={ref}>
                    <div onClick={handelClose} className="close-search-box">
                        <img src={closeSvg} width="24px" height="24px" />
                    </div>
                    <form action="">
                        <input value={input} onChange={handelInputChange} type="text" placeholder="Name or Category" className="input-search-box"/>
                        <button disabled={input.length == 0 ? true : false}  type="submit"  className="submit-search-box" >search</button>
                    </form>

                    {
                        input  && data == null &&
                            <Loading/>
                    }
                </div>
                
            }
            {
                input &&
                    <ul className="search-result">
                        {
                            data === null ?
                                <Loading/> :
                                <ul>
                                    {
                                        data.length == 0 ? "nothing found" :
                                            data.map((item,index) => <SearchResultItem title={item.title} key={index} img={item.images[0]}/>)
                                    }
                                </ul>


                        }
                    </ul>
            }
        </div>
    )
}


export default SearchBox

