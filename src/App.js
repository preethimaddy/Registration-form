import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./main/Home"
import Pagenotfound from "./main/Pagenotfound"

function App() {
  return (
   <>
   <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="*" element={<Pagenotfound />} />
            
          </Routes>
        </Router>
        {/* <Home /> */}
        
      </div>
   </>
  );
}

export default App;
