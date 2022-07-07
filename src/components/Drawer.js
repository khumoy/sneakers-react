function Drawer({ onClose, items }) {

    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина
                    <img onClick={onClose} src="/img/clear-x.svg" alt="" />
                </h2>
                <div className="items">
                    {
                        items.map((obj, i) => {
                            return (
                                <div key={i} className="cartItem">
                                    <img className="sneak" width={70} height={70} src={obj.img} alt="" />
                                    <div className="mr-20">
                                        <p>{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img className="clear-btn" src="/img/clear-x.svg" alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart-total-block">
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="green-btn">Оформить заказ <img src="/img/arrow.svg" alt="" /></button>
                </div>
            </div>
        </div>
    )
}
export default Drawer;