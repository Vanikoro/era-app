import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'

function Home() {
  return (
    <Grid >
      <Grid.Row columns="2" textAlign="left" verticalAlign="middle">

        <Grid.Column>
          <Container>
            <Header as='h2'>Gestión de Flota de Camiones</Header>
            <Header.Content>
              <Grid.Row>Vehículos Disponibles</Grid.Row>
            </Header.Content>
          </Container>
        </Grid.Column>

        <Grid.Column>
          <Header as='h2'>Puntos</Header>
        </Grid.Column>

      </Grid.Row>
    </Grid>
  )
}

export default Home