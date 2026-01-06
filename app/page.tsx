"use client"; // We need this now because we are using 'useState'

import { useState } from "react";
import WorldMap from "@/components/WorldMap";
import UniCard from "@/components/UniCard";

interface University {
  id: number;
  name: string;
  country: string;
  deadline: string;
  status: "Wishlist" | "Applied" | "Accepted" | "Rejected" | "In Progress";
}

const ALL_UNIVERSITIES: University[] = [
  { id: 1, name: "University of Oxford", country: "United Kingdom", deadline: "Jan 15, 2026", status: "In Progress" },
  { id: 2, name: "Harvard University", country: "United States of America", deadline: "Jan 01, 2026", status: "Wishlist" },
  { id: 3, name: "University of Toronto", country: "Canada", deadline: "Feb 15, 2026", status: "In Progress" },
  { id: 4, name: "Imperial College London", country: "United Kingdom", deadline: "Jan 20, 2026", status: "Applied" },
];


export default function Home() {
  // This is the "Memory" of our app. It starts as an empty string.
  const [selectedCountry, setSelectedCountry] = useState("");
  const filteredUnis = selectedCountry ? ALL_UNIVERSITIES.filter(uni => uni.country === selectedCountry) : ALL_UNIVERSITIES;

  return (
    <main className="min-h-screen bg-brand-light p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-dark tracking-tight">Application Patrol</h1>
        <p className="text-brand-deep mt-2 font-medium">
          {selectedCountry 
            ? `Viewing applications for ${selectedCountry}` 
            : "Select a country to explore your journey."}
        </p>
      </header>

      <section className="mb-12 max-w-5xl mx-auto">
        {/* We pass the 'setSelectedCountry' function into our map */}
        <WorldMap onCountryClick={(name) => setSelectedCountry(name)} />
      </section>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-brand-dark">
          {selectedCountry ? `${selectedCountry} Universities` : "All Universities"}
        </h2>
        {selectedCountry && (
          <button 
            onClick={() => setSelectedCountry("")}
            className="text-brand-deep hover:text-brand-primary text-sm font-bold underline"
          >
            Clear Selection
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredUnis.map((uni) => (
    <UniCard 
      key={uni.id} // React needs a 'key' to keep track of items in a list
      name={uni.name}
      country={uni.country}
      deadline={uni.deadline}
      status={uni.status}
    />
  ))}
  
  {/* Show a message if no universities are found for a country */}
  {filteredUnis.length === 0 && (
    <p className="text-brand-deep italic">No applications started for {selectedCountry} yet.</p>
  )}
</div>
    </main>
  );
}