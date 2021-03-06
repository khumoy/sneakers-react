import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header">
            <Link to='/'>
                <div className="header-left">
                    <img src="/img/logo.png" width={40} height={40} alt='' />
                    <div className="header-info">
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="header-right">
                <li onClick={props.clickOpenCart} className="mr-4">
                    <img src="/img/cart.svg" width={18} height={18} alt='' />
                    <span>1250 руб.</span>
                </li>
                <li>
                    <Link to='/favorites'>
                        <img src="/img/favorite.svg" width={18} height={18} alt='' />
                    </Link>
                </li>
                <li>
                    <img src="/img/user.svg" width={18} height={18} alt='' />
                </li>
            </ul>
        </header>
    )
}
export default Header;