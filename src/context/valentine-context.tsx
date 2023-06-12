import { createContext, useState, useEffect } from 'react';

interface ValentineContextType {
  title
}

const DEFAULT_VALUE: ValentineContextType = {
}


export const ValentineContext = createContext<ValentineContextType>(DEFAULT_VALUE);

const { Provider } = ValentineContext;

export const ValentineProvider = (props: any) => {
  return (
    <Provider value={{  }}>
      {props.children}
    </Provider>
  )
}