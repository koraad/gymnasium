import { AccessTime, Mail, LocalPhone } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Announcement = () => {
  return (
    <Background>
      <Container>
        <Left>
          <Clock fontSize="smaller"/>
          <h5>Mon to Sat : 08:00 - 15:30</h5>
        </Left>
        <Right>
          <PhoneSection>
            <Phone fontSize="smaller"/>
            <h5>+1 801 4545 87</h5>
            
          </PhoneSection>
          <EmailSection>
            <Email fontSize="smaller"/>
            <h5>contact@gmail.com</h5>
            
          </EmailSection>
        </Right>

      </Container>
      
    </Background>
  )
}

export default Announcement

const Background = styled.div`
  background-color: black;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0; */

`;
const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Clock = styled(AccessTime)`
  color: #FD3C3D;
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  font-size: medium;
  font-weight: lighter;
`;
const PhoneSection = styled(Left)`
  
`;
const EmailSection = styled(Left)`
  
`;
const Phone = styled(LocalPhone)`
  color: #FD3C3D;
`;
const Email = styled(Mail)`
  color: #FD3C3D;
`;



