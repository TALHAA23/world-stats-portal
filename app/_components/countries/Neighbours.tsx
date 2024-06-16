import { useEffect, useRef } from "react";

const Neighbours = () => {
  return (
    <section className="w-full h-screen bg-black text-white py-8 px-2 overflow-hidden">
      <h1 className=" text-5xl font--dela-gothic-one text-right animate--show-heading">
        Neighbours
      </h1>
      <div id="square"></div>
      <div className=" my-32 text-2xl">
        <p className="animate--move-name-left-to-right">country name</p>
      </div>
    </section>
  );
};

export default Neighbours;
