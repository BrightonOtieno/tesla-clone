import React ,{useState}from 'react';
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import {selectCars} from "../features/car/CarSlice";
import {useSelector} from "react-redux"
function Header() {
  const [open,setOpen] = useState(false);
  const cars = useSelector(selectCars)
  //console.log(cars)
  return (
    <Container>
        <a href="#">
          <img src="images/logo.svg"/>
        </a>
        <Menu>
            {cars && cars.map((car,index)=>(
                <a href="/#" key={index}>{car}</a>

              ) )}
          
        </Menu>
        <RightMenu>
          <a href="/#">Shop</a>
          <a href="/#">Tesla Account</a>

          <CustomMenu onClick={()=> setOpen(true) }/>
        </RightMenu>

        <BurgerNav show={open}>
          <CloseWrapper>
            <CustomClose onClick={()=> setOpen(false) }/>
          </CloseWrapper>
          {cars && cars.map((car,index)=>(
            <li><a href="/#" key={index}>{car}</a></li>

          ) )}
    
        </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;


`;
const Menu= styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;



    a{
      font-weight:600;
      text-transform:uppercase;
      padding:0 10px;
      flex-wrap:nowrap;
    
    }

    @media (max-width:768px){
      display:none;
    }

`;


const RightMenu = styled.div`

    display:flex;
    align-items:center;

    a{
      font-weight:600;
      text-transform:uppercase;
      //padding:0 10px;
      margin-right:10px;

    }
`;


const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`;

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;

`;
const CustomClose = styled(CloseIcon)`
    cursor:pointer;

`;


const BurgerNav = styled.div`
    position:fixed;
    height:100vh;
    top:0;
    //bottom:0;
    right:0;
    background:#fff;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transition:all 0.9s ease;
    //transition:transform 0.9s ease;
    transform: ${props => props.show ? 'translatex(0)' : 'translateX(100%)'
    };
    li{
      padding:15px 0;
      border-bottom:1px solid rgba(0,0,0,.2);


      a{
        font-weight:600;

      }
    }
    
`;


