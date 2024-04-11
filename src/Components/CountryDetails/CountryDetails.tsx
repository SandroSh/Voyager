import { BigInfoContainer, ImagesContainer, ParentContainer, TitleContainer, BooleanInfosContainer, InnerContainer } from "./CountryDetails.style"
import Arrow from '../../assets/Icon.svg';
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Link } from "@tanstack/react-router";
import { BoolElement } from "./BoolElement/BoolElement";

export const CountryDetails = () => {
  const countryData = useSelector((state: RootState) => state.currentCountry.value);
  console.log(countryData);

  return (

    <ParentContainer>
      <TitleContainer>
        <Link to="/"><img src={Arrow} alt="Arrow Icon" /></Link>
        <h1>{countryData?.name.official}</h1>
        <h1>{countryData?.cca3}</h1>
      </TitleContainer>
      <ImagesContainer>
        <img src={countryData?.flags.png} alt="Country Image" />
        <img src={countryData?.coatOfArms.png} alt="Country coat of arms" />
      </ImagesContainer>
      <BigInfoContainer>
          <InnerContainer>
              <ul>
                <li>Common Name: {countryData?.name.common}</li>
                <li>Capital: {countryData?.capital}</li>
                <li>Languages: {countryData && countryData.languages ? Object.values(countryData?.languages).map((elem) =>  elem+="; "): "Not Available"}</li>
                <li>Population: {countryData?.population}</li>
                <li>Area: {countryData?.area} km²</li>
                <li>GINI Index: { countryData && countryData.gini ? Object.values(countryData?.gini)[0] : 'Not Available'}</li>
              </ul>
          </InnerContainer>
          <InnerContainer>
              <ul>
                <li>Region: {countryData?.region}</li>
                <li>Sub Region: {countryData?.subregion}</li>
                <li>Time Zone: {countryData?.timezones[0]}</li>
                <li>Latitude: {countryData?.latlng[0].toFixed(2)}</li>
                <li>Longitude: {countryData?.latlng[1].toFixed(2)}</li>
                <li>Start of week: {countryData?.startOfWeek}</li>
              </ul>
          </InnerContainer>
      </BigInfoContainer>
      <BooleanInfosContainer>
        <BoolElement  title="Independent" bool={countryData?.independent} />
        <BoolElement  title="UN Member" bool={countryData?.unMember} />
        <BoolElement  title="Landlocked" bool={countryData?.landlocked} />
      </BooleanInfosContainer>
      <BigInfoContainer>
          
      </BigInfoContainer>
    </ParentContainer>

  )
}
