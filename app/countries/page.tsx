"use client";
import { useEffect } from "react";

import Head from "../_components/countries/Head";
import Neighbours from "../_components/countries/Neighbours";

// export const generateMetadata = async () => {
//   const response = await fetch("http://localhost:3000/api/ipinfo");
//   const data = response.ok ? await response.json() : false;
//   return {
//     title: data?.country || "Countries",
//   };
// };

const page = () => {
  return (
    <div>
      <Head />
      <Neighbours />
    </div>
  );
};

export default page;
