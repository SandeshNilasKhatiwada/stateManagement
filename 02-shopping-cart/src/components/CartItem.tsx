import React from "react";
import type { CartItem as CartItemType } from "../types";

interface CartItemProps {
  item: CartItemType;
  onUpdateQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}
const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQty,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="cart-item">
      <span>{item.emoji}</span>
      <span className="cart-item-name">{item.name}</span>
      <div className="qty-controls">
        <button onClick={() => onUpdateQty(item.id, -1)}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQty(item.id, 1)}>+</button>
      </div>
      <span className="cart-item-subtotal">${item.price * item.quantity}</span>
      <button className="remove-btn" onClick={() => onRemove(item.id)}>
        ✕
      </button>
    </div>
  );
};

export default CartItem;
