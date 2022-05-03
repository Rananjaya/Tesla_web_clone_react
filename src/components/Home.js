import React from 'react'
import styled from 'styled-components';
import Section from './Section';
function Home() {
  return (
    <Container>
        <Section
        title="Model S"
        descripation="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
        <Section
        title="Model Y"
        descripation="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />

<Section
        title="Model 3"
        descripation="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />

<Section
        title="Model X"
        descripation="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
    </Container>
  )
}

export default Home

const Container = styled.div `
  height : 100vh
`