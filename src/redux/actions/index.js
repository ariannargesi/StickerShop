export const addToCard = (product) => {
    return {
        type: "ADD_TO_CARD",
        payload: product
    }
}
export const removeFromCard = (product) => {
    return {
        type: "REMOVE_FROM_CARD",
        payload: product
    }
}