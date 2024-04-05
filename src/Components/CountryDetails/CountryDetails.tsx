import { BigInfoContainer, ImagesContainer, ParentContainer, TitleContainer, LittleInfosContainer } from "./CountryDetails.style"
import Arrow from '../../assets/Icon.svg';
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Link } from "@tanstack/react-router";





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
        <img src={countryData?.coatOfArms.svg} alt="Country coat of arms" />
      </ImagesContainer>
      <BigInfoContainer>

      </BigInfoContainer>
      <LittleInfosContainer>

      </LittleInfosContainer>
    </ParentContainer>

  )
}
