import "./App.css";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <HomePage />
    // <CartProvider>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="cart" element={<Cart />} />
    //   </Routes>
    // </CartProvider>
  );
}

export default App;
