import { CountryAir, CountryData, currentLocationType } from "../types";
export const useFetch = async (url: string, apiKey: string | null) => {
  let response;
  if (!apiKey) {
     response = await fetch(url);
  } else {
     response = await fetch(url, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });
  }

  if (!response.ok) {
    throw new Error(`Error fetching users: ${response.status}`);
  }

  const data: currentLocationType | CountryData[] | CountryAir[] = await response.json();

  return data;
};
