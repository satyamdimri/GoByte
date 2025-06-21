
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import Myorder from './screens/Myorder';
import { CartProvider } from './components/ContextReducer';
function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route exact path = "/loginuser" element={<Login/>}/>
        <Route exact path = "/createuser" element={<Signup/>}/>
        <Route exact path = "/myorder" element={<Myorder/>}/>
      </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
