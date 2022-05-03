import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { style } from '@mui/system';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';
function Header() {

  const [Open, setOpen] = useState(false);
   const cars = useSelector(selectCars)
   console.log("Carsss",cars);
  return (
   <Container>
    <a>
      <img src="/images/logo.svg" alt="" />
    </a>

    <Menu>
      {cars && cars.map((car,index) => (
          <p><a key={index} href="#">{car}</a></p>
      ))}
        {/* <p><a href="#">Model S</a></p>
        <p><a href="#">Model 3</a></p>
        <p><a href="#">Model X</a></p>
        <p><a href="#">Model Y</a></p> */}
    </Menu>
    <RightMenu>
         <a href="#">Shop</a>
         <a href="#">Tesla Account</a>
         <CustomeMenu onClick={()=>{
           setOpen(true)
         }}/>
    </RightMenu>
    <BurgerNav show={Open}>
      <CloseWrapper>
          <CustomClose onClick={()=>{
            setOpen(false)
          }}/> 
      </CloseWrapper>
      {cars && cars.map((car,index) => (
          <li><a key={index} href="#">{car}</a></li>
      ))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>

    </BurgerNav>
   </Container>
  )
}

export default Header

const Container = styled.div`
      min-height:60px;
      position : fixed;
      display: flex;
      align-items : center;
      justify-content : space-between;
      padding :  0 20px;
      top: 0;
      right : 0;
      left : 0;
      z-index :10;
    `
const Menu = styled.div`
display: flex;
align-items : center;
justify-content: center;
flex : 1;
p {
  font-weight: 600;
  text-transform : uppercase;
  padding 0 10px
}

@media(max-width: 768px){
  display : none;
}

`

const RightMenu = styled.div`
display: flex;
align-items : center;
a {
  font-weight: 600;
  text-transform : uppercase;
  padding 0 10px;
  margin-right : 10px
}
`
const CustomeMenu = styled(MenuIcon)`
   cursor : pointer
`

const BurgerNav = styled.div`
   position: fixed;
   top:0;
   bottom:0;
   right : 0;
   background : white;
   width: 300px;
   z-index:16;
   padding:20px;
   display:flex;
   flex-direction : column;
   text-align : start;
   list-style:none;
   transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
   transition: transform 0.2s;
   li {
     padding:15px 0;
     border-bottom: 1px solid rgba(0,0,0,.2);

     a {
       font-weight : 600;
     }
   }

`

const CustomClose = styled(CloseIcon)`
   cursor : pointer;
`

const CloseWrapper = styled.div`

display : flex;
justify-content : flex-end

`