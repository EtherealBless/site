import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { EB_Garamond } from 'next/font/google';

import './globals.css';
import Header from './header';
import Popup from './popup';
import { useContext, useEffect } from 'react';
import RemarksContext, { RemarksProvider } from './contexts/remarksContext';
import Providers from './contexts/providers';

const inter = Inter({ subsets: ['latin'] });
const ebGaramond = EB_Garamond({
    subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
});

export const metadata: Metadata = {
    title: 'My blog',
    description: 'Personal blog created with Next.js',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${ebGaramond.className} mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8`}
            >
                <Providers>
                    <Header />
                    <div className='flex flex-row justify-center'>
                        <Popup side={'left'} />

                        {children}
                        <Popup side={'right'} />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
