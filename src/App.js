import "./App.css";
import Movies from "./Movies";

function App() {
  return (
    <div className="App container">
      <header className="App-header">Movies</header>
      <Movies />
      <footer>
        This project was coded by Natalie Yeung.
        <br />
        It is open-sourced on Github and hosted on Netlify
      </footer>
    </div>
  );
}

export default App;
