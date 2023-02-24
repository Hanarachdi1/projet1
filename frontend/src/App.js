import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/nav/Navigation";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useDispatch, useSelector } from "react-redux";
import NewProduct from "./pages/newproduct/NewProduct";
import ProductPage from "./pages/productpage/ProductPage";
import CategoryPage from "./pages/category/CategoryPage";

import CartPage from "./pages/cardpage/CartPage";
import OrdersPage from "./pages/orderpage/OrdersPage";
import AdminDashboard from "./pages/dashbord/AdminDashboard";
import EditProductPage from "./pages/editproduct/EditProductPage";
import { useEffect } from "react";
import { getAllProducts } from "./redux/actions/actionProduct";
import { getCurrentUser } from "./redux/actions/actionUser";


function App() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getAllProducts());
            dispatch(getCurrentUser());
          }, []);
    return (
        <div className="App">
            <BrowserRouter>
                
                <Navigation />
                <Routes>
                    <Route index element={<Home />} />
                    {!user && (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </>
                    )}

                    {user && (
                        <>
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/orders" element={<OrdersPage />} />
                        </>
                    )}
                    {user && user.isAdmin && (
                        <>
                            <Route path="/admin" element={<AdminDashboard />} />
                            <Route path="/product/:id/edit" element={<EditProductPage />} />
                        </>
                    )}
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/category/:category" element={<CategoryPage />} />

                    <Route path="/new-product" element={<NewProduct />} />

                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
