
import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Home from "./scenes/home/Home"
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/confirmation";
import Navbar from "./scenes/global/Navbar";

const ScrollToTop= () =>{
  const { pathName} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathName])
  return null;
}

function App() {
  return  <div className="app"> 
  <BrowserRouter>
  <Navbar/>
    <ScrollToTop/>
    <Routes> 
      <Route path= "/" element= {<Home/>}/>
      <Route path= "item/:itemID" element= {<ItemDetails/>}/>
      <Route path= "checkout" element= {<Checkout/>}/>
      <Route path= "checkout/success" element= {<Confirmation/>}/>
    </Routes>
  </BrowserRouter>
   </div>

}

export default App;
