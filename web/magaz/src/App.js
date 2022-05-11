import React from "react";
import { Header } from  "./comp/Header";
import { Footer } from "./comp/Footer";
import { Content } from "./comp/Content";
import "./styles.css"

function App() {
const items = [
  {id: 1, src: require('./assets/12.png'), alt:"Hoodiey", price: "2399", title: "ANTHONY BELLESED Hoodie Ecorche"},
  {id: 2, src: require('./assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
  {id: 3, src: require('./assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
  {id: 4, src: require('./assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
  {id: 5, src: require('./assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
  {id: 6, src: require('./assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
];
  return (
    <>
      <Header />
      <Content items={items} />
      <Footer />
    </>
  );
}

export default App;
