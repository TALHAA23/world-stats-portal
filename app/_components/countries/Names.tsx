import gridAnimation from "@/app/_animations/gridAnimation";
import showHeadingAnimation from "@/app/_animations/showHeading";
import { useEffect, useRef } from "react";

const names = [
  "pakistan",
  "islamic repulic of pakistan",
  "اِسلامی جمہوریہ پاکِستان",
];

const Names = () => {
  const gridRef = useRef(null);
  const titleRef = useRef(null);
  const nameHolder = useRef(null);

  useEffect(() => {
    // titleRef.current && showHeadingAnimation(titleRef.current);
    // gridRef.current &&
    //   nameHolder.current &&
    //   gridAnimation(gridRef.current, nameHolder.current, names);
  }, []);
  return (
    <section className="color1 text-color10 w-full h-auto text-white py-9 px-2">
      <h1 ref={titleRef} className="section-heading text-right">
        Know As
      </h1>
      <div className="relative w-full max-w-[700px] mx-auto my-32">
        <div ref={gridRef} className="grid gap-[2px] grid-cols-14 grid-rows-5">
          {Array(14 * 5)
            .fill(null)
            .map(() => (
              <span className="z-10 w-full aspect-square color3"></span>
            ))}
          <p
            ref={nameHolder}
            className="font--dela-gothic-one  absolute z-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-3xl sm:text-7xl w-full text-center"
          >
            Pakistan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Names;
