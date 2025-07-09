import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PlasticBottleCard from "./PlasticBottleCard";
import { useCart } from "@/context/CartContext";

interface PlasticBottle {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
}

const sampleBottles: PlasticBottle[] = [
  {
    id: "1",
    name: "Water Bottle",
    type: "PET",
    image:
      "https://imgs.search.brave.com/A2lECXLn--RqDbS_z8eY3rMhR_PqitxFL3xMAGMzTDs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzI5LzY2Lzc1/LzM2MF9GXzE1Mjk2/Njc1NTBfNzVqYUpk/d2NnNzBOYTlCNExx/MWpScjRoRnV5cEN4/Q0suanBn",
    description:
      "Standard clear plastic water bottle, commonly found everywhere. Recyclable under PET (Code 1).",
  },
  {
    id: "2",
    name: "Milk Jug",
    type: "HDPE",
    image:
      "https://imgs.search.brave.com/1dMt8TErADhlyK8ZF0ty40MDnY2YVs5blqrzcMsCGhk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgz/ODE4MDk3L3Bob3Rv/L3VubGFiZWxlZC1t/aWxrLWp1Zy1sYXlp/bmctb24tc2lkZS13/aXRoLXJlZmxlY3Rp/b24tb24td2hpdGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUx4dlpkcmZSQUty/aF9YM2x5SGpwaGQt/SjBxNlFILW9UYTNR/cENTeVUwQTg9",
    description:
      "Opaque plastic jug for milk or juice. Recyclable under HDPE (Code 2).",
  },
  {
    id: "3",
    name: "Detergent Bottle",
    type: "HDPE",
    image:
      "https://imgs.search.brave.com/dGN9I1hsN4b39oZxbDwMTWSUu4TPf-sapfYiukQp_Is/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wbGFz/dGljLWJvdHRsZXMt/bGlxdWlkLWRldGVy/Z2VudC1hbnRpYmFj/dGVyaWFsLWdlbC1u/YXR1cmFsLXBsYW50/LWV4dHJhY3QtcGxh/c3RpYy1ib3R0bGVz/LWxpcXVpZC1kZXRl/cmdlbnQtMzgzNDkx/Mzg1LmpwZw",
    description:
      "Heavy-duty plastic bottle for laundry detergent. Recyclable under HDPE (Code 2).",
  },
  {
    id: "4",
    name: "Soda Bottle",
    type: "PET",
    image:
      "https://imgs.search.brave.com/WivyQuqDywiDkv6GpplNSjUN1N4u_OQK69CuS9bZ6S4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8yMTIxODE1/LzQ3NDgvaS80NTAv/ZGVwb3NpdHBob3Rv/c180NzQ4Mjc1OS1z/dG9jay1waG90by1i/b3R0bGUtb2Ytc3By/aXRlLWRyaW5rLW9u/LmpwZw",
    description:
      "Clear plastic bottle for carbonated soft drinks. Recyclable under PET (Code 1).",
  },
  {
    id: "5",
    name: "Shampoo Bottle",
    type: "PP",
    image:
      "https://imgs.search.brave.com/W4jm8m3_UDgalAbcQO2Ir2JF0ULzEKsG6wXAzMyY8gI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzA4LzUzLzkw/LzM2MF9GXzEzMDg1/MzkwMjlfd1dVN05T/b3pFVGtORzNVZk84/em5pYm5lRzlDZUJS/ejAuanBn",
    description:
      "Plastic bottle for shampoo or conditioner. Often recyclable under PP (Code 5).",
  },
  {
    id: "6",
    name: "Yogurt Container",
    type: "PP",
    image:
      "https://imgs.search.brave.com/3dXL-qkngh1n2cCvhbPs5pH7LOFaGJE9B6TRkI48DRE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/OTYyMTQwNC92ZWN0/b3IvcGxhc3RpYy15/b2d1cnQtY29udGFp/bmVyLXdpdGgtcGVl/bC1vZmYtbGlkLXJl/YWxpc3RpYy12ZWN0/b3ItbW9ja3VwLXlv/Z2h1cnQtcGFja2Fn/aW5nLWN1cC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NDNv/QlkzYXd3NG5fZDUx/dy05SUZ1SjdjbS1x/aW50bURkejhucHZ3/Q3ZfTT0",
    description:
      "Small plastic container for yogurt or similar dairy products. Recyclable under PP (Code 5).",
  },
  {
    id: "7",
    name: "Cooking Oil Bottle",
    type: "PET",
    image:
      "https://imgs.search.brave.com/FosVeRVV3Ubxr-ltwRW3UTySrJ-RWJnAnhWROIaOg5w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTQv/ODk5Lzg2MC9zbWFs/bC9hLWNsZWFyLXBs/YXN0aWMtYm90dGxl/LWZpbGxlZC13aXRo/LWdvbGRlbi15ZWxs/b3ctY29va2luZy1v/aWwtc2VhbGVkLXdp/dGgtYS15ZWxsb3ct/Y2FwLXN0YW5kcy1h/Z2FpbnN0LWEtcGxh/aW4td2hpdGUtYmFj/a2dyb3VuZC1hLWd1/aWRlLXRvLWN1bGlu/YXJ5LW9pbHMtYW5k/LXRoZWlyLXVzZXMt/aW4tdGhlLWtpdGNo/ZW4tcGhvdG8uanBn",
    description:
      "Clear plastic bottle for cooking oils. Recyclable under PET (Code 1).",
  },
  {
    id: "8",
    name: "Bleach Bottle",
    type: "HDPE",
    image:
      "https://imgs.search.brave.com/RDV8LCIkolouVMdNJLgkWCrw9BMdPXsp9sANQPusyr4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3Ivc2V0LXJl/YWxpc3RpYy13aGl0/ZS1wbGFzdGljLWJv/dHRsZXMtMjYwbnct/MTA5NDU0OTgwNC5q/cGc",
    description:
      "Sturdy plastic bottle for household bleach. Recyclable under HDPE (Code 2).",
  },
];

const PlasticBottleList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [bottles] = useState<PlasticBottle[]>(sampleBottles); // Initialize with sample data
  const { addToCart } = useCart();

  const uniqueTypes = useMemo(() => {
    const types = new Set(bottles.map((bottle) => bottle.type));
    return ["All", ...Array.from(types).sort()];
  }, [bottles]);

  const filteredBottles = useMemo(() => {
    return bottles.filter((bottle) => {
      const matchesSearch =
        bottle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bottle.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === "All" || bottle.type === filterType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, filterType, bottles]);

  return (
    <div className="container mx-auto p-4">
      <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-md mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Collect & Recycle Plastic Bottles
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-3">
          Help us make a difference by collecting and recycling plastic. Browse
          our list of common plastic bottle types.
        </p>
      </section>

      <h2 className="text-3xl font-bold text-center mb-8">
        Available Plastic Bottles
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center">
        <Input
          placeholder="Search by name or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow max-w-md"
        />
        <Select onValueChange={setFilterType} value={filterType}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            {uniqueTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {filteredBottles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBottles.map((bottle) => (
            <PlasticBottleCard
              key={bottle.id}
              bottle={bottle}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      ) : (
        <p className="col-span-full text-center text-muted-foreground text-lg py-10">
          No bottles found matching your criteria. Try adjusting your search or
          filters.
        </p>
      )}
    </div>
  );
};

export default PlasticBottleList;
