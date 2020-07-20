import { useSelector }  from "react-redux"

const useFinalPrice = () => {
    const price = useSelector(state => {
        let finalPriceCounter = 0
        return state.card.map( item => {
            const [ product, count  ] = item
            finalPriceCounter += product.price * count
        } )
    })
    return price
}

export default useFinalPrice