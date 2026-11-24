const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('kronoDesktop', {
  isElectron: true,
  platform: process.platform,
  version: '6.5.42'
});
