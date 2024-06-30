import Flag from "./Flag";
import SearchBar from "../SearchBar";
import MoreButton from "./MoreButton";
import { useCountryData } from "@/app/_hooks/CountryDataProvider";

const Head = () => {
  const data = useCountryData();
  return (
    <section className="relative color4 w-full h-[calc(100vh-60px)] p-2 sm:p-5">
      <Flag />
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <h1
          className={`relative w-[80%] font--dela-gothic-one text-5xl md:text-8xl text-center  before:content-['showing'] before:absolute before:text-sm before:bg-white before:px-4 before:py-1 before:rounded-full before:-translate-y-full before:font--kanit ${
            !data && "before:hidden"
          }`}
        >
          {data?.name?.common || "Search a country"}
        </h1>
        <p id="error-el" className="text-white"></p>
        <SearchBar />
        <MoreButton />
      </div>
    </section>
  );
};

export default Head;
