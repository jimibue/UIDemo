import { BORDER_RADUIS, SHADOW } from "../styles/other"
import Button from "./Button"
import Header from "./Header"
import Text from "./Text"

const Card = ({header, text, btn, renderBody, renderButton}) => {

   
  const getButton = ()=>{
    if(renderButton){
      return renderButton
    }
    return <Button>yo</Button>
  }
     
  const getBody = ()=>{
    if(renderBody){
      return renderBody
    }
    return       <Text>Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.</Text>
  }
  return (
    <div style={styles.container}>
      <Header type='h5'>Header</Header>

      {getBody()}
      {getButton()}
    </div>
  )


}

export default Card


const styles = {
  container: {
    padding: '16px',
    borderRadius: BORDER_RADUIS.DEFAULT,
    boxShadow: SHADOW.DEFAULT
  }
}