import Components from "./component";
import fetcher from "../_lib/fetcher";
export const generateMetadata = async () => {
  const currentCountry = await fetcher("api/ipinfo");
  return {
    title: currentCountry?.country || "Countries",
  };
};

const page = () => {
  return <Components />;
};

export default page;
