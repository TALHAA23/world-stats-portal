import gridAnimation from "@/app/_animations/gridAnimation";
import showHeadingAnimation from "@/app/_animations/showHeading";
import { useCountryData } from "@/app/_hooks/countryDataProvider";
import anime from "animejs";
import { useEffect, useRef, useState } from "react";

const Names = () => {
  const gridRef = useRef(null);
  const titleRef = useRef(null);
  const nameHolder = useRef(null);
  const data = useCountryData();
  const [names, setNames] = useState<null | string[]>(null);
  useEffect(() => {
    let undoAnimation: () => void;
    titleRef.current && showHeadingAnimation(titleRef.current);
    if (gridRef.current && nameHolder.current && names?.length)
      undoAnimation = gridAnimation(gridRef.current, nameHolder.current, names);
    return () => undoAnimation && undoAnimation();
  }, [names]);

  useEffect(() => {
    setNames(data ? extractNames(data) : null);
  }, [data]);

  return (
    <section className="color1 text-color10 w-full h-auto text-white py-9 px-2">
      <h1 ref={titleRef} className="section-heading text-right">
        Know As
      </h1>
      {names && (
        <div className="relative w-full max-w-[700px] mx-auto my-32">
          <div
            ref={gridRef}
            className="grid gap-[2px] grid-cols-14 grid-rows-5"
          >
            {Array(14 * 5)
              .fill(null)
              .map(() => (
                <span className="z-10 w-full aspect-square color3"></span>
              ))}
            <p
              ref={nameHolder}
              className="font--dela-gothic-one  absolute z-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-3xl sm:text-7xl w-full text-center"
            >
              {names[0]}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

const extractNames = (data: any) => {
  const names = [];
  names.push(data?.name?.common, data?.name?.official);
  for (let [key, value] of Object.entries(data?.name?.nativeName))
    names.push(value?.official);
  return names;
};

export default Names;
