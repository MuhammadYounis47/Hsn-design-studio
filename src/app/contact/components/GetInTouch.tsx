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
      <div className="w-full  flex flex-col lg:flex-row px-6 gap-8">
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
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.383692789848!2d68.32199257473351!3d25.39196402378564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7bc2d3dde651%3A0x36e6a6d1116544dd!2sIRIS%20Training%20and%20Incubation%20Center!5e0!3m2!1sen!2s!4v1771410267879!5m2!1sen!2s" width="900" height="550" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>          </div>
       
      </div>
    </section>
  );
}
