/**
 * Cruising down the right side of the road in Japan, with a pocketful of Yen (JPY),
 *  you'll be greeted by friendly bows. Starting your week on Monday, explore the rich
 *  history of East Asia. Though not a UN member state (No), Japan boasts a unique
 * culture with a timezone of UTC+09:00 and a dialing code of +81. Don't forget to pack
 *  your sense of adventure for this captivating continent (Asia)!
 */

import hightlightWord from "@/app/_animations/highlightWord";
import showHeadingAnimation from "@/app/_animations/showHeading";
import underlineAnimation from "@/app/_animations/underline";
import { useEffect, useRef } from "react";

const information = [
  ["Cruising down the right side of the road in", "Japan"],
  ["with a pocketful of", " Yen (JPY)"],
  ["Starting your week on", "Monday"],
  ["explore the rich history of", "East Asia"],
  ["Though not a UN member state", ""],
  ["and a dialing code of", "+81"],
  [
    "Don't forget to pack your sense of adventure for this captivating continent",
    "Asia",
  ],
];
const icons = Array(information.length).fill(
  "/icons/" + "united-nations-svgrepo-com.svg"
);

const CulturalPractices = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
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
        {CreateWords(information)}
      </div>
    </section>
  );
};

const CreateWords = (information: string[][]) =>
  information.map((info) =>
    info.map((subInfo, index) =>
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
                src={icons[index]}
                alt="icon"
                className=" absolute w-7 aspect-square -top-2 left-1/2 -translate-x-1/2 "
              />
            </>
          )}
        </span>
      ))
    )
  );

export default CulturalPractices;
