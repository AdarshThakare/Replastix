import React, { createContext, useState, useContext, ReactNode } from "react";

interface PlasticBottle {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
}

interface CartItem extends PlasticBottle {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (bottle: PlasticBottle) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (bottle: PlasticBottle) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === bottle.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === bottle.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...bottle, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
