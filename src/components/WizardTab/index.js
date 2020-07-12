import React, { useState } from 'react'
import './WizardTab.scss'

const Index = (props) => {
    const [currentTab, setCurrentTab] = useState(0)
    const nextClickHandler = () => {
        if(currentTab < props.children.length -1)
            setCurrentTab(currentTab+1)
    }
    const prevClickHandler = () => {
        if(currentTab > 0)
            setCurrentTab(currentTab-1)

    }

    return (
        <div className="wizard-tab">
          <div>
              { props.children[currentTab] }
              <button onClick={nextClickHandler} >Next</button>
              <button onClick={prevClickHandler}>Prev</button>
          </div>
        </div>
    )
}
export default Index