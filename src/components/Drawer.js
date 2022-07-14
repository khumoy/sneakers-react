function Drawer({ onClose, items, onRemoveCart }) {

    // const onClickRemove = () => {
    //     console.log(items.filter((item) => item == '0'))
    // }


    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина
                    <img onClick={onClose} src="/img/clear-x.svg" alt="" />
                </h2>

                {items.length ?
                    <>
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
                                            <img
                                                className="clear-btn"
                                                src="/img/clear-x.svg"
                                                alt="remove"
                                                onClick={() => onRemoveCart(obj.id)}
                                            />
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
                            <button className="green-btn">Оформить заказ <img className="arrowRight" src="/img/arrow.svg" alt="" /></button>
                        </div>
                    </> : <div className="openCart">
                        <img src="/img/openbox.png" alt="box" />
                        <h2>Корзина пустая</h2>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button className="green-btn" onClick={onClose}> <img className="arrowLeft" src="/img/arrowleft.png" alt="" />  Вернуться назад</button>
                    </div>}


            </div>
        </div>
    )
}
export default Drawer;