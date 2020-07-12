import React, { useState } from 'react'
import './WizardTab.scss'

const WizardTab = ({steps}) => {
    const [currentTab, setCurrentTab] = useState(0)
    const nextClickHandler = () => {
        if(currentTab < steps.length)
            setCurrentTab(currentTab+1)
    }
    const prevClickHandler = () => {
        if(currentTab > 0)
            setCurrentTab(currentTab-1)
        setCurrentTab(currentTab-1)
    }

    return (
        <div>
          <div>
              { steps[currentTab] }
              <button onClick={nextClickHandler} >Next</button>
              <button onClick={prevClickHandler}>Prev</button>
          </div>
        </div>
    )
}
export default WizardTab