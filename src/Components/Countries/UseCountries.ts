import { useEffect, useState } from "react";
import { useGeoLocation } from "../../CustomHooks/useGeoLocation";
import { useFetch } from "../../CustomHooks/useFetch";
import { CountryData, currentLocationType } from "../../types";
import { useQuery } from "@tanstack/react-query";

export const useCountries = () => {
  const currentLocation = useGeoLocation();
  const [currentCountryLocation, setCurrentCountryLocation] = useState<currentLocationType>();
  const [currentCountry, setCurrentCountry] = useState<CountryData>();
  const [countries, setCountries] = useState<CountryData[]>();

  const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${currentLocation.coordinates?.lat}&longitude=${currentLocation.coordinates?.lng}&localityLanguage=en`;
  const countriesUrl = "https://restcountries.com/v3.1/all";

  const { data: locationData } = useQuery({
    queryFn: () => useFetch(locationUrl, null),
    queryKey: ["CurrentLocation"],
    enabled: !!currentLocation,
    initialData: [],
  });

  const { data: dataOfCountries } = useQuery({
    queryFn: () => useFetch(countriesUrl, null),
    queryKey: ["countries"],
    enabled: !!countries,
    initialData: [],
  });

  useEffect(() => {
    if (dataOfCountries) {
      setCountries([...dataOfCountries as CountryData[]]);
    }
  }, [dataOfCountries]);

  useEffect(() => {
    if (locationData) {
      setCurrentCountryLocation(locationData as currentLocationType);
      if (currentCountryLocation?.countryName) {
        setCurrentCountry(countries?.find(item => item.name.official === currentCountryLocation.countryName));
      }
    }
  }, [locationData, countries, currentCountry]);

  return { countries, currentCountry };
};
