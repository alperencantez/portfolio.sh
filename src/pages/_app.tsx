import { createContext, useState } from 'react';
import { Ubuntu_Mono } from 'next/font/google';
import { HistoryContext } from '@/types/root';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] });

export const MainContext = createContext<HistoryContext>({
  history: [],
  setHistory: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [history, setHistory] = useState<Array<object>>([
    {
      prompt: 'ps intro',
    },
  ]);

  return (
    <MainContext.Provider value={{ history, setHistory }}>
      <div className={ubuntuMono.className}>
        <Component {...pageProps} />
      </div>
    </MainContext.Provider>
  );
}
