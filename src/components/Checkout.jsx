import { useContext } from "react";
import { useActionState } from "react";

import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";
import useHttp from "./hooks/useHttp";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Error from "./UI/Error";

const requestConfig = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    }
}

export default function Checkout() {

    const cartCtx = useContext(CartContext);
    const UserProgreeCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totlaPrice, item) => {
        return totlaPrice + item.quantity * item.price
    }, 0)

    function handleCloseCheckout() {
        UserProgreeCtx.hideCheckout();
    }

    function handleFinish() {
        UserProgreeCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    const { 
        error, 
        data, 
        sendRequest,
        clearData
    } = useHttp('http://localhost:3000/orders', requestConfig);

    async function checkoutAction(prevState, fd) {
        const customerData = Object.fromEntries(fd.entries());

        // send a post http request

        await sendRequest(
          JSON.stringify({
            order: {
              items: cartCtx.items,
              customer: customerData,
            }
          })
        );
    }

    const [formState, formAction, isPending] = useActionState(checkoutAction, null)

    let action = (
        <>
            <Button type="button" textOnly onClick={handleCloseCheckout}>Close</Button>
            <Button> Place Order</Button>
        </>
    )

    if(isPending) {
        action = <span>Sending Order Data....</span>
    }

    if(data && !error) {
        return <Modal open={UserProgreeCtx.progress === "checkout"} onClose={handleFinish}>
            <h2>Success!!</h2>
            <p>Your order was confirmed.</p>
            <p>We will get back to you with an email within few seconds.</p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>
                    okay
                </Button>
            </p>
        </Modal>
    }

    return (
        <Modal 
            open={UserProgreeCtx.progress === "checkout"}
            onClose={UserProgreeCtx.progress === "checkout" ? handleCloseCheckout : null}
        >
            <form action={formAction}>
                <h2>Checkout</h2>
                <p>Total Amount : {cartTotal}</p>

               <Input label="Full Name" type="text" id="name"/>
               <Input label="E-Mail Address" type="email" id="email"/>
               <Input label="Street" type="text" id="street"/>

                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code"/>
                    <Input label="City" type="text" id="city"/>
                </div>

                {error && <Error title="Failed to send order" message={error}/>}

                <p className="modal-actions">
                    {action}
                </p>

            </form>
        </Modal>
    )
}