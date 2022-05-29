import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Header } from  "./comp/Header";
import { Footer } from "./comp/Footer";
import { NotFound } from "./comp/NotFound";
import { Product } from "./comp/Product";

import { Main } from "./pages/Main";
import { FAQ } from "./pages/FAQ";
import { Cart } from "./pages/Cart";
import { Admin } from "./pages/Admin";
import { AdminForm } from "./pages/AdminForm";

import "./styles.css"

function App() {


  return (
    <>
    <Header />
    <Router>
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Admin" element={<AdminForm />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
