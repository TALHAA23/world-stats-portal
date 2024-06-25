import showHeadingAnimation from "@/app/_animations/showHeading";
import { useEffect, useRef } from "react";

const CoatofArms = () => {
  const titleRef = useRef(null);
  useEffect(() => {
    titleRef.current && showHeadingAnimation(titleRef.current);
  }, []);
  return (
    <section className="color1 text-color10 w-full h-auto text-white py-9 px-2">
      <h1 ref={titleRef} className="section-heading text-right">
        Coat of Arms
      </h1>
      <div className="w-full h-[50vh] flex items-center justify-center my-32">
        <img
          className=" w-full aspect-square max-w-[300px]"
          src="/icons/pkcoatofarms.svg"
          alt="coat of arms"
        />
      </div>
    </section>
  );
};

export default CoatofArms;
