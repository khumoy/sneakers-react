import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ img, title, price, onFavourite, onPlus }) => {
    const [isAdd, setIsAdd] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    // const data = props.item;

    const onClickPlus = () => {
        onPlus({ img, title, price });
        setIsAdd(!isAdd)
    }
    const onClickFavourite = () => {
        onFavourite();
        setIsLiked(!isLiked)
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite} >
                <img
                    onClick={onClickFavourite}
                    src={isLiked ? '/img/heart-on.svg' : '/img/heart-off.svg'} alt="" />
            </div>
            <img src={img} width={144} height={144} alt="" />
            <div> <h5 className={styles.title}>{title}</h5></div>
            <div className={styles.cardBottom}>
                <div className={styles.cardSale}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus}
                    src={isAdd ? "/img/btn-checked.svg" : "/img/plus-svg.svg"} alt="" />
            </div>
        </div>
    )
}

export default Card;