import { FormEvent } from "react";
import { useCountryDataUpdater } from "../_hooks/countryDataProvider";

const SearchBar = () => {
  const updateCountryData = useCountryDataUpdater();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const searchParam = formData.get("search");
    updateCountryData(searchParam);
  };

  return (
    <form onSubmit={handleSubmit} className="w-[90%] max-w-[600px] mt-7 mb-10">
      <input
        required
        type="search"
        name="search"
        className="color3 w-full h-[50px] rounded-full px-3"
      />
    </form>
  );
};

export default SearchBar;
