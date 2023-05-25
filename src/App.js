import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";

//Parent file of Project
//Call all pages here 
//Create pages in routes
//After that create components eg this nav bar, project setion, contact about section component folder
function App() {
  return (
   <>
   <Routes> /** Specifying routes for all pages  */
    <Route path="/" element={<Home />} />/** Add address and path  */
    <Route path="/project" element={<Project />} />/** Add address and path  */
    <Route path="/about" element={<About />} />/** Add address and path  */
    <Route path="/contact" element={<Contact />} />/** Add address and path  */
   </Routes>
   </>
  );
}

export default App;
