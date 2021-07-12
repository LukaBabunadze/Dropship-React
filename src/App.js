import './App.css';
import SideNav from "./Layout/SideNav"
import Catalog from "./Common/Catalog";
import {Router, Switch, Route} from "react-router-dom"
import Login from "./Authorization/Login";
import Cart from "./Authorization/Cart"
import AddProduct from "./Authorization/AddProduct";
import Counter from "./Reducers/CounterReducer/Counter";
import Plus from "./Reducers/CounterReducer/Plus";
import Minus from "./Reducers/CounterReducer/Minus";
import FirstPage from "./Layout/FirstPage";
import SignUp from "./Authorization/SignUp";
import CartSingleProduct from "./Authorization/CartSingleProduct";

function App() {
  return (
      <>
        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route path="/login">
            <Login/>
            <FirstPage />
          </Route>
          <Route path="/registration">
            <FirstPage/>
            <SignUp/>
          </Route>
          <Route excat path="/cartsingleproduct">
            <CartSingleProduct/>
          </Route>
          <Route exact path="/:catalog?/:dashboard?">
            <div className="App">
              <body id="body">
              <div className="body__section">
                <SideNav/>
                <main className="main">
                  <div className="main__div">
                    <Switch>
                      <Route exact path="/catalog/:id?">
                        <Catalog/>
                      </Route>
                      <Route excat path="/cart">
                        <Cart />
                      </Route>
                      <Route exact path="/product/:productId?">
                        <AddProduct />
                      </Route>
                      <Route exact path="/counter">
                        <Counter />
                        <Plus/>
                        <Minus/>
                      </Route>
                    </Switch>
                  </div>
                </main>
              </div>
              </body>
            </div>
          </Route>
        </Switch>
      </>
  );
}

export default App;
