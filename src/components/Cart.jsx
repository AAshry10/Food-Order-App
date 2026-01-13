import { useContext } from "react"
import CartContext from "../Store/CartContext"
import UserProgressContext from "../Store/UserProgressContext";
import Modal from "./UI/Modal"
import Button from "./UI/Button";
import CartItem from "./CartItem";
import { currencyFormatter } from "../util/formatting";

export default function Cart() {

    const cartCtx = useContext(CartContext);
    const UserProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totlaPrice, item) => {
        return totlaPrice + item.quantity * item.price
    }, 0)

    function handleCloseCart() {
        UserProgressCtx.hideCart();
    }

    function handleCheckoutClick(){
        UserProgressCtx.showCheckout();
    }

    return(
        <Modal 
            className="cart" 
            open={UserProgressCtx.progress === "cart"}
            onClose={UserProgressCtx.progress === "cart" ? handleCloseCart : null}
            >
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <CartItem key={item.id}
                        name={item.name} 
                        quantity={item.quantity} 
                        price={item.price}
                        onIncrease={() => cartCtx.addItem(item)}
                        onDecrease={() => cartCtx.removeItem(item.id)}
                    />
                ))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}> close </Button>
                {cartCtx.items.length > 0 && (<Button onClick={handleCheckoutClick}> Checkout </Button>)}
            </p>
        </Modal>
    )
}