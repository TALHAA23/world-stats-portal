"use client";
import { useEffect } from "react";

import Head from "../_components/countries/Head";
import Neighbours from "../_components/countries/Neighbours";
import Demographics from "../_components/countries/Demographics";
import CulturalPractices from "../_components/countries/CulturalPractices";
import Names from "../_components/countries/Names";
import Capital from "../_components/countries/Capital";

// export const generateMetadata = async () => {
//   const response = await fetch("http://localhost:3000/api/ipinfo");
//   const data = response.ok ? await response.json() : false;
//   return {
//     title: data?.country || "Countries",
//   };
// };

// TODO: Currently car side, continents, currency, idd, independent, startofweek, subregion, timezone, unmember

const page = () => {
  // useEffect(() => {
  //   const getCountry = async () => {
  //     const response = await fetch(
  //       "https://restcountries.com/v3.1/name/pakistan"
  //     );
  //     console.log(await response.json());
  //   };
  //   getCountry();
  // }, []);
  return (
    <div>
      <Head />
      <Neighbours />
      <Demographics />
      <CulturalPractices />
      <Names />
      <Capital />
      <div className="h-screen"></div>
    </div>
  );
};

export default page;
