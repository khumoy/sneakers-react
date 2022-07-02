function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2>Корзина
                    <img src="/img/clear-x.svg" alt="" />
                </h2>
                <div className="items">

                    <div className="cartItem">
                        <img className="sneak" width={70} height={70} src="/img/sneaker1.jpg" alt="" />
                        <div className="mr-20">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="clear-btn" src="/img/clear-x.svg" alt="" />
                    </div>
                    <div className="cartItem">
                        <img className="sneak" width={70} height={70} src="/img/sneaker1.jpg" alt="" />
                        <div className="mr-20">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="clear-btn" src="/img/clear-x.svg" alt="" />
                    </div>
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