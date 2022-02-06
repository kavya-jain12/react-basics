import React from "react"

const withContext = React.createContext()

const ContextProvider = withContext.Provider
const ContextConsumer = withContext.Consumer

export { ContextProvider, ContextConsumer }