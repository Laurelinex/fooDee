import React from 'react'
import '../css/Checkout.css';

const Checkout = ({ basket, basketValue }) => {
    return (
        <div className="checkout-container">
            <i className="fas fa-shopping-cart"></i>
            <div className="basket-item-count">{basket.length}</div>
            <div className="checkout-text">CHECKOUT</div>
            <div className="checkout-total">£{basketValue}</div>
        </div>

    )
}

export default Checkout