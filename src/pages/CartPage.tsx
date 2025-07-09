import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { showSuccess } from "@/utils/toast"; // Import showSuccess for notifications

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      updateQuantity(id, value);
    }
  };

  const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleProceedToCollection = () => {
    if (totalItemsInCart > 0) {
      const moneyReceived = (totalItemsInCart * 0.5).toFixed(2); // Example: $0.50 per item
      showSuccess(`You received $${moneyReceived} for your collection!`);
      clearCart(); // Clear the cart after "collection"
    } else {
      // Optionally, show an error or info toast if cart is empty
      // showError("Your cart is empty. Add items to proceed!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Your Collection Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-muted-foreground py-10">
          <p className="text-xl mb-4">
            Your cart is empty. Let's start collecting!
          </p>
          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600"
          >
            Browse Bottles
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id} className="flex items-center p-4 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-4 flex-shrink-0"
                />
                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.type}</p>
                  </div>
                  <div className="flex items-center space-x-2 justify-end md:justify-start">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e)}
                      className="w-20 text-center"
                      min="1"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 flex-shrink-0"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
          <Card className="lg:col-span-1 p-6 h-fit sticky top-4">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-2xl">Cart Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <div className="flex justify-between text-lg font-medium">
                <span>Total Items:</span>
                <span>{totalItemsInCart}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Review your selected plastic bottles before proceeding to
                collection.
              </p>
            </CardContent>
            <CardFooter className="p-0 pt-6 flex flex-col space-y-3">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={handleProceedToCollection}
              >
                Proceed to Collection
              </Button>
              <Button variant="outline" onClick={clearCart} className="w-full">
                Clear Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CartPage;
