import { useState } from 'react'

const useToggle = (initialValue=false) => {
    const [isVisible, setVisisbilty] = useState(initialValue)
    const toggleVisiblity = () => {
        setVisisbilty(!isVisible)
    }

    return [isVisible, toggleVisiblity]

}

export default useToggle 