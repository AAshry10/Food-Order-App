import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {}
});

function cartReducer(state, action) {
    if(action.type === "ADD_ITEM") {
        //update state by adding a meal item


        const existingItemIndex = state.items.findIndex(     //holding the item if it exists
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if(existingItemIndex > -1) {
            //item is found
            const existingItem = state.items[existingItemIndex]; // Our item we need to increment qnty
            const updatedItem = {                                // after updating (qnty ++)
                ...existingItem,                                 // spreding the item props
                quantity : existingItem.quantity + 1             // updating the qnty prop 
            };
            updatedItems[existingItemIndex] = updatedItem;       // overiting the existing one with our updated item
        } else {
            //item not found
            updatedItems.push({...action.item, quantity: 1});
        }


        return {...state, items : updatedItems};  //returning the updated items without losing its prevState if exists..
    }

    if(action.type === "REMOVE_ITEM") {
        // update state by removing a meal item


        const existingItemIndex = state.items.findIndex(     //holding the item (garanteed that it exists)
            (item) => item.id === action.id
        );
        const existingCartItem = state.items[existingItemIndex]

        const updatedItems = [...state.items];
        if(existingCartItem.quantity === 1) {
            //if we have only 1 from this item in the cart 
            updatedItems.splice(existingItemIndex, 1);
        } else {
            // if we have more than 1 from this item in the cart
            
            const updatedItem = {                   // updates its quantity by decrementing it
                ...existingCartItem,
                quantity : existingCartItem.quantity - 1 
            };
            updatedItems[existingItemIndex] = updatedItem;  // overiting the existing item by our new decremented one
        }

        return {...state, items : updatedItems};
    }

    if(action.type === "CLEAR_CART") {
        return {...state, items: []}
    }
}

export function CartContextProvider({children}) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({type : "ADD_ITEM", item});
    }

    function removeItem(id){
        dispatchCartAction({type : "REMOVE_ITEM", id});
    }

    function clearCart() {
        dispatchCartAction({type : "CLEAR_CART"})
    }

    const cartContext = {
        items : cart.items,
        addItem,
        removeItem,
        clearCart
    }

    console.log(cartContext);

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext;