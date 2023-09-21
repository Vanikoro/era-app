import React from 'react';
// eslint-disable-next-line
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import FooterNavBar from '@/components/layout/FooterNavBar';

export default class MyDocument extends Document {
  
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/static/favicon.png" />
        </Head>
        <body>
          <Main />
          <div className="nav-footer">
            <FooterNavBar />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}