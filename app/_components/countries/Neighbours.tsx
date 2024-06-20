import showHeadingAnimation from "@/app/_animations/showHeading";
import showListItemsAnimation from "@/app/_animations/showListItemsAnimation";
import anime from "animejs";
import { useEffect, useRef } from "react";

const Neighbours = () => {
  const titleRef = useRef(null);
  const countriesListRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const undoAnimation = showHeadingAnimation(el);
    countriesListRef.current &&
      showListItemsAnimation(countriesListRef.current);
    return () => undoAnimation();
  }, []);

  return (
    <section
      id="section1-of-countries-page"
      className="w-full h-auto bg-black text-white py-8 px-2 overflow-hidden"
    >
      <h1 ref={titleRef} className="section-heading text-right">
        Neighbours
      </h1>

      <div
        ref={countriesListRef}
        className="relative w-full h-[500px] flex flex-col items-center"
      >
        {Array(14)
          .fill(null)
          .map((el, index) => (
            <div className="absolute bottom-0 p-10  opacity-0 scale-0">
              <div className="px-6 py-4 bg-black text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                Neon container {index}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Neighbours;
