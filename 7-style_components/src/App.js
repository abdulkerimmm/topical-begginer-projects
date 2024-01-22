import './App.css';
import styled from "styled-components"
function App() {

  const Button = styled.button`

color:white;
font-size:20px;
font-weight:900;
border:2px solid #5c0011;
border-radius:8px;
padding:8px 16px;
outline:none;
cursor:pointer:
`

  const PrimaryBtn = styled(Button)`
  color:red;
  background-color: coral;
`
  const PrimaryBtnCustom = styled(PrimaryBtn)`
 color:green;
 font-size:80px;
`
const CustomTitle=({className,children})=>{
  return(
    <h1 className={className}> {children} </h1>
  
  )
}

const StyledCustomTitle=styled(CustomTitle)`
 color:#f5222d;
 font-size:50px;
 text-transform:uppercase;
`



  return (
    <div className="App">
<button>hisdqw</button>


      <Button onClick={() => {
        alert("merhaba")
      }} >merhaba</Button>

      <PrimaryBtn>primarybtn</PrimaryBtn>

      <PrimaryBtnCustom>buda buton</PrimaryBtnCustom>
      <StyledCustomTitle>sondu bu</StyledCustomTitle>
    </div>
  );
}

export default App;


