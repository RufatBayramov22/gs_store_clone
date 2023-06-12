import React from "react";
import { Route, Routes } from "react-router-dom";

/// components

import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Baby from "./pages/Baby";
import Registration from "./pages/Register";
import Login from "./pages/Login";

//context
import { AppContext } from "./utils/MainContext";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <AppContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </AppContext>
  );
};

export default App;
