import React from "react";

import "semantic-ui-css/semantic.min.css";
import "../styles/responsive.css";
import "../styles/index.css";
import Head from "next/head";
import { Container } from "semantic-ui-react";

// eslint-disable-next-line
export default function MyApp({ Component, pageProps }: any) {
  return (
    <Container className="app-container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Container>
  );
}
