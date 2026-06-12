import React from "react";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <>
      <div className="product-card">
        <span className="product-emoji">{product.emoji}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button
          className="add-to-cart-button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};
