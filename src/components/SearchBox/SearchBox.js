import React, { useState, useEffect } from 'react'
import useToggle from '../../hooks/useToggle'
import searchSvg from '../../assets/icons/search.svg'
import closeSvg from '../../assets/icons/close.svg'
import axios from 'axios'
import './SearchBox.css'
import Loading from '../Loading/Loading'
import SearchResultItem from '../SearchResultItem/SearchResultItem'

const SearchBox = () => {
    const [isOpen, setOpen] = useToggle(false)
    const [input, setInput] = useState('')
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get('https://flerbo.herokuapp.com/api/s/search/?term=' + input)
            .then((data) => {
                if (data.status === 200) {
                    setData(data.data.data)
                }
            })
            .catch((err) => {})
    }, [input])

    function handelOpen() {
        if (isOpen == false) setOpen(true)
    }
    function handelClose() {
        setOpen(false)
        setInput('')
    }
    function handelInputChange(event) {
        setData(null)
        setInput(event.target.value)
    }

    return (
        <div className="search-wrapper" onClick={handelOpen}>
            <img src={searchSvg} width="24px" height="24px" />
            {isOpen && (
                <div className="search-open">
                    <div onClick={handelClose} className="close-search-box">
                        <img src={closeSvg} width="24px" height="24px" />
                    </div>
                    <form action="">
                        <input
                            value={input}
                            onChange={handelInputChange}
                            type="text"
                            placeholder="Name or Category"
                            className="input-search-box"
                        />
                        <button
                            disabled={input.length == 0 ? true : false}
                            type="submit"
                            className="search-search-box"
                            className="submit-search-box"
                        >
                            search
                        </button>
                    </form>

                    {input && data == null && <Loading />}
                </div>
            )}
            {input && (
                <ul className="search-result">
                    {data === null ? (
                        <Loading />
                    ) : (
                        <ul>
                            {data.length == 0
                                ? 'nothing found'
                                : data.map((item, index) => (
                                      <SearchResultItem
                                          title={item.title}
                                          key={index}
                                          img={item.images[0]}
                                      />
                                  ))}
                        </ul>
                    )}
                </ul>
            )}
        </div>
    )
}

export default SearchBox
