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

      <Section
        title="Lowest Cost Solar Panels in America"
        descripation="Money-back gurantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />

<Section
        title="Solar for New Roof"
        descripation="Solar Roof Costs Less Than a New Roof Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />

<Section
        title="Accessories"
        descripation=""
        backgroundImg="accessories.jpg"
        leftBtnText="Order now"
        //rightBtnText=""
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height : 100vh
`