"use client";
import Capital from "./_components/countries/Capital";
import CoatofArms from "./_components/countries/CoatofArms";
import CulturalPractices from "./_components/countries/CulturalPractices";
import Demographics from "./_components/countries/Demographics";
import Head from "./_components/countries/Head";
import Names from "./_components/countries/Names";
import Neighbours from "./_components/countries/Neighbours";
import CountryDataProvider from "./_hooks/CountryDataProvider";

const page = () => {
  return (
    <CountryDataProvider>
      <Head />
      <Neighbours />
      <Demographics />
      <CulturalPractices />
      <Names />
      <Capital />
      <CoatofArms />
    </CountryDataProvider>
  );
};

export default page;
