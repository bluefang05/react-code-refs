import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes.js";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <Sidebar />
          <div className="content-wrapper">
            <Routes />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
