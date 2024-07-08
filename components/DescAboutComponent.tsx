import React from "react";
import Desc from "./itemsData";

export default function DescAboutComponent() {
  return (
    <div>
      <h1 className="title font-bold text-4xl md:text-4xl mb-5">
        Gedung Pertenuan Desa Cangkol
      </h1>
      {Desc.AboutDesc.map((item, index) => (
        <p
          className=" my-5"
          key={index}
        >
          {item.desc}
        </p>
      ))}
    </div>
  );
}
