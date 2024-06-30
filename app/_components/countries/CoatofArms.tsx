import showHeadingAnimation from "@/app/_animations/showHeading";
import { useCountryData } from "@/app/_hooks/CountryDataProvider";
import { useEffect, useRef } from "react";
import NoResult from "./NoResult";

const CoatofArms = () => {
  const titleRef = useRef(null);
  const data = useCountryData();
  useEffect(() => {
    titleRef.current && showHeadingAnimation(titleRef.current);
  }, []);
  return (
    <section className="color1 text-color10 w-full h-auto text-white py-9 px-2">
      <h1 ref={titleRef} className="section-heading text-right">
        Coat of Arms
      </h1>
      {data?.coatOfArms && Object.keys(data?.coatOfArms).length > 0 ? (
        <div className="w-full h-[50vh] flex items-center justify-center my-32">
          <img
            className=" w-full aspect-square max-w-[300px]"
            src={data?.coatOfArms.svg}
            alt="coat of arms"
          />
        </div>
      ) : (
        <NoResult message="No Coat of Arms for this country" />
      )}
    </section>
  );
};

export default CoatofArms;
