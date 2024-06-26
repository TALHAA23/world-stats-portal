import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import fetcher from "../_lib/fetcher";
import getCountryInformation from "../_lib/getCountryInformation";

const CountryDataContext = createContext<any>(null);
export const useCountryData = () => useContext(CountryDataContext)[0][0];
export const useCountryDataUpdater = () => useContext(CountryDataContext)[1];

const CountryDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState([]);

  const updateData = async (countryName: string) => {
    const name = countryName || (await fetcher("api/ipinfo")).country;
    const data = await getCountryInformation(name);
    console.clear();
    console.log(data);
    setData(data);
  };

  // useEffect(() => {
  //   if (data?.name?.common) document.title = data.name.common;
  // }, [data]);

  return (
    <CountryDataContext.Provider value={[data, updateData]}>
      {children}
    </CountryDataContext.Provider>
  );
};

export default CountryDataProvider;
