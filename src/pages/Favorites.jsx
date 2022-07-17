import Card from '../components/Card';

function Favorites({ favorites, onAddFavorites }) {

    return (
        <div className="content">
            <div className="panel-info">
                <h1>Мои закладки</h1>
            </div>
            <div className="sneakers">
                {favorites?.map((item, i) => {
                    return (
                        <Card
                            key={i}
                            onFavorite={onAddFavorites}
                            favorited={true}
                            {...item}
                        />)
                })}
            </div>
        </div>
    );
};
export default Favorites;