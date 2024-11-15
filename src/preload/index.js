import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  getList: () => ipcRenderer.invoke('store:get-list'),
  getItem: (itemId) => ipcRenderer.invoke('store:get-item', itemId),
  addItem: (item) => ipcRenderer.send('store:add-item', item),
  deleteItem: (item) => ipcRenderer.invoke('store:delete-item', item),
  updateItem: (item) => ipcRenderer.send('store:update-item', item),
  confirmItem: (item) => ipcRenderer.invoke('store:confirm-item', item)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
