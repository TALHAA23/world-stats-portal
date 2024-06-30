const getCountryInformation = async (countryName: string) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  return data;
};

export default getCountryInformation;
