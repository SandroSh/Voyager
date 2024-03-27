import { CountryData, currentLocationType } from "../types";


export const useFetch = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
   
    throw new Error(`Error fetching users: ${response.status}`);
  }

  const data: currentLocationType | CountryData[] = await response.json();
  console.log("Fetch");
  return data;
};
