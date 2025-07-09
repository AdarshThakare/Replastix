import React from "react";
import { MapPin } from "lucide-react";

const MapPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-150px)] bg-background text-foreground">
      <div className="relative w-full max-w-3xl h-80 bg-gray-200 rounded-lg shadow-xl overflow-hidden mb-8 border-4 border-primary/50">
        {/* Placeholder map image */}
        <img
          src="https://imgs.search.brave.com/VoiOUnf5U_T4THM5807ufcKel0gJOZfAsSfm62qR7Uo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXJzLmdvb2ds/ZS5jb20vc3RhdGlj/L21hcHMvaW1hZ2Vz/L2xhbmRpbmcvcmVh/Y3QtY29kZWxhYi10/aHVtYm5haWwucG5n"
          alt="Placeholder Map"
          className="w-full h-full object-cover"
        />
        {/* Optional: Add a subtle overlay or marker to make it look more like a map */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full p-2 shadow-lg animate-pulse">
          <MapPin className="h-8 w-8 text-white" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center mb-4 text-primary">
        Collection Points Map
      </h1>
      <p className="text-lg text-muted-foreground text-center max-w-2xl mb-6">
        This page is designed to display an interactive map with plastic
        collection points or allow you to set your pickup location. The image
        above is a placeholder. Integrating an actual interactive map requires a
        map service API key (e.g., Google Maps, OpenStreetMap) and a backend to
        manage location data securely.
      </p>
      <p className="text-xl font-semibold text-accent-foreground text-center mt-4 p-3 bg-accent rounded-md">
        (Exciting feature coming soon with full map integration!)
      </p>
    </div>
  );
};

export default MapPage;
