import React from 'react'
import Select from "../../../components/Select"
import './PaymentWays.scss'

// png icons
import visa from '../../../assets/visa.svg'
import bitcoin from '../../../assets/bitcoin.svg'

const PaymentWays = () => {
    return (
        <div className="payment-ways">
            <Select direction="row">
                <div className="payment-ways-item" >
                    <div>
                        <img src={visa} width={64} alt=""/>
                        <h5>Visa</h5>
                    </div>
                </div>
                <div className="payment-ways-item" >
                    <div>
                        <img src= {bitcoin} width={55} alt=""/>
                        <h5>Bitcoin</h5>
                    </div>
                </div>
            </Select>
        </div>
    )
}

export default PaymentWays