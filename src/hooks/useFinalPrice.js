import { useSelector }  from "react-redux"

const useFinalPrice = () => {
    let finalPriceCounter = 0
    const price = useSelector(state => {
        return state.card.map( ({product, quantity}) => {
            finalPriceCounter += product.price * quantity
        } )
    })
    return Math.round((finalPriceCounter + Number.EPSILON) * 100) / 100

}

export default useFinalPrice