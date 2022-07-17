import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ id, img, title, price, onFavorite, onPlus, favorited = false }) => {
    const [isAdd, setIsAdd] = useState(false);
    const [isLiked, setIsLiked] = useState(favorited);


    const onClickPlus = () => {
        if (!isAdd) {
            onPlus({ img, title, price });
        }
        setIsAdd(!isAdd);
    }
    const onClickFavorite = (obj) => {

        onFavorite({ id, img, title, price });
        setIsLiked(!isLiked);
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite} >
                <img
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