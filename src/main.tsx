import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'
import theme from './theme.ts'
import GameContextProvider from 'context/gameContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
