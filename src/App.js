import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Document from "./pages/Document";
import Home from "./pages/Home";
import NotFound from "pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" name="Home" Component={Home} />
        <Route
          exact
          path="/:id/:chapter"
          name="Document"
          Component={Document}
        />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
