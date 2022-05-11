import React from "react";
import { Content } from "../comp/Content";

export const Main = () =>{
const items = [
    {id: 1, src: require('../assets/12.png'), alt:"Hoodiey", price: "2399", title: "ANTHONY BELLESED Hoodie Ecorche"},
    {id: 2, src: require('../assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
    {id: 3, src: require('../assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
    {id: 4, src: require('../assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
    {id: 5, src: require('../assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
    {id: 6, src: require('../assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
    ];

    return <Content items={items} />
};