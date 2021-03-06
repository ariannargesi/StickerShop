import React,{useState,useEffect, useRef} from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import searchSvg from '../../assets/icons/search.svg'
import closeSvg from '../../assets/icons/close.svg'
import axios from 'axios'
import './SearchBox.scss'
import Loading from "../Loading/Loading";
import SearchResultItem from "../SearchResultItem/SearchResultItem";

import SearchIcon from '@material-ui/icons/Search';

const SearchBox = () => {
    const [isOpen, setOpen] = useState(false)
    const [input, setInput] = useState("")
    const [data, setData] = useState(null)
    const [anim, setAnim] = useState("search")
    const styles = {
        searchResult: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }
    const searchBoxRef = useRef(null)
    const searchResultRef=  useRef(null)

    const clickOutsideHandler = () => {
        setAnim("search")
        if(isOpen) {
            setTimeout(() => {
                setOpen(false)
                setInput("")
            }, 1000)
        }

    }
    useClickOutside(searchBoxRef, clickOutsideHandler)
    useClickOutside(searchResultRef, () => {
        setInput("")
    })
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
        if(isOpen)
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
            <SearchIcon cursor="pointer" />
            {
                isOpen &&
                <div className={anim} ref={searchBoxRef}>
                    <div onClick={handelClose} className="close-search-box">
                        <span className="material-icons">close</span>
                    </div>
                    <form action="">
                        <input value={input} onChange={handelInputChange} type="text" placeholder="Name or Category" className="input-search-box"/>
                    </form>

                </div>
                
            }
            {
                input &&
                    <ul className="search-result" style={ data== null ? styles.searchResult :  data.length == 0 ? styles.searchResult : {}  } ref={searchResultRef}>
                        {
                            data === null ?
                                <Loading /> :
                                <ul>
                                    {
                                        data.length == 0 ? "nothing found" :
                                            data.map((item,index) => <SearchResultItem title={item.title} key={index} url={item.url} img={item.images[0]}/>)
                                    }
                                </ul>


                        }
                    </ul>
            }
        </div>
    )
}


export default SearchBox

