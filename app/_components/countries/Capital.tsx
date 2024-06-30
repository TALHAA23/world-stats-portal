import shatteredAndIntactWordAnimation from "@/app/_animations/shatteredAndIntactWord";
import showHeadingAnimation from "@/app/_animations/showHeading";

import { useEffect, useRef } from "react";
import NoResult from "./NoResult";
import { useCountryData } from "@/app/_hooks/CountryDataProvider";

const Capital = () => {
  const titleRef = useRef(null);
  const targetWordRef = useRef(null);
  const data = useCountryData();
  useEffect(() => {
    titleRef.current && showHeadingAnimation(titleRef.current);
    targetWordRef.current &&
      shatteredAndIntactWordAnimation(targetWordRef.current);
  }, [targetWordRef.current]);
  return (
    <section className="color4 text-color7 w-full h-auto overflow-hidden text-white py-9 px-2">
      <h1 ref={titleRef} className="section-heading text-right">
        Capital
      </h1>
      {data?.capital.length > 0 ? (
        <div
          ref={targetWordRef}
          className="w-full flex items-center justify-center my-40 text-6xl sm:text-8xl font-bold capitalize"
        >
          {data.capital[0].split("").map((char: string, index: number) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      ) : (
        <NoResult message="This country has no capital" />
      )}
    </section>
  );
};

export default Capital;
