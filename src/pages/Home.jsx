import Card from '../components/Card'

function Home({
    items,
    searchValue,
    onChangeSearchInput,
    setSearchValue,
    addCartItems,
    onAddFavorites }) {
    return (
        <div className="content">
            <div className="panel-info">
                <h1>{searchValue ? `Поиск по запросу ${searchValue}` : 'Все кроссовки'}</h1>
                <div className="search-block">
                    <img className='search' src="/img/search.svg" alt="" />
                    {searchValue ? <img onClick={() => setSearchValue('')} className='clear' src="/img/clear-x.svg" alt="" /> : ''}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                </div>
            </div>
            <div className="sneakers">
                {items?.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, i) => {
                    return (
                        <Card
                            id={item.id}
                            img={item.sneakers}
                            title={item.name}
                            price={item.price}
                            key={i}
                            onFavorite={(obj) => onAddFavorites(obj)}
                            onPlus={(obj) => addCartItems(obj)} />)
                })}
            </div>
        </div>
    );
}
export default Home;