import './App.css';
import Sort from "./Sort";
import SearchBar from "./HeaderSearch"
import SideNav from "./SideNav"
import Catalog from "./Catalog";

function App() {
  return (
    <div className="App">
      <body id="body">
        <div className="body__section">
          <SideNav/>
          <main className="main">
            <div className="main__div">
              <nav className="main__nav">
                <SearchBar/>
                <Sort/>
              </nav>
              <Catalog/>
            </div>
          </main>
        </div>
      </body>
    </div>
  );
}

export default App;
