import FloatingButtons from "./Components/FloatingButtons"
import Footer from "./Components/Footer"
import NavbarGaruda from "./Components/Navbar"
import ScrollToTop from "./Components/ScrollToTop"
import About from "./Pages/About"
import Home from "./Pages/Home"
import { Route, Routes, useParams } from "react-router-dom"
import SingleService from "./Pages/SingleService"
import servicesData from "./assets/data/servicesData"
import Gallery from "./Pages/Gallery"
import Contact from "./Pages/Contact"
import DesignerCabins from "./Components/DesignerCabins"
import Doors from "./Components/Doors"

const ServicePageWrapper = () => {
  const { servicePath } = useParams();
  const fullPath = `/services/${servicePath}`; // reconstruct the full path
  const service = servicesData.find((s) => s.path === fullPath);

  if (!service) {
    return (
      <h2 className="p-12 text-center text-red-600 font-bold">
        Service Not Found
      </h2>
    );
  }

  return <SingleService service={service} />
};

function App() {

  return (
    <>
    <ScrollToTop/>
    <NavbarGaruda/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/services/:servicePath" element={<ServicePageWrapper />} />
      <Route path="/showcase" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cabins" element={<DesignerCabins/>}/>
      <Route path="/doors" element={<Doors/>}/>
     </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App
