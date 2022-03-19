import React from "react"
import { Typography, CssBaseline } from "@mui/material"
import { AppContextProvider as ContextProvider } from '../src/utils/AppContext'

const App = () => {

  return (
    <div>
      <ContextProvider>
        <Typography variant="h2">Happy Coding with Material UI</Typography>
        <CssBaseline />
      </ContextProvider>
    </div>
  )
}

export default App