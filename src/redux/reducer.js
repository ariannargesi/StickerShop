import { ADD_TO_CARD, REMOVE_FROM_CARD } from './types'
const initalStae = []
const reducer = (state = initalStae, action) => {
    if(action.type === ADD_TO_CARD){
      const newState = state
      const payload = action.payload
      function isNewItem (product){
        const result = newState.find(item => {
	         return item.product.title === payload.title
         })
         if(result)
             return false
         else
             return true
      }
      const newItem = isNewItem(payload)
      if(newItem){
        newState.push({ product: payload, quantity: 1 })
        console.log("im returning new state ")
        return newState
      }

      else {
        newState.map(item => {
 	        if(item.product.title === payload.title)
    	     item.quantity++
      })
      console.log("dont run")
      }

    }

    return state
}


export default reducer
