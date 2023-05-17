import { useState } from 'react'
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
        <h1 className="text-3xl font-bold mb-4">PLUR</h1>
        <p className="mb-4">What are you going to do today?</p>
      </div>
    </>
  )
}

// <Update />

export default App
