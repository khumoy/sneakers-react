
const Card = () => {

    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-off.svg" alt="" />
            </div>
            <img src="/img/sneaker1.jpg" width={144} height={144} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card-bottom">
                <div className="card-sale">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button>
                    <img width={11} height={11} src="/img/plus.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Card;