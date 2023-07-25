// JavaScript code for the Goal Setting page
/*JavaScript code sets up an event listener for the save button. When the button is clicked, it retrieves the 
value from the input field, creates a new list item with the entered goal, appends it to the goal list, and clears 
the input field for the next goal entry. 
This allows the user to enter and save multiple goals, which are then displayed as a list on the page. */
//selects the HTML element with the id attribute of goalInput and assigns it to the goalInput variable.
//It represents the input field where the user can enter their goal
const goalInput = document.getElementById('goalInput');
//selects the HTML element with the id attribute of saveButton and assigns it to the saveButton variable.
//It represents the button that the user can click to save their goal.
const saveButton = document.getElementById('saveButton');
//selects the HTML element with the id attribute of goalList and assigns it to the goalList variable.
//It represents the unordered list (<ul>) where the saved goals will be displayed
const goalList = document.getElementById('goalList');

//adds an event listener to the saveButton element. It listens for a "click" event on the button 
//and executes the provided callback function when the event occurs.
saveButton.addEventListener('click', () => {
    /*when the save button is clicked:
const goal = goalInput.value.trim();: This line retrieves the value entered in the goalInput field 
and assigns it to the goal variable. The .trim() function removes any leading or trailing whitespace from the input*/
  const goal = goalInput.value.trim();
  //checks if the entered goal is not an empty string
  if (goal !== '') {
    /*when a non-empty goal is entered then const goalItem = document.createElement('li'); creates a new list item
     (<li>) element, which represents a single goal */
    const goalItem = document.createElement('li');
    goalItem.textContent = goal; //sets the text content of the goalItem element to the entered goal
    goalList.appendChild(goalItem); //appends the goalItem to the goalList, adding it as a new item in the list
    goalInput.value = ''; //clears the input field by setting its value to an empty string, ready for the user to enter a new goal
  }
});
