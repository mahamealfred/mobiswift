import LandingPage from "./layouts/landingpage";
import { Routes, Route, Navigate, useLocation, BrowserRouter as Router, } from "react-router-dom";
function App() {
  return (
    <Routes>
    <Route exact path="/" element={ <LandingPage/>} />
    {/* <Route exact path="/services" element={ <Dashboard/>} /> */}
  </Routes>
  
  );
}

export default App;
