import { useCountryData } from "@/app/_hooks/CountryDataProvider";

const Flag = () => {
  const data = useCountryData();
  return (
    <div className=" absolute h-[calc(100vh-60px)] flex gap-0 items-start">
      <img src="/icons/flagpole.svg" alt="flag" className="h-[95%]" />
      <img
        src={data?.flags?.svg || data?.flags?.png}
        alt={data?.flags?.alt}
        className="w-[200px] shadow-xl rounded -translate-x-1"
      />
    </div>
  );
};

export default Flag;
