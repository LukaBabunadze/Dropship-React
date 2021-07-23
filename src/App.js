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
import LandingPage from "./Layout/LandingPage";
import SignUp from "./Authorization/SignUp";

function App() {
  return (
      <>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login/>
            <LandingPage />
          </Route>
          <Route path="/registration">
            <LandingPage/>
            <SignUp/>
          </Route>
          <Route excat path="/cart">
            <SideNav/>
            <Cart />
          </Route>
          <Route exact path="/product/:productId?">
            <SideNav/>
            <Catalog/>
            <AddProduct />
          </Route>
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
        </Switch>
      </>
  );
}

export default App;
