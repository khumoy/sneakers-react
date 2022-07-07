import React from 'react'
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  React.useEffect(() => {

    fetch('https://62c69aa674e1381c0a63996f.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json)
        console.log(json)
      })
  }, []);

  const addCartItems = (obj) => {
    setCartItems(prev => [...prev, obj])
  };

  return (
    <div className="wrapper">
      {cartOpen ? <Drawer items={cartItems} onClose={() => setCartOpen(false)} /> : null}
      <Header clickOpenCart={() => setCartOpen(true)} />
      <div className="content">
        <div className="panel-info">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {items?.map((item, i) => {
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
