import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio"; // Import AspectRatio

interface PlasticBottle {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
}

interface PlasticBottleCardProps {
  bottle: PlasticBottle;
  onAddToCart: (bottle: PlasticBottle) => void;
}

const PlasticBottleCard: React.FC<PlasticBottleCardProps> = ({
  bottle,
  onAddToCart,
}) => {
  return (
    <Card className="w-full max-w-sm flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <img
            src={bottle.image}
            alt={bottle.name}
            className="w-full h-full object-cover rounded-t-md"
          />
        </AspectRatio>
        <div className="p-4">
          <CardTitle className="text-xl font-semibold mb-1">
            {bottle.name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {bottle.type}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {bottle.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart(bottle)}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:from-orange-600 hover:to-orange-800 transition-all duration-300 shadow-md"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlasticBottleCard;
