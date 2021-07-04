import './App.css';
import SideNav from "./SideNav"
import Catalog from "./Catalog";
import {Router, Switch, Route} from "react-router-dom"
import Login from "./Authorization/Login";
import Cart from "./Authorization/Cart"
import AddProduct from "./Authorization/AddProduct";

function App() {
  return (
      <>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/:catalog?/:dashboard?">
            <div className="App">
              <body id="body">
              <div className="body__section">
                <SideNav/>
                <main className="main">
                  <div className="main__div">
                    <Switch>
                      <Route path="/catalog/:id?">
                        <Catalog/>
                      </Route>
                      <Route path="/cart">
                        <Cart />
                      </Route>
                      <Route path="/product/:productId?">
                        <AddProduct />
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
