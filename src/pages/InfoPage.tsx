import React from "react";

const InfoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white text-center shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
            About Plastic Recycling
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Understanding the journey of plastics from waste to resource.
          </p>
        </div>
      </section>

      <div className="container mx-auto p-8 lg:p-12">
        <div className="bg-card text-card-foreground rounded-lg shadow-xl p-6 md:p-10 space-y-8">
          <p className="lead text-lg md:text-xl text-muted-foreground">
            Plastic recycling is the process of recovering waste plastic and
            reprocessing it into useful products, sometimes completely different
            in form from their original state. This process can significantly
            reduce reliance on virgin petroleum materials, lessen plastic
            pollution, and conserve valuable energy.
          </p>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Types of Plastics and Their Recycling Codes
            </h2>
            <p className="text-muted-foreground mb-4">
              Plastics are typically identified by a resin identification code
              (RIC), a number from 1 to 7, usually found within a chasing arrows
              symbol. Understanding these codes is crucial for proper recycling.
            </p>
            <ul className="list-disc list-inside space-y-3 text-foreground/80">
              <li>
                <strong>PET (Polyethylene Terephthalate) - Code 1:</strong>{" "}
                Commonly used for soda and water bottles. Highly recyclable and
                often reprocessed into new bottles, carpet fibers, and clothing.
              </li>
              <li>
                <strong>HDPE (High-Density Polyethylene) - Code 2:</strong>{" "}
                Found in milk jugs, detergent bottles, and shampoo bottles.
                Durable and widely recycled into plastic lumber, pipes, and new
                bottles.
              </li>
              <li>
                <strong>PVC (Polyvinyl Chloride) - Code 3:</strong> Used in
                pipes, window frames, and some food packaging. Less commonly
                recycled due to its complex composition and potential for
                harmful additives, often requiring specialized facilities.
              </li>
              <li>
                <strong>LDPE (Low-Density Polyethylene) - Code 4:</strong> Used
                for plastic bags, squeeze bottles, and plastic film. Often
                recycled at specific drop-off locations (e.g., grocery stores),
                not typically accepted in curbside bins.
              </li>
              <li>
                <strong>PP (Polypropylene) - Code 5:</strong> Common in yogurt
                containers, medicine bottles, and bottle caps. Increasingly
                recycled into car parts, industrial fibers, and new food
                containers.
              </li>
              <li>
                <strong>PS (Polystyrene) - Code 6:</strong> Found in disposable
                cups, foam packaging (Styrofoam), and CD cases. Difficult to
                recycle due to its lightweight and bulky nature, and often not
                accepted curbside.
              </li>
              <li>
                <strong>OTHER - Code 7:</strong> This category includes all
                other plastics, such as polycarbonate (PC), polylactide (PLA),
                and multi-layer plastics. Recycling varies greatly and is often
                not available through standard municipal programs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Why Recycle?
            </h2>
            <p className="text-muted-foreground mb-4">
              Recycling plastics offers numerous environmental and economic
              benefits:
            </p>
            <ul className="list-disc list-inside space-y-3 text-foreground/80">
              <li>
                Reduce the amount of waste sent to landfills and incinerators.
              </li>
              <li>
                Conserve natural resources like crude oil, which is used to
                produce new plastics.
              </li>
              <li>
                Save energy in the manufacturing process, as producing recycled
                plastic often requires less energy than virgin plastic.
              </li>
              <li>
                Lessen pollution and greenhouse gas emissions associated with
                plastic production and disposal.
              </li>
              <li>
                Create jobs in the recycling and manufacturing industries.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              How You Can Help
            </h2>
            <p className="text-muted-foreground mb-4">
              Your participation is key to a successful recycling program. By
              following these simple steps, you significantly contribute to the
              efficiency and effectiveness of the recycling process:
            </p>
            <ul className="list-disc list-inside space-y-3 text-foreground/80">
              <li>
                <strong>Sort Correctly:</strong> Separate plastics by their RIC
                code if your local program requires it.
              </li>
              <li>
                <strong>Clean & Dry:</strong> Rinse out containers to remove
                food residue and ensure they are dry. Contamination can hinder
                recycling.
              </li>
              <li>
                <strong>Check Local Guidelines:</strong> Recycling rules vary by
                municipality. Always check what your local recycling center
                accepts.
              </li>
              <li>
                <strong>Reduce & Reuse:</strong> The best way to manage plastic
                waste is to reduce consumption and reuse items whenever
                possible.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
