import { useEffect, useState } from "react";
import { useGeoLocation } from "../../CustomHooks/useGeoLocation";
import { useQuery } from "@tanstack/react-query";
import { CountryData, currentLocationType } from "../../types";
import { useFetch } from "../../CustomHooks/useFetch";

export const useCountries = () => {
    const currentLocation = useGeoLocation();
    const [currentCountry, setCurrentCountry] = useState<currentLocationType>();
    const [countries, setCountries] = useState<CountryData[]>();
    const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${currentLocation.coordinates?.lat}&longitude=${currentLocation.coordinates?.lng}&localityLanguage=en`;
    const countriesUrl = "https://restcountries.com/v3.1/all";
  
    const { data: locationData } = useQuery({
      queryFn: () => useFetch(locationUrl),
      queryKey: ['CurrentLocation'],
      enabled: !!currentLocation
    });
    const { data:dataOfCountries } = useQuery({
      queryFn: () => useFetch(countriesUrl),
      queryKey: ['countries'],
      enabled: !!countries,
    });
  
    useEffect(() => {
      if (locationData){
          setCurrentCountry(locationData as currentLocationType);
      }
      if(dataOfCountries){
        console.log(dataOfCountries);
        setCountries([...dataOfCountries as CountryData[]]);
      }
    }, [])

    return {currentCountry,countries }
};
