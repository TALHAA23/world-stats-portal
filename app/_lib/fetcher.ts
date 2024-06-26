const fetcher = async (url: string) => {
  const response = await fetch(`http://localhost:3000/${url}`);
  const data = response.ok ? await response.json() : false;
  return data;
};

export default fetcher;
