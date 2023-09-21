import React from 'react';

import Home from '../views/Home';

import Layout from '../components/layout/Layout';

/*interface HomeProps {
}*/

export default function HomePage(/*props: HomeProps*/): JSX.Element {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}