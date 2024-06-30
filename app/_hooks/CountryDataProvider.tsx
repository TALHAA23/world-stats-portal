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
    const name = countryName;
    try {
      const data = await getCountryInformation(name);
      resetError();
      setData(data);
    } catch (err) {
      handlerError(err as Error);
    }
  };

  useEffect(() => {
    const showCurrentCountry = async () => {
      const currentCoutnry = (await fetcher("api/ipinfo"))?.country;
      try {
        const data =
          currentCoutnry && (await getCountryInformation(currentCoutnry));
        currentCoutnry && setData(data);
      } catch (err) {
        handlerError(err as Error);
      }
    };
    showCurrentCountry();
  }, []);

  const handlerError = (error: Error) => {
    const errorElement = document.querySelector(
      "#error-el"
    ) as HTMLParagraphElement;
    errorElement.innerHTML = error?.message;
  };

  const resetError = () => {
    const errorElement = document.querySelector(
      "#error-el"
    ) as HTMLParagraphElement;
    errorElement.innerHTML = "";
  };

  return (
    <CountryDataContext.Provider value={[data, updateData]}>
      {children}
    </CountryDataContext.Provider>
  );
};

export default CountryDataProvider;
