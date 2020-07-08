import {
    ADD_TO_CARD,
    REMOVE_FROM_CARD,
    INCREASE_PRODUCT_QANTITY,
    DECREASE_PRODUCT_QANTITY, SHOW_TOAST
}
    from './types'

export const addToCard = product => {
    return {
        type: ADD_TO_CARD,
        payload: product
    }
}
export const removeFromCard = product => {
    return {
        type: REMOVE_FROM_CARD,
        payload: product
    }
}

export const increaseProductQantity = product => {
  return {
    type: INCREASE_PRODUCT_QANTITY,
    payload: product
  }
}

export const decreaseProductQantity = product => {
    return {
      type: DECREASE_PRODUCT_QANTITY,
      payload: product
    }
}


export const showToast =  txt => {
  return {
    type: SHOW_TOAST,
    payload: txt
  }
}
