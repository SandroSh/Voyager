import { currentCountry } from "../../../types"
import { OuterContainer,  MainContainer, LeftContainer, ButtonsContainer } from "./CurrentCountryItem.style"


export const CurrentCountryItem = ({ currentCountry }: currentCountry) => {

    return (
        <OuterContainer>  
            <h1>Currrent Location</h1>
            <MainContainer>
                <img src={currentCountry?.flags.png} alt="Flag" />
                <LeftContainer>
                    <h2>{currentCountry?.name.common}</h2>
                    <ButtonsContainer>
                        <button>Select Country</button>
                        <button>See Details</button>
                    </ButtonsContainer>
                </LeftContainer>
            </MainContainer>
        </OuterContainer>
    )
}
