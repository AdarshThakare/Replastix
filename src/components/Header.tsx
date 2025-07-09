import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Recycle, Menu } from "lucide-react"; // Import Menu icon
import { useCart } from "@/context/CartContext";
import { ModeToggle } from "./ModeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Import Sheet components

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-primary text-primary-foreground pt-3 shadow-lg">
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 text-transparent bg-clip-text hover:from-green-200 hover:via-blue-200 hover:to-purple-200 transition-all duration-300"
        >
          <Recycle className="h-8 w-8 text-green-300" />
          <span>Replastix</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center  sm:gap-4">
          <Button
            variant="ghost"
            asChild
            className="text-primary-foreground hover:bg-primary/80"
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="text-primary-foreground hover:bg-primary/80"
          >
            <Link to="/info">Info</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="text-primary-foreground hover:bg-primary/80"
          >
            <Link to="/map">Map</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="relative text-primary-foreground hover:bg-primary/80"
          >
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </Button>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation (Menu Icon and Sheet) */}
        <div className="sm:hidden flex items-center ">
          <Button
            variant="ghost"
            asChild
            className="relative text-primary-foreground hover:bg-primary/80"
          >
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </Button>
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] sm:w-[300px] flex flex-col"
            >
              <h2 className="text-2xl font-bold text-primary">Navigation</h2>
              <nav className="flex flex-col">
                <Button
                  variant="ghost"
                  asChild
                  className="justify-start text-lg"
                >
                  <Link to="/">Home</Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="justify-start text-lg"
                >
                  <Link to="/info">Info</Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="justify-start text-lg"
                >
                  <Link to="/map">Map</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
