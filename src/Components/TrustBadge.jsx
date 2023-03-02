import React from 'react'
import styled from 'styled-components'

const TrustBadge = (props) => {

  return (
    <div>
      <Card>
        <props.icon fontSize='large'/>
        <Content>
          <Label>{props.title}</Label>
          <Para>{props.para}</Para>
        </Content>
      </Card>
    </div>
  )
}

export default TrustBadge


const Card = styled.div`
 
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Content = styled.div`

`;
const Label = styled.div`
 

`;
const Para = styled.div`
 

`;