function BasketItem(props) {
 const {
    offerId,
    displayName,
    price = {},
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
    } = props;

    return <li className="collection-item"
                >{displayName} x 
                <i className="material-icons basket-quantity" onClick={() => decQuantity(offerId)}>remove</i> 
                {quantity}
                <i className="material-icons basket-quantity" onClick={() => incQuantity(offerId)}>add</i>  
                = {price.finalPrice * quantity} грн.
                <span className="secondary-content" onClick={() => removeFromBasket(offerId)}>
                    <i className="material-icons basket-delete">close</i>
                    </span>
                </li>
}

export {BasketItem}