import * as actionTypes from './shopping-types'

const initial_state = {
    products : [], // {id, title, desc, price, img}
    cart : [], // {id, title, desc, price, img, qty}
    currentItem : null
}

const shopReducer = (state = initial_state , action) => {
    // console.log(action.payload)
    switch(action.type){
        case 'FETCH_DATA' :
            return { ...state, products : action.payload}
        case actionTypes.ADD_TO_CART :
            // Get the item data from the products array base the id
            const itemProduct = state.products.find(product => product.id === action.payload.id) 
            // Check if Item is in cart already
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false) 
            return {
                ...state,
                cart : inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty : item.qty + 1} : item) : [...state.cart, {...itemProduct, qty : 1}] // if incart(true) -> find item and change the qty to +1 and if not just replace data // and if its not incart(false) add item to the cart and add qty 1 for initial value of qty
            }
        case actionTypes.REMOVE_FROM_CART :
            return {
                ...state,
                cart : state.cart.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY :
            return {
                ...state,
                cart : state.cart.map(item => item.id === action.payload.id ? {...item, qty : +action.payload.qty} : item)
            }
        case actionTypes.LOAD_CURRENT_ITEM :
            return {
                ...state, currentItem : action.payload
            }
        default :
            return state
    }

}

export default shopReducer