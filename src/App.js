import "./App.css";
import Movies from "./Movies";

function App() {
  return (
    <div className="App container-fluid">
      <div className="background-img"></div>
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
