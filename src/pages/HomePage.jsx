import { useEffect, useRef } from "react";
import Child from "../components/child";

export default function HomePage() {
  // const { cartItems,addItemToCart } = useCart();
  // console.log(cartItems);
  const refBtn = useRef(null);

  console.log(refBtn);

  const clickHandler = () => {
    refBtn.current.focus();
  };
  return (
    <div>
      HomePage
      {useRef.current}
      {/* <button onClick={() => addItemToCart((prev) => [...prev, { id: 1, count: 1, title: "new Product" }])}>Add new </button> */}
      <button onClick={clickHandler}>click</button>
      <input ref={refBtn} type="text" placeholder="test" />
      <Child />
    </div>
  );
}
