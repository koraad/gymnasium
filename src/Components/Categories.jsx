import { ArrowForward } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Cat1 from '../Images/card-1.jpg';
import Cat2 from '../Images/card-2.jpg';
import Cat3 from '../Images/card-3.jpg';
import '../index.css'


const Categories = () => {
  return (
    <Section>
      <CatContainer>
        <Category>
          <Image id='image' src= {Cat1} />
          <Content>
            <Price>$99/PM</Price>
            <Title>Gym & fitness</Title>
            <CatButton>
              <More id='more'>More</More>
              <ArrowForward/>
            </CatButton>
          </Content>
        </Category>
        <Category>
          <Image id='image' src= {Cat2} />
          <Content>
            <Price>$150/PM</Price>
            <Title>Gym & fitness</Title>
            <CatButton>
              <More id='more'>More</More>
              <ArrowForward/>
            </CatButton>
          </Content>
        </Category>
        <Category>
          <Image id='image' src= {Cat3} />
          <Content>
            <Price>$75/PM</Price>
            <Title>Gym & fitness</Title>
            <CatButton>
              <More id='more'>More</More>
              <ArrowForward/>
            </CatButton>
          </Content>
        </Category>
      </CatContainer>
    </Section>
  )
}

export default Categories


const Section = styled.section`
  background-color: var(--primary-bg-color);
  width: 100%;
  height: auto;
  padding-bottom: 30px;
  overflow-y: visible;
`
const CatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  transform: translateY(-60px);
`
const Category = styled.div`
  height: auto;
  width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: var(--standard-transition);

  &:hover #image {
    filter: none;
    transition: var(--standard-transition);
  }
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 300px;
  filter: grayscale(1);
  transition: var(--standard-transition);
  
`

const Content = styled.div`
  background-color: var(--primary-color);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 15px;
`
const CatButton = styled.button`
  width: 100%;
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover #more {
    width: 60px;
    opacity: 1;
    transition: all 0.4s ease-in-out;
  }
`
const More = styled.p`
  opacity: 0;
  width: 0px;
  transition: all 0.4s ease-in-out;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 200;
`

const Price = styled.div`
  font-size: 24px;
`
const Title = styled.h3`
  font-size: 25px;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 900;
`