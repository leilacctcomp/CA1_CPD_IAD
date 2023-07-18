// The necessary code to create and display the window in electron
//Instance of the BrowserWindow class
//const { app, BrowserWindow } = require('electron');

// Open the developer tools
/* This line should be added before creating the window
if (process.env.NODE_ENV === 'development') {
  require('electron-debug')();
  mainWindow.webContents.openDevTools();
}

// Create a new BrowserWindow instance
let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Enable Node.js integration in the renderer process
    }
  });

  // Load the HTML file
  mainWindow.loadFile('mood-tracking.html');
  //mainWindow.loadFile('diary.html');
  // Event: Emitted when the window is closed
  mainWindow.on('closed', () => {
    // Dereference the window object
    mainWindow = null;
  });
}

// Event: Emitted when Electron has finished initialization
app.on('ready', createWindow);

// Event: Emitted when all windows are closed
app.on('window-all-closed', () => {
  // Quit the app on macOS when all windows are closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Event: Emitted when the app is activated (macOS)
app.on('activate', () => {
  // Create a window if none exists when the app is activated (macOS)
  if (mainWindow === null) {
    createWindow();
  }
});*/

//Diary window
//Code to create the BrowserWindow for the diary page
// Diary window
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let diaryWindow;
let savedEntries = [];

function createDiaryWindow() {
  const diaryWindow = new BrowserWindow({
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
}

app.whenReady().then(createDiaryWindow);

ipcMain.on('saveEntry', (event, entry) => {
  savedEntries.push(entry);
  diaryWindow.webContents.send('showEntries', savedEntries);
});

ipcMain.on('getEntries', (event) => {
  event.sender.send('showEntries', savedEntries);
});