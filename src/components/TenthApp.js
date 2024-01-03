import React, { useMemo, useState, useRef } from "react";

const TenthApp = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("re-calculate total");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div>
      <h2>Tenth_App</h2>
      <input
        type="text"
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
        ref={nameRef}
      />
      <br />
      <input
        type="text"
        value={price}
        placeholder="Enter name..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              {product.name} - {product.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TenthApp;
