import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Header from './components/Header';
import Text from './components/Text';

function App() {
  return (
    <div style={{padding:'20px'}}>
          ------ HEADERS ----
       <Header>H1 Header</Header>
       <Header type='h2'>H2 Header</Header>
       <Header type='h3'>H3 Header</Header>
       <Header type='h4'>H4 Header</Header>
       <Header type='h5'>H5 Header</Header>
       <Header type='h6'>H6 Header</Header>
       ------ TEXT ----
       <Text>paragraph</Text>
       <Text type='subtitle'>subtitle</Text>
       <Text type='button'>Button</Text>
       
       ------ BUTTON -----
       <Button handleClick={()=> alert('click working')}>Click me</Button>
       <Button inverted>Click me</Button>
       <Button inverted accent>Click me</Button>
       <Button accent>Click me</Button>
      

       ------ Card -----
       <Card 
         renderBody={<ul><li>     <Text>paragraph</Text>
          <Text type='subtitle'>subtitle</Text>
          <Text type='button'>Button</Text>
          
          ------ BUTTON -----
          <Button handleClick={()=> alert('click working')}>Click me</Button>
          <Button inverted>Click me</Button>
          <Button inverted accent>Click me</Button>
          <Button accent>Click me</Button>
         </li></ul>}
         renderButton={<Button secondary>Click me</Button>}/>
    </div>
  );
}

export default App;
