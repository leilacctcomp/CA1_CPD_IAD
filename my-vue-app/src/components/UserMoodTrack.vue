<template>
  <div class="mood-tracking">
    <h2>Mood Tracking</h2>
    <div class="calendar">
      <!-- Using a HTML table to represent the calendar -->
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody id="calendar-body"></tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserMoodTrack",
  data() {
    return {
      moods: [],
    }
  },
  methods: {
    handleDayClick(event) {
      const selectedDay = event.target;
      const date = selectedDay.getAttribute('data-date');
      const mood = this.getMoodForDate(new Date(date));

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
          this.moods.push(newMoodEntry);
          selectedDay.classList.add(`mood-${newMood}`);
        }
      }
    },
    // Include the definition of getMoodForDate and renderCalendar here
  },
  mounted() {
    // Render the calendar when the page is loaded
    this.renderCalendar();
  }
}
</script>

<style scoped>
  .mood-tracking {
    text-align: center;
  }
  
  .calendar {
    margin-top: 20px;
  }
  
  .calendar table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .calendar th,
  .calendar td {
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  .calendar th {
    background-color: #f2f2f2;
  }
  
  .calendar td {
    cursor: pointer;
  }
  
  .calendar .mood-happy {
    background-color: green;
    color: white;
  }
  
  .calendar .mood-neutral {
    background-color: yellow;
  }
  
  .calendar .mood-sad {
    background-color: red;
    color: white;
  }
</style>
