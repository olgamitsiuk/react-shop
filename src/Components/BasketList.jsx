import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const {order = [],
           handleBasketShow = Function.prototype,
           removeFromBasket = Function.prototype,
           incQuantity = Function.prototype,
           decQuantity = Function.prototype  } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity
    }, 0);

    return <ul className="collection basket-list">
    <li className="collection-item active">Корзина</li>
    {
        order.length ? (order.map(item => (
            <BasketItem key={item.offerId}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item} />))
        ) : ( <li className="collection-item">Корзина пуста</li>)
    }
    <li className="collection-item active">
        Общая стоимость: {totalPrice}
        </li>
    <li className="collection-item check">
        <button className="secondary-content btn btn-small">Оформить</button>
        </li>
    <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
  </ul>
        
}

export {BasketList}