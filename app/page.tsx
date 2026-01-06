import WorldMap from "@/components/WorldMap";
import UniCard from "@/components/UniCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-light p-8">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-dark tracking-tight">Application Patrol</h1>
        <p className="text-brand-deep mt-2 font-medium">Select a country to explore your journey.</p>
      </header>

      {/* Map Section */}
      <section className="mb-12 max-w-5xl mx-auto">
        <WorldMap />
      </section>

      {/* List Section */}
      <h2 className="text-2xl font-bold text-brand-dark mb-6">Shortlisted Universities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UniCard 
          name="University of Oxford" 
          country="United Kingdom" 
          deadline="Jan 15, 2026" 
          status="In Progress" 
        />
      </div>
    </main>
  );
}