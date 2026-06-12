import React from "react";
import type { CartItem as CartItemsType } from "../types";
import CartItem from "./CartItem";

interface CartSidebarProps {
  cartItems: CartItemsType[];
  onUpdateQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onClear: () => void;
}
const CartSidebar: React.FC<CartSidebarProps> = ({
  cartItems,
  onUpdateQty,
  onRemove,
  onClear,
}: CartSidebarProps) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <div className="cart-sidebar">
      <h2>Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQty={onUpdateQty}
                onRemove={onRemove}
              />
            ))}
          </div>
          <div className="cart-footer">
            <strong>Total: ${total}</strong>
            <button className="clear-btn" onClick={onClear}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
