import { COLORS } from '../styles/colors'
import {BORDER_RADUIS} from '../styles/other'
const Button = ({children, handleClick, inverted, dark, accent, primary, secondary}) => {

  const getColor = () => {
    if(dark) return COLORS.DARK
    if(accent) return COLORS.ACCENT
    if(primary) return COLORS.PRIMARY
    if(secondary) return COLORS.SECONDARY
    return COLORS.PRIMARY
  }
  const getStyle = () => {
    // backgroundcolor
    // text color
    const colorValue = getColor()
    const background = inverted ? COLORS.LIGHT : colorValue
    const color = inverted ? colorValue : COLORS.LIGHT
    
    // I more focused on making this component easy to use
    // versus this method clean
    return {
      color,
      background,
      border: `1px solid ${colorValue}`,
      borderRadius: BORDER_RADUIS.DEFAULT,
      padding:'12px 24px',
      textAlign:'center',
      cursor:'pointer'
    }
  }
  return (
    <div style={getStyle()}onClick={handleClick}>
      {inverted ? 'Inverted' : "Not Inverted"}
      {children}
    </div>
  )
}

export default Button

// {/* <Button inverted/> */}