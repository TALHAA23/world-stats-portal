import shatteredAndIntactWordAnimation from "@/app/_animations/shatteredAndIntactWord";
import showHeadingAnimation from "@/app/_animations/showHeading";
import { useCountryData } from "@/app/_hooks/countryDataProvider";

import { useEffect, useRef } from "react";

const Capital = () => {
  const titleRef = useRef(null);
  const targetWordRef = useRef(null);
  const data = useCountryData();
  useEffect(() => {
    titleRef.current && showHeadingAnimation(titleRef.current);
    const undoAnimation =
      targetWordRef.current &&
      shatteredAndIntactWordAnimation(targetWordRef.current);
    return () => (undoAnimation ? undoAnimation() : undefined);
  }, [targetWordRef.current]);
  return (
    <section className="color4 text-color7 w-full h-auto overflow-hidden text-white py-9 px-2">
      <h1 ref={titleRef} className="section-heading text-right">
        Capital
      </h1>
      {data?.capital.length > 0 && (
        <div
          ref={targetWordRef}
          className="w-full flex items-center justify-center my-40 text-6xl sm:text-8xl font-bold capitalize"
        >
          {data.capital[0].split("").map((char: string, index: number) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      )}
    </section>
  );
};

export default Capital;

// window.addEventListener("scroll", () => {
//   if (!target.current) return;
//   const value1 =
//     target.current.getBoundingClientRect().bottom - window.innerHeight;
//   const value2 = window.innerHeight;

//   const absoluteDifference = Math.abs(value1 - value2);
//   const largerValue = Math.max(Math.abs(value1), Math.abs(value2));

//   // Handle case where both values are 0 (no difference)
//   if (
//     largerValue === 0 ||
//     (value1 < 0 && value2 > 0 && Math.abs(value1) > value2) ||
//     value1 > 0
//   ) {
//     return;
//   } else {
//     const percentageDifference = Math.min(
//       (absoluteDifference / largerValue) * 100
//     );
//     console.log((percentageDifference - 100) / 100);
//     animation.seek(animation.duration * ((percentageDifference - 100) / 100));
//   }
// });
