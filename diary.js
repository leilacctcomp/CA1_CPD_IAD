//JavaScript for the dairy page functionalities

const { ipcRenderer } = require('electron');

//Using the HTML elements ids set up on the diary.HTML page
const entryInput = document.getElementById('entryInput');
const saveButton = document.getElementById('saveButton');
const entriesContainer = document.getElementById('entriesContainer');
const savedEntries = [];


/*Save button event listener needed to handle the button's click event to save the diary entries.
 When the save button is clicked, the event listener function is executed.
 It gets the value from the entryInput text area using entryInput.value and assigns it to the entry variable*/
saveButton.addEventListener('click', () => {
  const entry = entryInput.value;
  if (entry.trim() !== '') {
    //This savedEntries array stores or hold the diary entries, allowing them to be displayed or processed later on as needed
    savedEntries.push(entry); //If it's not empty, the entry is pushed into the savedEntries array using the push() method
    entryInput.value = '';
    displayEntries(); //This function is called to update the display area with the newly saved entry
  }
});

/*This function is gonna render the saved diary entries on the page.
By executing the displayEntries() function, the saved diary entries are iterated through, 
and each entry is displayed as a separate div element within the entriesContainer element
*/
function displayEntries() {
  entriesContainer.innerHTML = '';
  savedEntries.forEach((entry) => { //It uses a forEach loop to iterate over each entry in the savedEntries array
    const entryElement = document.createElement('div'); //For each entry, a new div element is created using document.createElement('div')
    entryElement.textContent = entry; //The textContent property of the new created div element is set to the current entry, which will display the text content of the entry
    entriesContainer.appendChild(entryElement); //The new div element is appended to the entriesContainer element using entriesContainer.appendChild(entryElement)
  });
}

