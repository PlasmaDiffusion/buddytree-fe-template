import React from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';

import '../src/global.scss';

const BuddytreeApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <NextAuthProvider session={pageProps.session}>
    <Component {...pageProps} />
  </NextAuthProvider>
);

export default BuddytreeApp;
