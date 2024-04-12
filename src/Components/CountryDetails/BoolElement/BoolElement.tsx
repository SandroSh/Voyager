import YesIcon from '../../../assets/True.svg'
import NoIcon from '../../../assets/False.svg'
import { BoolElementType } from '../../../types'


export const BoolElement = ({title, bool}:BoolElementType) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',margin:'10px' }}>
      <h2 style={{marginRight:'10px'}}>{title}</h2>
      {
        bool ?
          <img src={YesIcon} alt="Yes Icon" />
          :
          <img src={NoIcon} alt="No Icon" />
      }
    </div>
  )
}
