import { ADD_TO_CARD, REMOVE_FROM_CARD } from './types'
const initalStae = []
const reducer = (state = initalStae, action) => {

    if(action.type === ADD_TO_CARD){
        let newState = state 
        const payload = action.payload 
        newState.map(item => {
            if( item.product == payload ) {
                item.quantity +1 
                return item 
            }
            return {
                product,
                quantity: 1
            }
        })
    } 
    return state 
}

export default reducer 
