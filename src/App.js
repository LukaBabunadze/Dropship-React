import './App.css';
import SideNav from "./SideNav"
import Catalog from "./Catalog";
import {Router, Switch, Route} from "react-router-dom"

function App() {
  return (
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
              </Switch>
            </div>
          </main>
        </div>
      </body>
    </div>
  );
}

export default App;
