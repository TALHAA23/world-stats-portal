"use client";
import Head from "../_components/countries/Head";
import Neighbours from "../_components/countries/Neighbours";
import Demographics from "../_components/countries/Demographics";
import CulturalPractices from "../_components/countries/CulturalPractices";
import Names from "../_components/countries/Names";
import Capital from "../_components/countries/Capital";
import CoatofArms from "../_components/countries/CoatofArms";
import CountryDataProvider from "../_hooks/countryDataProvider";

const Components = () => {
  return (
    <div>
      <CountryDataProvider>
        <Head />
        <Neighbours />
        <Demographics />
        <CulturalPractices />
        <Names />
        <Capital />
        <CoatofArms />
      </CountryDataProvider>
    </div>
  );
};

export default Components;
