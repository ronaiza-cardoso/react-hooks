import React from 'react'

import ThemeProvider from './Providers/ThemeProvider'

import NavBar from './components/NavBar'
import Login from './components/Login'
import Container from './components/Container'
import Lyrics from './components/Lyrics'
import Timer from './components/Timer'

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Container>
        <Login />
        <Lyrics />
        <Timer />
      </Container>
    </ThemeProvider>
  )
}

export default App
