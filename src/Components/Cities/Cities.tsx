import { useSelector } from "react-redux"
import { MainContainer, TitleDiv, ItemsContainer } from "./Cities.style"
import { CityItem } from "./CityItem/CityItem"
import { RootState } from "../../state/store"
import { useQuery } from "@tanstack/react-query"
import { useFetch } from "../../CustomHooks/useFetch"
import { Link } from "@tanstack/react-router"
import MainLogo from '../../assets/Icon.svg'

export const Cities = () => {

  const selectedCountryData = useSelector((state: RootState) => state.currentCountry.value);
  const { data } = useQuery({
    queryFn: () => useFetch(`https://api.api-ninjas.com/v1/city?country=${selectedCountryData?.cca2}&limit=30`, "TQY/+Pzty+IWjVk7h4OYWA==Go9neSHewYs91nBu"),
    queryKey: ["Cities"],
    enabled: !!selectedCountryData,
    initialData: []
  })

  const handleClick = () => {

  }
  return (
    <MainContainer>
      <TitleDiv>
        <Link to="/"><img src={MainLogo} alt="Logo icon" onClick={handleClick} /></Link>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <h1> {selectedCountryData?.name ? `Cities of ${selectedCountryData?.name.common}` : null}</h1>
        </div>
      </TitleDiv>
      <ItemsContainer>
        {
          Array.isArray(data) ?
            data.map((city, index) => <CityItem Data={city} key={index} />)
            :
            "Cities are not provided"
        }
      </ItemsContainer>
    </MainContainer>
  )
}
