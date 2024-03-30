import {  currentCountry} from "../../../types"
import { MainContainer, ImgContainer, ButtonsContainer  } from "./CurrentCountryItem.style"


export const CurrentCountryItem = ({currentCountry}: currentCountry) => {
   
  return (
    <MainContainer>
        <ImgContainer>
            <img src={currentCountry?.flags.png} alt="Flag" />
        </ImgContainer>
        <ButtonsContainer>
            <h3>{currentCountry?.name.common}</h3>
            <button>Select Country</button>
            <button>See Details</button>
        </ButtonsContainer>
    </MainContainer>
  )
}
