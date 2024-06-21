"use client";
import { useEffect } from "react";

import Head from "../_components/countries/Head";
import Neighbours from "../_components/countries/Neighbours";
import Demographics from "../_components/countries/Demographics";

// export const generateMetadata = async () => {
//   const response = await fetch("http://localhost:3000/api/ipinfo");
//   const data = response.ok ? await response.json() : false;
//   return {
//     title: data?.country || "Countries",
//   };
// };

// TODO: Currently Area, population, latlng,iDD

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
    </div>
  );
};

export default page;
