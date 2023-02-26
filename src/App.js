import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Main Component
import FullPage from "./Components/FullPage/FullPage";

// Components
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages */}
        <Route path="/home" element={ <  FullPage/>}/>
        <Route path="/aboutus" element={ <  AboutUs/>}/>
        <Route path="/help" element={ <  AboutUs/>}/>

        {/* Redirect */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
