import React, { useState } from 'react'
import Button from "../Button"
import './WizardTab.scss'

const Index = ({children, styles}) => {
    const [currentTab, setCurrentTab] = useState(0)
    const nextClickHandler = () => {
        if(currentTab < children.length -1)
            setCurrentTab(currentTab+1)
    }
    const prevClickHandler = () => {
        if(currentTab > 0)
            setCurrentTab(currentTab-1)

    }

    return (
        <div className="wizard-tab">
          <div>
              { children[currentTab] }
              <div className="wizard-navigation">
                  <Button type="success"  size="medium" width={"200px"} onClick={nextClickHandler} >Next</Button>
                  <Button type="success"  size="medium" width={"200px"} onClick={prevClickHandler} >Prev</Button>
              </div>
          </div>
        </div>
    )
}
export default Index