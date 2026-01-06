"use client";

import { useState } from "react";

interface AddUniFormProps {
  onAdd: (name: string) => void;
  selectedCountry: string;
}

export default function AddUniForm({ onAdd, selectedCountry }: AddUniFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the page from refreshing
    if (!name.trim()) return; // Don't add if the box is empty
    onAdd(name); // Send the name back to the Home page
    setName(""); // Clear the input box
  };

  return (
    <form onSubmit={handleSubmit} className="bg-brand-white p-6 rounded-xl border border-brand-primary/20 shadow-sm mb-8">
      <h3 className="text-brand-dark font-bold mb-4">
        Add University for {selectedCountry || "a Country"}
      </h3>
      <div className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter university name..."
          className="flex-1 px-4 py-2 rounded-lg border border-brand-light focus:outline-none focus:border-brand-primary text-brand-dark"
        />
        <button
          type="submit"
          disabled={!selectedCountry}
          className="bg-brand-primary text-brand-white px-6 py-2 rounded-lg font-bold hover:bg-brand-deep disabled:bg-gray-300 transition-colors"
        >
          Add
        </button>
      </div>
      {!selectedCountry && (
        <p className="text-xs text-red-400 mt-2">Please select a country on the map first!</p>
      )}
    </form>
  );
}