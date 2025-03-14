import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Product from "./pages/Product"
import PlaceOrder from "./pages/PlaceOrder"
import Order from "./pages/Order"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"

const App = () => {
  return (
    <div className="px-4 sm:px-[7vw] lg:px-9[vw]">
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
