// The necessary code to create and display the window in electron
const { app, BrowserWindow } = require('electron');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  //Electron app will load this index.html as the main page
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  fs.readFile('./data.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
