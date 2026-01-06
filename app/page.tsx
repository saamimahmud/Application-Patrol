"use client";

import { useState } from "react";
import WorldMap from "@/components/WorldMap";
import UniCard from "@/components/UniCard";
import AddUniForm from "@/components/AddUniForm";

// Move the Interface outside
interface University {
  id: number;
  name: string;
  country: string;
  deadline: string;
  status: string;
}

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("");
  
  // We now use State for the list so we can add to it!
  const [unis, setUnis] = useState<University[]>([
    { id: 1, name: "University of Oxford", country: "United Kingdom", deadline: "Jan 15, 2026", status: "In Progress" },
  ]);

  const handleAddUniversity = (name: string) => {
    const newUni: University = {
      id: Date.now(), // Unique ID based on time
      name: name,
      country: selectedCountry,
      deadline: "TBD", // Default for now
      status: "Wishlist",
    };
    setUnis([...unis, newUni]); // "...unis" means "keep all old ones and add the new one"
  };

  const filteredUnis = selectedCountry 
    ? unis.filter(uni => uni.country === selectedCountry)
    : unis;

  return (
    <main className="min-h-screen bg-brand-light p-8">
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-4xl font-bold text-brand-dark tracking-tight">Application Patrol</h1>
        <p className="text-brand-deep mt-2 font-medium">Your global study journey starts here.</p>
      </header>

      <section className="mb-12 max-w-5xl mx-auto">
        <WorldMap onCountryClick={(name) => setSelectedCountry(name)} />
      </section>

      <div className="max-w-2xl mx-auto md:mx-0">
        <AddUniForm onAdd={handleAddUniversity} selectedCountry={selectedCountry} />
      </div>

      {/* ... the rest of your grid code ... */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUnis.map((uni) => (
          <UniCard key={uni.id} {...uni} />
        ))}
      </div>
    </main>
  );
}