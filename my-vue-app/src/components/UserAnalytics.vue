<!--HTML code for the analytics page using the Chart.js library which creates a line chart tthat 
    displays mood patterns over time-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Analytics Page</title>
  <link rel="stylesheet" href="styles.css"><!--Link to the external css style-->
  <!-- The Chart.js library -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>
  <div class="header">
    <h1>MoodShine Analytics</h1>
  </div>
<!--Canvas to display the  mood patterns and the mood progress charts that will be rendered 
    by the Chart.js library in the JavaScript file-->
  <div class="graph-container">
    <h2>Mood Patterns Over Time</h2>
    <canvas id="moodChart"></canvas>
  </div>

  <div class="graph-container">
    <h2>Mood Progress</h2>
    <canvas id="progressChart"></canvas>
  </div>

  <script src="analytics.js"></script><!--Link to the external JavaScript file-->
</body>
</html>