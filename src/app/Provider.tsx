// import React from 'react'
// import { Store } from './redux/store';
// import { Provider } from 'react-redux';

// function Provider({
//     children,
//   }: Readonly<{
//     children: React.ReactNode;
//   }>) {
//   return (
//     <div>
//         <Provider store={Store}>    
//         {children}
//         </Provider>  
        
//         </div>
//   )
// }

// export default Provider

"use client"

import React from 'react';
import { Store } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux'; // Alias the react-redux Provider

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
