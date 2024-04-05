import { useEffect, useState } from "react";
import { useGeoLocation } from "../../CustomHooks/useGeoLocation"
import { CountryItemsContainer, UpperContainer, UpperImage } from "./Countries.style"
import { CountryItem } from "./CountryItem/CountryItem"
import { useFetch } from "../../CustomHooks/useFetch";
import { CountryData, currentLocationType } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { SearchInput } from "../SearchInput/SearchInput";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { CurrentCountryItem } from "./CurrentCountryItem/CurrentCountryItem";
import Image from '../../assets/zep.svg'
export const Countries = () => {
  const currentLocation = useGeoLocation();
  const [currentCountryLocation, setCurrentCountryLocation] = useState<currentLocationType>();
  const [currentCountry, setCurrentCountry] = useState<CountryData>();
  const [countries, setCountries] = useState<CountryData[]>();
  const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${currentLocation.coordinates?.lat}&longitude=${currentLocation.coordinates?.lng}&localityLanguage=en`;
  const countriesUrl = "https://restcountries.com/v3.1/all";
  const searchedCountry = useSelector((state: RootState) => state.search);
  const { data: locationData } = useQuery({
    queryFn: () => useFetch(locationUrl),
    queryKey: ['CurrentLocation'],
    enabled: !!currentLocation,
    initialData: []
  });
  const { data: dataOfCountries } = useQuery({
    queryFn: () => useFetch(countriesUrl),
    queryKey: ['countries'],
    enabled: !!countries,
    initialData: []
  });

  useEffect(() => {

    if (dataOfCountries) {

      setCountries([...dataOfCountries as CountryData[]]);
    }

  }, [dataOfCountries])

  useEffect(() => {
    if (locationData) {
      setCurrentCountryLocation(locationData as currentLocationType);
    }
    setCurrentCountry(countries?.find(item => currentCountryLocation?.countryName === item.name.official))

  }, [locationData, currentCountry, currentCountryLocation])


  return (
    <div>
      <UpperContainer>
        <SearchInput />
        {
          currentCountry ?
            <CurrentCountryItem currentCountry={currentCountry} />
            :
            <img src={Image} alt="Voyager Image" />
        }
      </UpperContainer>
      <CountryItemsContainer>
        {searchedCountry.value != "" ?
          countries?.filter(item => item.name.common.toLocaleLowerCase().includes(searchedCountry.value.toLocaleLowerCase())).map((country, index) => <CountryItem curCountry={country} key={index} />)
          :
          countries?.map((item, index) => {
            return <CountryItem curCountry={item} key={index} />
          })}
      </CountryItemsContainer>

    </div>
  )
}
