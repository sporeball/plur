import { lstat } from 'node:fs/promises'
import { cwd } from 'node:process'
import { ipcRenderer } from 'electron'

import * as store from '../store.tsx'

ipcRenderer.on('set-global', (_event, ...args) => {
  const [key, value] = args;
  global[key] = value;
})

ipcRenderer.on('init-store', (_event, ...args) => {
  store.init();
})

ipcRenderer.on('main-process-message', (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args)
})

lstat(cwd()).then(stats => {
  console.log('[fs.lstat]', stats)
}).catch(err => {
  console.error(err)
})
