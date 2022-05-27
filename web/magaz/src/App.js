import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Header } from  "./comp/Header";
import { Main } from "./pages/Main";
import { Footer } from "./comp/Footer";
import { NotFound } from "./comp/NotFound";
import { FAQ } from "./pages/FAQ";
import { Cart } from "./pages/Cart";

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
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
