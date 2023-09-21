import React from 'react';
import { Image, Container, Grid, Header } from 'semantic-ui-react';

export default function Layout(props: { children: JSX.Element }): JSX.Element {
  return (
    <Container fluid className="wrapper">
      <Grid.Row stretched>
        <Grid>
          <Grid.Row columns="2" textAlign="center" verticalAlign="middle">
            <Grid.Column width={3}>
              <Image src="/static/images/logos/logo.png" size="tiny" />
            </Grid.Column>
            <Grid.Column>
              <Header as="h1" style={{ color: 'whitesmoke' }}>
                ERA APP
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Row>
      <Grid.Row stretched>
        <Grid>
          <Grid.Row style={{ maxHeight: '58em', minHeight: '58em' }}>
            <Grid.Column>{props.children}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Row>
    </Container>
  );
}