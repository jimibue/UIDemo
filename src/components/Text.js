import { FONTS } from "../styles/font"

const Text = ({type, children}) => {
  const getStyle =()=>{
    switch (type) {
      case 'p':
        return FONTS.P
      case 'subtitle':
        return FONTS.SUBTITLE
      case 'button':
          return FONTS.BUTTON
      default:
        return FONTS.p
    }
  }
  return(
  <p style={getStyle()}>
    {children}
  </p>
  )
}

export default Text