"use client"; // This is needed for interactive maps in Next.js

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// This is a standard URL for a world map data file
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMap() {
  return (
    <div className="bg-brand-dark rounded-2xl p-4 shadow-xl border border-brand-deep">
      <ComposableMap projectionConfig={{ scale: 140 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#2B7A78", // brand-deep (Unselected)
                    outline: "none",
                  },
                  hover: {
                    fill: "#3AAFA9", // brand-primary (Hover state)
                    outline: "none",
                    cursor: "pointer",
                  },
                  pressed: {
                    fill: "#DEF2F1", // brand-light (Click state)
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}