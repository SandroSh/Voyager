import { Link } from "@tanstack/react-router"
import { MainDiv, LeftDiv, RightDiv } from "./Selecting.style"


export const Selecting = () => {
  return (
    <MainDiv>
      <Link to="/cities" style={{ width: "100%", height:'100%', textDecoration:'none'}}>
        <LeftDiv>
          <h1>Cities</h1>
        </LeftDiv>
      </Link>
      <Link to="/airport" style={{width: "100%", height:'100%', textDecoration:'none'}}>
        <RightDiv>
          <h1>Airports</h1>
        </RightDiv>
      </Link>
    </MainDiv>
  )
}
