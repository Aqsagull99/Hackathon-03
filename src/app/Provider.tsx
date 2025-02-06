"use client"

import React from 'react';
import { Store } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux'; 
function AppProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ReduxProvider store={Store}>
        {children}
      </ReduxProvider>
    </div>
  );
}

export default AppProvider;
