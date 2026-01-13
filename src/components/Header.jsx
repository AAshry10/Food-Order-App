import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../Store/CartContext'
import UserProgressContext from '../Store/UserProgressContext'
import { use } from 'react'

export default function Header() {

    const UserProgressCtx = useContext(UserProgressContext);
    const cartCtx = useContext(CartContext);
    const totalNumberOfItems = cartCtx.items.reduce((totalNumber, item) => {
        return totalNumber + item.quantity;
    }, 0);

    function showCart(){
        UserProgressCtx.showCart();
    }

    return(
        <header id='main-header'>
            <div id='title'>
                <img src={logoImg} alt="A Restaurant" />
                <h1>RACTFOOD</h1>
            </div>
            <nav>
                <Button textOnly onClick={showCart}>
                    cart ({totalNumberOfItems})
                </Button>
            </nav>
        </header>
    )
}