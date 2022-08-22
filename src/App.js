import { BrowserRouter as Router, Link } from "react-router-dom";
import Navigator from "./Navigator";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/profile?name=milan">Profile</Link>
      </nav>
      <Navigator />
    </Router>
  )
}

export default App;
