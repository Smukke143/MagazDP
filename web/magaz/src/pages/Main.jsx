import React from "react";
import { Content } from "../comp/Content";
import { Form } from "../comp/Form";
import { Nav } from "../comp/Nav";

export const Main = () =>{
const items = [
    {id: 1, src: require('../assets/12.png'), alt:"Hoodiey", price: "2399", title: "ANTHONY BELLESED Hoodie Ecorche"},
    {id: 2, src: require('../assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
    {id: 3, src: require('../assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
    {id: 4, src: require('../assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
    {id: 5, src: require('../assets/12.png'), alt:"Hoodiey", price: "1990", title: "WTF HOODYI"},
    {id: 6, price: "1990", title: "WTF HOODYI"},
    ];

    return <>
        <Nav />
        <Content items={items} />
        <Form />
    </>
};