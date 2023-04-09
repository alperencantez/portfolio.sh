import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Ubuntu_Mono } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={ubuntuMono.className}>
      <Component {...pageProps} />
    </div>
  );
}
