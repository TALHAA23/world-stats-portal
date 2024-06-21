import showHeadingAnimation from "@/app/_animations/showHeading";
import showSectionDetailsOneByOneAnimation from "@/app/_animations/showSectionDetailsOneByOne";
import { useEffect, useRef } from "react";

const Demographics = () => {
  const titleRef = useRef(null);
  const populationSection = useRef(null);
  useEffect(() => {
    titleRef.current && showHeadingAnimation(titleRef.current);
    populationSection.current &&
      showSectionDetailsOneByOneAnimation(populationSection.current);
  }, []);
  return (
    <section className="color1 text-color10 w-full h-auto text-white py-9 px-2 border">
      <h1 ref={titleRef} className="section-heading text-right">
        Demographics
      </h1>
      <div className="my-20 flex flex-col items-center">
        {/* population */}
        <div ref={populationSection}>
          <h1 className="text-2xl sm:text-5xl font-bold -translate-x-4 sm:-translate-x-20">
            Population
          </h1>
          <div>
            <p className="text-5xl sm:text-7xl font-bold">23984723489</p>
            <div className="w-full h-1 color3"></div>
          </div>
          <p className="text-right">people</p>
          <div className="relative my-4 w-full h-9 border-2 border-green-300  shadow-[0_0_2px_#2EF88C,inset_0_0_2px_#2EF88C,0_0_5px_#2EF88C,0_0_15px_#9EEBBE,0_0_30px_#9EEBBE] rounded-full flex items-center justify-center">
            <div className=" absolute rounded-full h-full w-1/2 bg-green-700 left-0 z-0 "></div>
            <p className=" z-10">23% of world population</p>
          </div>
          <p className="font-bold text-8xl text-center">In An</p>
        </div>
        {/* Area */}
        <div>
          <h1 className="text-2xl sm:text-5xl font-bold -translate-x-4 sm:-translate-x-20">
            Area
          </h1>
          <div>
            <p className="text-5xl sm:text-7xl font-bold">788</p>
            <div className="w-full h-1 color3"></div>
          </div>
          <p className="text-right">Square kilometers</p>
          <p className="font-bold text-4xl sm:text-6xl text-center">
            Position on map
          </p>
        </div>
        {/* langlong */}
        <div className="flex gap-2">
          <div>
            <h1 className="text-2xl sm:text-5xl font-bold ">Langitude</h1>
            <p className="text-5xl sm:text-7xl font-bold text-right">34</p>
          </div>
          <div>
            <h1 className="text-2xl sm:text-5xl font-bold ">Langitude</h1>
            <p className="text-5xl sm:text-7xl font-bold text-right">34</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demographics;
