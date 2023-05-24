import { useState } from 'react'
import Header from './components/Header.tsx'
import NewEntryDialog from './components/NewEntryDialog.tsx'
import NewHeadmateDialog from './components/NewHeadmateDialog.tsx'
import Update from '@/components/update'

import {
  CssBaseline
} from '@mui/material'

import './App.scss'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  return (
    <>
      <CssBaseline />
      <div className='App'>
        <Header />
        <NewHeadmateDialog />
        <NewEntryDialog />
      </div>
    </>
  )
}

// <Update />

export default App
