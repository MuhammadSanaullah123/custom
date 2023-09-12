import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Login from "./userPages/Login/Login";
import Signup from "./userPages/Signup/Signup";
import Header from "./userPages/Header/Header";
import Footer from "./userPages/Footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header/> 
        <Routes>
          <Route exact path="/"  element={<Navigate replace to="/login" />} />
          <Route exact path="/login" element={<Login />} /> ;
          <Route exact path="/signup" element={<Signup />} /> ;
        </Routes>
        <Footer/> 
      </Router>
    </>
  );
};

export default App;
