import hightlightWord from "@/app/_animations/highlightWord";
import showHeadingAnimation from "@/app/_animations/showHeading";
import { useCountryData } from "@/app/_hooks/countryDataProvider";
import { useEffect, useRef } from "react";

const CulturalPractices = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const data = useCountryData();
  const information = data ? extractCulturalPractices(data) : null;
  useEffect(() => {
    titleRef.current && showHeadingAnimation(titleRef.current);
    contentRef.current && hightlightWord(contentRef.current);
  }, []);

  return (
    <section className="color8 text-color1 w-full h-auto text-white py-9 px-2">
      <h1 ref={titleRef} className="section-heading text-right">
        Cultural Practices
      </h1>

      <div
        ref={contentRef}
        className=" text-2xl text-justify mx-auto my-20 w-[80%] max-w-[500px] font-bold"
      >
        {information && CreateWords(information)}
      </div>
    </section>
  );
};

const CreateWords = (information: string[][]) =>
  information.map((info) =>
    info.map(
      (subInfo, index) =>
        index < info.length - 1 &&
        (index == 0 ? subInfo.split(" ") : [subInfo]).map((word) => (
          <span
            className={`relative  ${
              index == 1 && "green-text-gradient special-parent"
            }`}
          >
            {word}{" "}
            {index == 1 && word.length > 0 && (
              <>
                <span
                  id="custom-underline"
                  className=" absolute h-[1px] w-full bg-yellow-800 rounded-full left-0 border-2  border-white bottom-0 shadow-[0_0_2px_#A9A9A9,inset_0_0_2px_#A9A9A9,0_0_5px_#D1D1D1,0_0_15px_#D1D1D1,0_0_30px_#D1D1D1]"
                ></span>
                <img
                  id="icon-to-bubble-up"
                  src={"/icons/" + info[2]}
                  alt="icon"
                  className=" absolute w-7 aspect-square -top-2 left-1/2 -translate-x-1/2 "
                />
              </>
            )}
          </span>
        ))
    )
  );

const extractCulturalPractices = (data: any) => {
  const information = [];
  information.push([
    `Cruising down the ${data.car.side} side of the road in`,
    data.name.common,
    "directions-svgrepo-com.svg",
  ]);

  for (let [key, value] of Object.entries(data.currencies))
    information.push([
      "with a pocketful of",
      `${(value as any).name}(${(value as any).symbol})`,
      "coin-gold-svgrepo-com.svg",
    ]);
  information.push([
    "Starting your week on",
    data.startOfWeek,
    "earth-day-calendar-svgrepo-com.svg",
  ]);
  information.push([
    "explore the rich history of",
    data.subregion,
    "place-marker-svgrepo-com.svg",
  ]);
  information.push([
    data.unMember ? ".Is a UN member state" : "Though not a UN member state",
    "",
    "united-nations-svgrepo-com.svg",
  ]);

  information.push([
    "and a dialing code of",
    `${data.idd.root}${data.idd.suffixes[0][0]}`,
    "call-in-svgrepo-com.svg",
  ]);

  information.push([
    "Don't forget to pack your sense of adventure for this captivating continent",
    data.continents[0],
    "place-marker-svgrepo-com.svg",
  ]);
  const languages = Object.entries(data.languages).map(([key, value]) => value);
  information.push([
    "where a multitude of language(s) like",
    languages.toString(),
    "language-circle-svgrepo-com.svg",
  ]);
  return information;
};

export default CulturalPractices;
