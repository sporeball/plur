import { useState } from 'react'
import Header from './components/Header.tsx'
import Update from '@/components/update'

import './App.scss'

import {
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  return (
    <>
      <CssBaseline />
      <div className='App'>
        <Header />
      </div>
    </>
  )
}

// <Update />

export default App
