// JavaScript code for the Mood Tracking page
const moods = [
    {
      date: '2023-07-01',
      moodLevel: 'happy',
      notes: 'Had a great day with friends'
    },
    {
      date: '2023-07-02',
      moodLevel: 'neutral',
      notes: 'Work was stressful today'
    },
    // Add more mood records if needed
  ];
  //Generates the calendar and assigns moods to the dates
  function renderCalendar() {
    const calendarBody = document.getElementById('calendar-body');
  
    // Get the current year and month
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
  
    // Set the calendar to display the current month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  
    let date = new Date(firstDayOfMonth);
    let calendarHTML = '';
  
    // Generate the calendar cells for each day of the month
    while (date <= lastDayOfMonth) {
      const day = date.getDate();
      const mood = getMoodForDate(date);
  
      // Generate the HTML for the day cell with mood indicator
      calendarHTML += `<td class="day ${mood}" data-date="${date.toISOString()}">${day}</td>`;
  
      // Move to the next day
      date.setDate(date.getDate() + 1);
  
      // Start a new row if it's a new week
      if (date.getDay() === 0) {
        calendarHTML += '</tr><tr>';
      }
    }
  
    // Update the calendar body with the generated HTML
    calendarBody.innerHTML = `<tr>${calendarHTML}</tr>`;
  
    // Add click event listeners to the day cells
    const dayCells = document.querySelectorAll('.day');
    dayCells.forEach((dayCell) => {
      dayCell.addEventListener('click', handleDayClick);
    });
  }
  
  function getMoodForDate(date) {
    const dateString = date.toISOString().split('T')[0];
    const mood = moods.find((mood) => mood.date === dateString);
    return mood ? `mood-${mood.moodLevel}` : '';
  }
  /**This function is gonna prompts the user to set a mood for the date if it 
   * hasn't already been set when the user clicks on a date*/
  function handleDayClick(event) {
    const selectedDay = event.target;
    const date = selectedDay.getAttribute('data-date');
    const mood = getMoodForDate(new Date(date));

    if (mood) {
      // Display mood details for the selected day
      alert(`Mood for ${date}: ${mood}`);
    } else {
      // Prompt user to set mood for the selected day
      const newMood = prompt(`Set mood for ${date}: happy, neutral, or sad`);
      const newNotes = prompt('Any notes for today?');//Prompt user to set notes for the mood
      if (newMood && ['happy', 'neutral', 'sad'].includes(newMood)) {
        const newMoodEntry = {
          date: date,
          moodLevel: newMood,
          notes: newNotes
        };
        moods.push(newMoodEntry);
        selectedDay.classList.add(`mood-${newMood}`);
      }
    }
  }

  
  // Render the calendar when the page is loaded
  document.addEventListener('DOMContentLoaded', renderCalendar);
  