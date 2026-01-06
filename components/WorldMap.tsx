"use client";

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// We add a "setCountry" prop so the parent (Home page) can hear the click
interface WorldMapProps {
  onCountryClick: (name: string) => void;
}

export default function WorldMap({ onCountryClick }: WorldMapProps) {
  return (
    <div className="bg-brand-dark rounded-2xl p-4 shadow-xl border border-brand-deep overflow-hidden">
      <ComposableMap projectionConfig={{ scale: 145 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                // When clicked, send the country name back to the Home page
                onClick={() => onCountryClick(geo.properties.name)}
                style={{
                  default: { fill: "#2B7A78", outline: "none" },
                  hover: { fill: "#3AAFA9", outline: "none", cursor: "pointer" },
                  pressed: { fill: "#DEF2F1", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}