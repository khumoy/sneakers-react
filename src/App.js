import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {

  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="panel-info">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div >
  );
}

export default App;
