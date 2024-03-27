import { useEffect, useState } from "react";
import { useGeoLocation } from "../../CustomHooks/useGeoLocation"
import { CountryItemsContainer } from "./Countries.style"
import { CountryItem } from "./CountryItem/CountryItem"
import { useFetch } from "../../CustomHooks/useFetch";
import { CountryData, currentLocationType } from "../../types";
import { useQuery } from "@tanstack/react-query";


export const Countries = () => {
  const currentLocation = useGeoLocation();
  const [currentCountryLocation, setCurrentCountryLocation] = useState<currentLocationType>();
  const [myCountry, setMyCountry] = useState<CountryData>();
  const [countries, setCountries] = useState<CountryData[]>();
  const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${currentLocation.coordinates?.lat}&longitude=${currentLocation.coordinates?.lng}&localityLanguage=en`;
  const countriesUrl = "https://restcountries.com/v3.1/all";

  const { data: locationData } = useQuery({
    queryFn: () => useFetch(locationUrl),
    queryKey: ['CurrentLocation'],
    enabled: !!currentLocation,

  });
  const { data: dataOfCountries } = useQuery({
    queryFn: () => useFetch(countriesUrl),
    queryKey: ['countries'],
    enabled: !!countries,
    initialData: []
  });

  useEffect(() => {
    if (locationData) {
      setCurrentCountryLocation(locationData as currentLocationType);
    }
    if (dataOfCountries) {

      setCountries([...dataOfCountries as CountryData[]]);
    }
    setMyCountry(countries?.find(item => currentCountryLocation?.countryName === item.name.official))

  }, [dataOfCountries])
  return (
    <div>
      <CountryItemsContainer>
        {
          countries?.map((item, index) => {
            return <CountryItem curCountry={item} key={index} />
          })}
      </CountryItemsContainer>

    </div>
  )
}

// setCurrentCountry(data as currentLocationType);