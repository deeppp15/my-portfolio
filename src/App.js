import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import DataMining  from "./routes/DataMining";
import { Route, Routes, useLocation } from "react-router-dom";

//Parent file of Project
//Call all pages here 
//Create pages in routes
//After that create components eg this nav bar, project setion, contact about section component folder
function App() {
  const location = useLocation();
  return (
   <div className="parallex">
   <Routes> 
    <Route path="/my-portfolio/" element={<Home />} />
    <Route path="/my-portfolio/about" element={<About />} />
    <Route path="/my-portfolio/contact" element={<Contact />} />
    <Route path="/my-portfolio/dataMining" element={<DataMining pathname={location.pathname} />} />
   </Routes>
   </div>
  );

}
//rafce
export default App;
