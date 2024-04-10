import { useQuery } from "@tanstack/react-query"
import { useFetch } from "../../CustomHooks/useFetch"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../state/store"
import { MainContainer, UpperDiv } from "./Airport.style"
import { AirportItem } from "./AirportItem/AirportItem"
import MainLogo from '../../assets/Icon.svg'
import { Link } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { setValue } from "../../state/curCountry/curCountrySlice"
export const Airport = () => {
  const countryData = useSelector((state: RootState) => state.currentCountry.value);
  const[count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryFn: () => useFetch(`https://api.api-ninjas.com/v1/airports?country=${countryData?.cca2}`, "TQY/+Pzty+IWjVk7h4OYWA==Go9neSHewYs91nBu"),
    queryKey: ["airports"],
    enabled: !!countryData,
    initialData: [],
  })


  useEffect(() => {
    setCount(() => count +1);
    console.log(count);
    if (Array.isArray(data) && count === 1) {
      setCount(() => 0)
      if (data.length == 0) {
        toast.error(` Airports are not provided`);
      } else {
        toast.success(`${data.length} Airports Provided`)
      }
    }


  }, [data]);
  const handleClick = () => {
    dispatch(setValue(undefined));
  }

  return (
    <MainContainer>
      <Toaster />
      <UpperDiv>
        <Link to="/"><img src={MainLogo} alt="Logo icon" onClick={handleClick} /></Link>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <h1> {countryData?.name ? `Airports of ${countryData?.name.common}` : null}</h1>

        </div>
      </UpperDiv>
      {Array.isArray(data) ?
        data.map((item, index) => <AirportItem airData={item} key={index} />)
        :
        "Airports are not Avialable in this Country"

      }

    </MainContainer>
  )
}
