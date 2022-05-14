import React from 'react'
import './basketItem.css'

const BasketItem = (props) => {
    const {
        _id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <li className='collection-item'>
            {name}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => decQuantity(_id)}
            >
                remove
            </i>{' '}
            x{quantity}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => incQuantity(_id)}
            >
                add
            </i>{' '}
            = {price * quantity} złot.
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(_id)}
            >
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
}

export default BasketItem