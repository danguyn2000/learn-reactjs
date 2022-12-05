import React, { useEffect } from "react";
import productAPI from "./API/productAPI";

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await productAPI.getAll();
      console.log(productList);
    };
    fetchProduct();
  }, []);

  return (
    <div className="App">
      <h1>WELCOME TO REACT HOOK</h1>
      {/* <Clock /> */}
      {/* <BetterClock /> */}
      {/* <MagicBox /> */}
    </div>
  );
}

export default App;
