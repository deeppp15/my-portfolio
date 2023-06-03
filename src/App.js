import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import DataMining  from "./routes/DataMining";
import { Route, Routes } from "react-router-dom";

//Parent file of Project
//Call all pages here 
//Create pages in routes
//After that create components eg this nav bar, project setion, contact about section component folder
function App() {
  return (
   <>
   <Routes> /** Specifying routes for all pages  */
    <Route path="/my-portfolio" element={<Home />} />/** Add address and path  */
    <Route path="/my-portfolio/project" element={<Project />} />/** Add address and path  */
    <Route path="/my-portfolio/about" element={<About />} />/** Add address and path  */
    <Route path="/my-portfolio/contact" element={<Contact />} />/** Add address and path  */
    <Route path="/my-portfolio/dataMining" element={<DataMining />} />
   </Routes>
   </>
  );
}

export default App;
