
function App() {

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-left">
          <img src="/img/logo.png" width={40} height={40} alt='' />
          <div className="header-info">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header-right">
          <li className="mr-4">
            <img src="/img/cart.svg" width={18} height={18} alt='' />
            <span>1250 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" width={18} height={18} alt='' />
          </li>
        </ul>
      </header>
      <hr />
      <div className="content">
        <div className="panel-info">
          <h1>Все кроссовки</h1>

        </div>

        <div className="sneakers">
          <div className="card">
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

          <div className="card">
            <img src="/img/sneaker2.jpg" width={144} height={144} alt="" />
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

          <div className="card">
            <img src="/img/sneaker3.jpg" width={144} height={144} alt="" />
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

          <div className="card">
            <img src="/img/sneaker4.jpg" width={144} height={144} alt="" />
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

        </div>
      </div>
    </div>
  );
}

export default App;
