
import { Link } from '@tanstack/react-router'
import { curCountry, } from '../../../types'
import { ButtonsDiv, CountryContainer, ImagesDiv } from './CountryItem.style'
import { useDispatch } from 'react-redux';
import { setValue } from '../../../state/curCountry/curCountrySlice';



export const CountryItem = ({ curCountry }: curCountry) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (curCountry) {

      dispatch(setValue(Object.assign(curCountry)));
    }
  }
  return (
    <CountryContainer>
      <ImagesDiv>
        <img src={curCountry.flags.png} alt="Country Flag" />
      </ImagesDiv>
      <h3>{curCountry.name.common}</h3>
      <ButtonsDiv>
        <Link to='/selecting' ><button onClick={handleClick}>Select Country</button></Link>
        <Link to='/countryDetails'><button onClick={handleClick}>See Details</button></Link>
      </ButtonsDiv>
    </CountryContainer>
  )
}
