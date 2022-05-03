import React from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { style } from '@mui/system';
function Header() {
  return (
   <Container>
    <a>
      <img src="/images/logo.svg" alt="" />
    </a>

    <Menu>
        <p><a href="#">Model S</a></p>
        <p><a href="#">Model 3</a></p>
        <p><a href="#">Model X</a></p>
        <p><a href="#">Model Y</a></p>
    </Menu>
    <RightMenu>
         <a href="#">Shop</a>
         <a href="#">Tesla Account</a>
         <CustomeMenu/>
    </RightMenu>
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