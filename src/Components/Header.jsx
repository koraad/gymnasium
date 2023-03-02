
import styled from 'styled-components';
import Logo from '../Images/logo-icon.png'

const Header = () => {


  return (
    <Navbar>
      <Container>
        <Image src= {Logo}/>
        <Menu>
          <NavItem>Home</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Classes</NavItem>
          <NavItem>Why Us</NavItem>
          <NavItem>Pricing</NavItem>
          <NavItem>Contact Us</NavItem>
        </Menu>
      </Container>
      
    </Navbar>
  )
}

export default Header


const Navbar = styled.nav`
  background-color: #FD3C3D;
  height: 70px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  margin-top: 40px; */
`;
const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  height: 60px;
  width: auto;
  object-fit: cover;
`;
const Menu = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const NavItem = styled.li`
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
