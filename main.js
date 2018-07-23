const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({ width: 300, height: 300 });
  win.loadURL(path.join('file://', __dirname, '/index.html'));
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  app.quit();
});
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
