//JavaScript code that retrieves mood data, process it, and creates the charts using Chart.js
  
  // This function gets mood data for the entire month
  function getMoodDataForMonth(year, month) {
    const moodData = {
      dates: [],
      moodScores: []
    };
  
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
  
    let currentDate = new Date(firstDayOfMonth);
    while (currentDate <= lastDayOfMonth) {
      const dateString = currentDate.toISOString().split('T')[0];
      const mood = moods.find((mood) => mood.date === dateString);
      const moodScore = mood ? getMoodScore(mood.moodLevel) : 0;
  
      moodData.dates.push(dateString);
      moodData.moodScores.push(moodScore);
  
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return moodData;
  }

  // This function calculates the mood score based on mood level
  function getMoodScore(moodLevel) {
    switch (moodLevel) {
      case 'happy':
        return 5;
      case 'neutral':
        return 3;
      case 'sad':
        return 1;
      default:
        return 0;
    }
  }
  
  // This function renders the mood patterns chart
  function renderMoodPatternsChart() {
    const moodData = getMoodDataForMonth(2023, 6); // Example: July 2023
    const moodChartCanvas = document.getElementById('moodChart');
    
    // This uses the Chart.js library to create the mood charts
    const moodChart = new Chart(moodChartCanvas, {
      type: 'line',
      data: {
        labels: moodData.dates,
        datasets: [{
          label: 'Mood Scores',
          data: moodData.moodScores,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              displayFormats: {
                day: 'MMM D',
              },
            },
            title: {
              display: true,
              text: 'Date',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Mood Score',
            },
            suggestedMin: 0,
            suggestedMax: 5,
          }
        },
      },
    });
  }
  
  // Call the function to render the mood patterns chart
  renderMoodPatternsChart();
  