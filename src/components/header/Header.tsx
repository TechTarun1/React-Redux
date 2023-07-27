import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.css";

const Header = () => {

    const navigate = useNavigate();
    const cartItems: any[] = useSelector((state: any) => state.cart.items)

    return (
        <header className="header">
            <div>
                <h1 onClick={() => navigate('/')}>
                    <p className="logo">Electronics Shop</p>
                </h1>
            </div>
            <div className="header-links">
                <ul onClick={() => navigate('/')}>
                    <li>
                        <p>Home</p>
                    </li>
                </ul>
                <ul onClick={() => navigate('/signup')}>
                    <li>
                        <p>SignUp</p>
                    </li>
                </ul>
                <ul onClick={() => navigate('/cart')}>
                    <li>
                        <p className="cart">
                            <i className="bi bi-cart-fill" />
                            <span className="cart-length">{cartItems.length === 0 ? "" : cartItems.length}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
