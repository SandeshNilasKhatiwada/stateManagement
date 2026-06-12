import { useState } from "react";
import ProductGrid from "./components/ProductGrid";
import CartSidebar from "./components/CartSidebar";
import { products } from "./data/products";
import type { CartItem } from "./types";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <div className="app">
      <header>
        <h1>🛒 My Store</h1>
      </header>
      <main>
        <ProductGrid products={products} onAddToCart={addToCart} />
        <CartSidebar
          cartItems={cart}
          onUpdateQty={updateQuantity}
          onRemove={removeItem}
          onClear={clearCart}
        />
      </main>
    </div>
  );
}
