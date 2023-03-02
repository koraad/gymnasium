
import styled from 'styled-components'
import bgImg from '../Images/Hero-bg.jpg';
import Img from '../Images/Hero.png';
import {Btn} from '../Components/Button';
import {Background} from './BackgroundImage'

const Hero = () => {
  return (
    <Background 
    image={bgImg} 
    position="center" 
    attachment="fixed" 
    size="cover" 
    width="100%" 
    height="100%"
    style={{ display: 'flex', alignItems : 'center', justifyContent: 'center', padding: '0 20px' }}
    >
      <Content>
        <Subtitle>Gym, Dancing, and Yoga</Subtitle>
        <Title>Shape <br /> Yourself</Title>
        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. alias quas Shape Yourself adipisicing elit. alias quas Shape Yourself</Para>
        <Span>Starting from $29/mp</Span>
        <ButtonContainer>
          <Btn bgColor="transparent" color='white' hoverColor="#FD3C3D" weight="700">contact us Now</Btn>
          <Btn bgColor="transparent" color='white' hoverColor="#FD3C3D" weight="700">purchase Now</Btn>
        </ButtonContainer>
        
      </Content>
      <Image src={Img}></Image>
    </Background>
  )
}

export default Hero

const Content = styled.div`
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
const Image = styled.img`
  height: 100%;

`
const Subtitle = styled.h3`
  font-size: 25px;
  color: white;
  font-style: italic;

`
const Title = styled.h1`
  font-size: 80px;
  color: white;
  font-style: italic;
  text-transform: uppercase;
  line-height: 80px;
  font-weight: 700;
`
const Para = styled.p`
  font-size: 17px;
  font-weight: 300;
  color: white;

`
const Span = styled.span`
  font-size: 22px;
  color: #FD3C3D;
  font-style: italic;
  font-weight: 700;

`

