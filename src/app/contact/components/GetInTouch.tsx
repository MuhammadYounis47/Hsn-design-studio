"use client";

import React, { useMemo } from "react";
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

  const center = useMemo(() => ({ lat: 33.6844, lng: 73.0479 }), []);

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="w-full flex flex-col space-y-5 md:flex px-6 gap-8">
        {/* Top Title */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mt-3">
            Get in touch
          </h2>

          <p className="text-white/70 max-w-2xl mt-5 leading-relaxed">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis aliquam magnam soluta repudiandae impedit ex doloremque quas, quaerat in voluptates quae enim sequi iure voluptas exercitationem nam qui asperiores!
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nisi doloremque quod neque, amet omnis eligendi nihil. Sed eius praesentium numquam aliquid aut, tenetur quas voluptatem, consequuntur omnis esse iusto?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet eveniet deleniti. Voluptatum numquam dolore repellendus eos tempore. Labore assumenda suscipit iste. Ab unde omnis provident placeat delectus odit sunt!

          </p>
        </div>
          {/* Google Map */}
        <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 h-[80vh]">
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
    </section>
  );
}
