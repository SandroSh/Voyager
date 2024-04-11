import { AirData, City } from "../../../types"
import { MainContainer, PopContainer } from "./CityItem.style"
import PopImage from '../../../assets/Population.svg'
import YesImage from '../../../assets/True.svg'
import NoImage from '../../../assets/False.svg'
export const CityItem = ({Data}: AirData) => {
  const cityData = Data as City;

  return (
    <MainContainer>
      <h1>{cityData.name}</h1>
      <PopContainer>
        <img src={PopImage} alt="humans icon" />
        <p>{cityData.population}</p>
      </PopContainer>
      <PopContainer>
        <h2>Capital City</h2>
        {
          cityData.is_capital ? <img src={YesImage} alt="Yes Icon" /> : <img src={NoImage} alt="No icon" />
        }
        
      </PopContainer>
    </MainContainer>
  )
}
