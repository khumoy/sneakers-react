import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorites from './pages/Favorites';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
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
    axios.get('https://62c69aa674e1381c0a63996f.mockapi.io/favourites')
      .then((res) => {
        setFavorites(res.data)
      });
  }, []);

  const addCartItems = (obj) => {
    axios.post('https://62c69aa674e1381c0a63996f.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  };

  const onAddFavorites = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://62c69aa674e1381c0a63996f.mockapi.io/favourites/${obj.id}`)
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post('https://62c69aa674e1381c0a63996f.mockapi.io/favourites', obj)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert('Ну удалось добавить в фавориты')
    }
  };

  const removeCart = (id) => {
    axios.delete(`https://62c69aa674e1381c0a63996f.mockapi.io/cart/${id}`);
    setCartItems((products) => products.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  };

  return (
    <div className="wrapper">
      {cartOpen ? <Drawer
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemoveCart={removeCart}
      /> : null}
      <Header clickOpenCart={() => setCartOpen(true)} />

      <Routes>
        <Route path='/'
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              setSearchValue={setSearchValue}
              addCartItems={addCartItems}
              onAddFavorites={onAddFavorites}
            />} />
        <Route path='/favorites'
          element={
            <Favorites
              favorites={favorites}
              onAddFavorites={onAddFavorites} />} />

      </Routes>



    </div >
  );
}

export default App;
