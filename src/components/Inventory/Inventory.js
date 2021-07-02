import React from "react";
import { Button } from "react-bootstrap";
import fakeData from "../../fakeData";

const Inventory = () => {
  const handleAddProduct = () => {
    const products = {};
    fetch("https://glacial-basin-59956.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(products),
    });
  };
  return (
    <div>
      <form action="">
        <p>
          <label htmlFor="">Name:</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="">price:</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="">Quantity:</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="">Image:</label>
          <input type="file" />
        </p>
      </form>
      <Button onClick={handleAddProduct}>Add Product</Button>
    </div>
  );
};

export default Inventory;
