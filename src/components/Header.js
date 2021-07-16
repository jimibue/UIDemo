import { FONTS } from "../styles/font"

const Header = ({type, children}) => {
  const getStyle =()=>{
    switch (type) {
      case 'h1':
        return FONTS.H1
      case 'h2':
        return FONTS.H2
      case 'h3':
          return FONTS.H3
      case 'h4':
            return FONTS.H4
      case 'h5':
              return FONTS.H5
      case 'h6':
        return FONTS.H6
      default:
        return FONTS.H1
    }
  }
  return(
  <h1 style={getStyle()}>
    {children}
  </h1>
  )
}

export default Header