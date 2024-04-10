import { useDispatch } from "react-redux"
import { CountryData, currentCountry } from "../../../types"
import { OuterContainer, MainContainer, LeftContainer, ButtonsContainer } from "./CurrentCountryItem.style"
import { setValue } from "../../../state/curCountry/curCountrySlice";
import { Link } from "@tanstack/react-router";


export const CurrentCountryItem = ({ currentCountry }: currentCountry) => {

    const dispatch = useDispatch();

    const handleClick = () => {
    
        dispatch(setValue(currentCountry as CountryData))
    }
    return (
        <OuterContainer>
            <h1>Currrent Location</h1>
            <MainContainer>
                <img src={currentCountry?.flags.png} alt="Flag" />
                <LeftContainer>
                    <h2>{currentCountry?.name.common}</h2>
                    <ButtonsContainer>
                        <Link to='/selecting' ><button onClick={handleClick}>Select Country</button></Link>
                        <Link to='/countryDetails' ><button onClick={handleClick}> See Details </button></Link>
                    </ButtonsContainer>
                </LeftContainer>
            </MainContainer>
        </OuterContainer>
    )
}
