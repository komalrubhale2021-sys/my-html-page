import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Product from "./components/Product";
import IndividualProduct from "./components/IndividualProduct"; // ✅ import ProductDetail

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        
        <Route path="/" element={<Dashboard />} />

        
        <Route path="/login" element={<Login />} />

        
        <Route path="/products" element={<Product />} />

        
        <Route path="/products/:id" element={<IndividualProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
