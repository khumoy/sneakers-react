import React from 'react';
import axios from 'axios';
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');


  React.useEffect(() => {
    axios.get('https://62c69aa674e1381c0a63996f.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      });
    axios.get('https://62c69aa674e1381c0a63996f.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data)
      });
  }, []);

  const addCartItems = (obj) => {
    axios.post('https://62c69aa674e1381c0a63996f.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  };

  const removeCart = (id) => {
    axios.delete(`https://62c69aa674e1381c0a63996f.mockapi.io/cart/${id}`);
    setCartItems((products) => products.filter((item) => item.id !== id));
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cartOpen ? <Drawer
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemoveCart={removeCart}
      /> : null}
      <Header clickOpenCart={() => setCartOpen(true)} />
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
                img={item.sneakers}
                title={item.name}
                price={item.price}
                key={i}
                onFavourite={() => console.log('liked')}
                onPlus={addCartItems} />)
          })}
        </div>
      </div>
    </div >
  );
}

export default App;
