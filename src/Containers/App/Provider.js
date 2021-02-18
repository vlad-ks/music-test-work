import React, { createContext } from 'react'
import * as store from '../../store'


export const RootContext = createContext(null);

const Provider = ({ children }) => {
    return <RootContext.Provider value={{ ...store }}>{children}</RootContext.Provider>
}

export default Provider;
