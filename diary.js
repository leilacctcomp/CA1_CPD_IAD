//JavaScript for the save functionality for the dairy entries
const { ipcRenderer } = require('electron');

const entryInput = document.getElementById('entryInput');
const saveButton = document.getElementById('saveButton');
const entriesContainer = document.getElementById('entriesContainer');

saveButton.addEventListener('click', () => {
  const entry = entryInput.value;
  if (entry.trim() !== '') {
    // Send the entry to the main process
    ipcRenderer.send('saveEntry', entry);
    entryInput.value = '';
  }
});

// Receive saved entries from the main process
// Request saved entries when the diary page is loaded
const { ipcRenderer } = require('electron');

ipcRenderer.on('showEntries', (event, entries) => {
  entriesContainer.innerHTML = '';
  entries.forEach((entry) => {
    const entryElement = document.createElement('div');
    entryElement.textContent = entry;
    entriesContainer.appendChild(entryElement);
  });
});

ipcRenderer.send('getEntries');
