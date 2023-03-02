import React from 'react'
import styled from 'styled-components'
import '../index.css'
import { DirectionsRun, MedicalServices, Wc } from '@mui/icons-material'
import { Heading } from './Heading'
import TrustBadge from './TrustBadge'
import Image from '../Images/about-img.jpg'
import {Background} from './BackgroundImage'

const About = () => {
  return (
    <Section>
        <Heading>Our story</Heading>

        <Content>

          <Left>
            <Para>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ad, quaerat ut, dolores reiciendis sapiente iure culpa inventore recusandae impedit labore nesciunt modi blanditiis aspernatur itaque corporis, ratione ipsam repellat tempore sint unde voluptas fugiat. Atque maiores velit dolore quis consectetur ratione, officiis corporis tempora, harum quisquam nemo fugit optio accusamus, quas praesentium libero veniam id vel enim quod doloremque natus asperiores ab inventore! Nulla provident vitae similique aut maiores earum excepturi impedit. Sunt ad ipsum repellendus dolorem accusantium, nobis ab repellat dolor laboriosam incidunt doloribus cupiditate suscipit ut maiores quas ducimus neque reprehenderit officiis quod autem cum ipsa laborum!

            </Para>

            <TrustSection>
              <TrustBadge 
                title='OPEN DOOR POLICY' 
                para='Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesingus Try Lorem Ipsum Has Been The Industrys.'
                icon={Wc}
              />
              <TrustBadge 
                title='FULLY INSURED' 
                para='Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesingus Try Lorem Ipsum Has Been The Industrys.'
                icon={MedicalServices}
              />
              <TrustBadge 
                title='PERSONAL TRAINER' 
                para='Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesingus Try Lorem Ipsum Has Been The Industrys.'
                icon={DirectionsRun}
              />

              
            </TrustSection>
          </Left>

          <Background image={Image} position="100px center" attachment="scroll" size="cover" width="50%" height="100%"/>

        </Content>
    </Section>
  )
}

export default About


const Section = styled.div`
  width: 100%;
  height: auto;
  min-height: auto;
  background-color: var(--primary-bg-color);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120vh;
  margin-top: 40px;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
`;

const Para = styled.p`

`;

const TrustSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;