import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import Footer
import CartPage from "./pages/CartPage";
import InfoPage from "./pages/InfoPage";
import MapPage from "./pages/MapPage";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              {" "}
              {/* Add flex container for sticky footer */}
              <Header />
              <main className="flex-grow">
                {" "}
                {/* Main content grows to push footer down */}
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/info" element={<InfoPage />} />
                  <Route path="/map" element={<MapPage />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer /> {/* Add Footer */}
            </div>
          </CartProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
