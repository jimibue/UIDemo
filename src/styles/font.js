import { COLORS } from "./colors";

export const FONT_FAMILY = {
  MAIN:'Inter'
}
export const FONT_SIZES = {
   H1:'96px',
   H2:'60px',
   H3:'48px',
   H4:'34px',
   H5:'24px',
   H6:'20px',
   p: '16px',
   small:'14px'
}

export const FONTS = {
  H1: {
     color: COLORS.DARK,
     fontWeight: 600,
     fontSize:FONT_SIZES.H1,
     fontFamily: FONT_FAMILY.MAIN,
     lineHeight:'116px'

  },
  H2: {
    color: COLORS.DARK,
    fontWeight: 600,
    fontSize:FONT_SIZES.H2,
    fontFamily: FONT_FAMILY.MAIN,
    lineHeight:'72px'
 },
 H3: {
  color: COLORS.DARK,
  fontWeight: 600,
  fontSize:FONT_SIZES.H3,
  fontFamily: FONT_FAMILY.MAIN,
  lineHeight:'58px'
},
H4: {
  color: COLORS.DARK,
  fontWeight: 600,
  fontSize:FONT_SIZES.H4,
  fontFamily: FONT_FAMILY.MAIN,
  lineHeight:'41px'
},
H5: {
  color: COLORS.DARK,
  fontWeight: 600,
  fontSize:FONT_SIZES.H5,
  fontFamily: FONT_FAMILY.MAIN,
  lineHeight:'29px'
},
H6: {
  color: COLORS.DARK,
  fontWeight: 600,
  fontSize:FONT_SIZES.H6,
  fontFamily: FONT_FAMILY.MAIN,
  lineHeight:'28px'
},
P:{
  color: COLORS.DARK,
  fontWeight: 400,
  fontSize:FONT_SIZES.P,
  fontFamily: FONT_FAMILY.MAIN,
  lineHeight:'24px'
},
SUBTITLE:{
  color: COLORS.DARK,
  fontWeight: 400,
  fontSize:FONT_SIZES.small,
  fontFamily: FONT_FAMILY.MAIN,
  lineHeight:'16px'
},
BUTTON:{
  color: COLORS.DARK,
  fontWeight: 500,
  fontSize:FONT_SIZES.small,
  fontFamily: FONT_FAMILY.MAIN,
  lineHeight:'16px'
}
}