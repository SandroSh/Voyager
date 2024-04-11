import { LeftDiv, MainDiv, RightDiv,BottomDiv } from "./AirportItem.style"
import LocationIcon from '../../../assets/LocationCity.svg'
import SeaLevelIcon from '../../../assets/SeaLevelIcon.svg'
import { AirData, CountryAir } from "../../../types"

export const AirportItem = ({Data}:AirData) => {
  const myData = Data as CountryAir;
  return (

  <MainDiv>
      <LeftDiv>
        <h1>{myData.name}</h1>
        <BottomDiv>
          <img src={LocationIcon} alt="Location Icon" />
          <h2>{myData.region ||myData.city ? `${myData.region}${myData.region ? ",": ''} ${myData.city}`: 'Not Provided'}</h2>
        </BottomDiv>
      </LeftDiv>
      <RightDiv style={{alignItems:'flex-end'}}>
          <h1>{myData.iata}</h1>       
      <BottomDiv >
          <img src={SeaLevelIcon} alt="Location Icon" />
          <h2>{myData.elevation_ft ? `${myData.elevation_ft}m` : "Not Provided" }</h2>
        </BottomDiv>
      </RightDiv>
  </MainDiv>
  )
}

