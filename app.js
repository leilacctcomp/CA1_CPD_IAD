// The necessary code to create and display the window in electron
//Instance of the BrowserWindow class
/**const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Create a new BrowserWindow instance
let mainWindow;
let diaryWindow;
let savedEntries = [];

// Open the developer tools
 //This line should be added before creating the window
if (process.env.NODE_ENV === 'development') {
  require('electron-debug')();
  mainWindow.webContents.openDevTools();
}
// Create the browser window
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Enable Node.js integration in the renderer process
    }
  });

  // Load the HTML file
  mainWindow.loadFile('mood-tracking.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
function createDiaryWindow() {
  diaryWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') 
    }
  });

  diaryWindow.loadFile('diary.html');

  diaryWindow.webContents.on('did-finish-load', () => {
    diaryWindow.webContents.send('getEntries');
  });

  diaryWindow.on('closed', () => {
    diaryWindow = null;
  });
}

ipcMain.on('openDiaryWindow', (event) => {
  if (!diaryWindow) {
    createDiaryWindow();
  }
});
ipcMain.on('saveEntry', (event, entry) => {
  savedEntries.push(entry);
  diaryWindow.webContents.send('showEntries', savedEntries);
});

ipcMain.on('getEntries', (event) => {
  event.sender.send('showEntries', savedEntries);
});

app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});*/
const { app, BrowserWindow } = require('electron');

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
 // mainWindow.loadFile('index.html'); 
  
  mainWindow.on('closed', () => {
    mainWindow = null;
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
