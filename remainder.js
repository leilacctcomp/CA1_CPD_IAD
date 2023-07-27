/**In summary, this code listens for a click event on the "Add" button, retrieves the entered reminder text,
 * creates a new reminder item with a checkbox and the text, adds the item to the reminder list, and clears 
 * the input field. The code also handles the toggling of the "completed" class on the reminder item when the checkbox 
 * state changes. */
// Get references to HTML elements
    const reminderInput = document.getElementById('reminderInput'); //input field where users can enter their reminders
    const addButton = document.getElementById('addButton'); //button that triggers the addition of a new reminder
    const reminderList = document.getElementById('reminderList'); //container element where the reminders will be displayed
  
    //When the button is clicked the callback function is executed
    addButton.addEventListener('click', () => { //event listener to handle adding reminders
      const reminderText = reminderInput.value.trim(); //retrieves the text entered in the reminderInput field and trims any empty spaces
      if (reminderText !== '') { //If the text input is not empty, it creates a new reminder item
        const reminderItem = document.createElement('li'); //Create new reminder item
        const checkbox = document.createElement('input'); //Create new checkbox element
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => { //Event listener is attached to the checkbox to handle changes to its state
          /**method to add or remove the "completed" class from the reminder item based on the checked state of the checkbox */
            reminderItem.classList.toggle('completed', checkbox.checked);
        });
        //Span element to hold the reminder text content and set with the entered reminder text
        const reminderTextElement = document.createElement('span');
        reminderTextElement.textContent = reminderText;
        //The checkbox and the reminder text span are appended to the reminder item
        reminderItem.appendChild(checkbox);
        reminderItem.appendChild(reminderTextElement);
        reminderList.appendChild(reminderItem); //The completed reminder item is appended to the reminderList container
        reminderInput.value = ''; //After adding the reminder, the reminderInput field is cleared by setting its value property to an empty string
      }
    });