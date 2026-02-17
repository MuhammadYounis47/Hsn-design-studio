"use client";

import React, { useMemo, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function GetInTouch() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  // Example location (Islamabad) — apni location ke lat/lng yahan set karna
  const center = useMemo(() => ({ lat: 33.6844, lng: 73.0479 }), []);



  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Top Title */}
        <div className="mb-12">
          

          <h2 className="text-4xl md:text-6xl font-semibold mt-3">
            Get in touch
          </h2>

          <p className="text-white/70 max-w-2xl mt-5 leading-relaxed">
            Tell us about your project and we’ll get back to you within 24 hours.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
         THE TITLE GOES HERE
          

          {/* Right: Map */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 min-h-105">
            {!apiKey ? (
              <div className="w-full h-full flex items-center justify-center text-white/70 p-6 text-center">
                Google Maps API Key missing. <br />
                Add it in <b>.env.local</b> as{" "}
                <b>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</b>
              </div>
            ) : !isLoaded ? (
              <div className="w-full h-full flex items-center justify-center text-white/70">
                Loading map...
              </div>
            ) : (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                options={{
                  disableDefaultUI: true,
                  zoomControl: true,
                  styles: [
                    { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
                    {
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#8a8a8a" }],
                    },
                    {
                      elementType: "labels.text.stroke",
                      stylers: [{ color: "#1d1d1d" }],
                    },
                    {
                      featureType: "road",
                      elementType: "geometry",
                      stylers: [{ color: "#2b2b2b" }],
                    },
                    {
                      featureType: "water",
                      elementType: "geometry",
                      stylers: [{ color: "#0b0b0b" }],
                    },
                  ],
                }}
              >
                <Marker position={center} />
              </GoogleMap>
            )}
          </div>
          </div>
        </div>
      
    </section>
  );
}
