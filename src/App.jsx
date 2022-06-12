import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Cart from "./component/Cart";
import data from "./data.json";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (data) => {
    const exist = cartItems.find((item) => item.id === data.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === data.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
    }
  };
  const onRemove = (data) => {
    const exist = cartItems.find((item) => item.id === data.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== data.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === data.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <div className="App">
        <Header />
        <div className="row">
          <Main onAdd={onAdd} products={data} />
          <Cart onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />
        </div>
      </div>
    </>
  );
}
