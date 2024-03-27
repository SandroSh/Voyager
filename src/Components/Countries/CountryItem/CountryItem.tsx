
import { curCountry } from '../../../types'
import { ButtonsDiv, CountryContainer,ImagesDiv } from './CountryItem.style'

export const CountryItem = ({curCountry}:curCountry) => {
  return (
    <CountryContainer>
        <ImagesDiv>
            <img src={curCountry.flags.png} alt="Country Flag" />
        </ImagesDiv>
        <h3>{curCountry.name.official}</h3>
        <ButtonsDiv>
            <button>Select Country</button>
            <button>See Details</button>
        </ButtonsDiv>
    </CountryContainer>
  )
}
