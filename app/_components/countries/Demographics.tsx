import showHeadingAnimation from "@/app/_animations/showHeading";
import showSectionDetailsOneByOneAnimation from "@/app/_animations/showSectionDetailsOneByOne";
import { useEffect, useRef } from "react";

const Demographics = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    titleRef.current && showHeadingAnimation(titleRef.current);
    contentRef.current &&
      showSectionDetailsOneByOneAnimation(contentRef.current);
  }, []);
  return (
    <section className="color1 text-color10 w-full h-auto text-white py-9 px-2">
      <h1 ref={titleRef} className="section-heading text-right">
        Demographics
      </h1>
      <div ref={contentRef} className="my-20 w-fit mx-auto">
        <h1 className="text-2xl sm:text-5xl font-bold -translate-x-4 sm:-translate-x-20">
          Population
        </h1>
        <div id="speical-parent">
          <p
            id="numbers"
            data-number="23984723489"
            className="text-5xl sm:text-7xl font-bold red-text-gradient"
          >
            23984723489
          </p>
          <div
            id="custom-underline"
            className="w-0 h-[1px]  color3 rounded-full  border-2 border-red-700  shadow-[0_0_2px_#6F0505,inset_0_0_2px_#6F0505,0_0_5px_#491313,0_0_15px_#8B5252,0_0_30px_#8B5252] transition-all duration-500 ease-in-out"
          ></div>
        </div>
        <p data-delay="true" className="text-right">
          people
        </p>
        <div
          id="speical-parent"
          className="relative  my-4 w-full max-w-[400px] h-9 border-2 border-green-300  shadow-[0_0_2px_#2EF88C,inset_0_0_2px_#2EF88C,0_0_5px_#2EF88C,0_0_15px_#9EEBBE,0_0_30px_#9EEBBE] rounded-full flex items-center justify-center"
        >
          <div
            id="progress-bar"
            data-complete-percentage={84}
            className="absolute rounded-full h-full bg-green-700 left-0 z-0"
          ></div>
          <p className=" z-10">23% of world population</p>
        </div>
        <p data-delay="true" className="font-bold text-8xl text-center">
          In An
        </p>
        <h1 className="scale--0 text-2xl sm:text-5xl font-bold -translate-x-4 sm:-translate-x-20">
          Area of
        </h1>
        <div id="speical-parent">
          <p
            id="numbers"
            data-number={7849}
            className="text-5xl sm:text-7xl font-bold red-text-gradient"
          >
            7858
          </p>
          <div
            id="custom-underline"
            className="w-0 h-[1px]  color3 rounded-full  border-2 border-red-700  shadow-[0_0_2px_#6F0505,inset_0_0_2px_#6F0505,0_0_5px_#491313,0_0_15px_#8B5252,0_0_30px_#8B5252] transition-all duration-500 ease-in-out"
          ></div>
        </div>
        <p data-delay="true" className="scale--0 text-right">
          Square kilometers
        </p>
        <p className="scale--0 font-bold text-4xl sm:text-6xl text-center">
          Position on map
        </p>
        <div id="speical-parent" className="flex gap-2">
          <div>
            <h1 className="text-2xl sm:text-5xl font-bold ">Langitude</h1>
            <div>
              <p
                data-number="34"
                className="text-5xl sm:text-7xl font-bold red-text-gradient"
              >
                34
              </p>
              <div
                id="custom-underline"
                className="w-0 h-[1px]  color3 rounded-full  border-2 border-red-700  shadow-[0_0_2px_#6F0505,inset_0_0_2px_#6F0505,0_0_5px_#491313,0_0_15px_#8B5252,0_0_30px_#8B5252] transition-all duration-500 ease-in-out"
              ></div>
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-5xl font-bold ">Langitude</h1>
            <div>
              <p
                data-number="51"
                className="text-5xl sm:text-7xl font-bold red-text-gradient text-right"
              >
                51
              </p>
              <div
                id="custom-underline"
                className="w-0 h-[1px]  color3 rounded-full  border-2 border-red-700  shadow-[0_0_2px_#6F0505,inset_0_0_2px_#6F0505,0_0_5px_#491313,0_0_15px_#8B5252,0_0_30px_#8B5252] transition-all duration-500 ease-in-out"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demographics;
