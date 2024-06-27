import React from "react";

const MoreButton = () => {
  const moveToSection1 = () => {
    const section = document.querySelector("#section1-of-countries-page");
    const refArea = section?.getClientRects()[0].top || 0;
    window.scrollTo(0, refArea);
  };

  return (
    <button
      onClick={moveToSection1}
      className="absolute bottom-2 px-7 py-2 bg-transparent border-2 rounded-full border-black shadow-slate-900 hover:scale-110 hover:shadow-xl hover:-translate-y-2 transition-all duration-200"
    >
      Know more about the country
    </button>
  );
};

export default MoreButton;
