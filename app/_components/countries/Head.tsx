import Flag from "./Flag";
import SearchBar from "../SearchBar";
import MoreButton from "./MoreButton";

const Head = () => {
  return (
    <section className="relative color6 w-full h-[calc(100vh-60px)] p-2 sm:p-5">
      <Flag />
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <h1 className="relative font--dela-gothic-one text-6xl sm:text-8xl md:text-9xl before:content-['showing'] before:absolute before:text-sm before:bg-white before:px-4 before:py-1 before:rounded-full before:-translate-y-2 before:font--kanit">
          Pakistan
        </h1>
        <SearchBar />
        <MoreButton />
      </div>
    </section>
  );
};

export default Head;
