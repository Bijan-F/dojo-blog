import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Create from './components/Create.jsx';
import BlogDetails from './components/BlogDetails.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
              <Route path="create" element={<Create />}/>
              <Route path="blogs/:id" element={<BlogDetails />}/>
              <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
