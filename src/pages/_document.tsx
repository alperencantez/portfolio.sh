import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body style={{ backgroundColor: 'rgb(48, 10, 36)', color: '#fff', fontSize: '18px' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
