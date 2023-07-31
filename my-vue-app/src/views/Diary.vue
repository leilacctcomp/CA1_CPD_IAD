<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diary</title>
<link rel="stylesheet" href="diary.css"> <!--Link to the external css style-->
</head>

<body>
<div id="diary-page">
    
  <h1>Diary</h1>
    
  <!--Text area where users will write-->
  <div>
  <!--Textarea for the users to write their diary, and assigning an id to access it in the JavaScript file-->
  <textarea id="entryInput" placeholder="Write your diary entry here"></textarea>
  <!--Button to be the save button, assigning an id to access it in the JavaScript file-->
  <button id="saveButton">Save</button>
  </div>
    
  <!--Area to display the entries saved-->
  <!--This div is the container that is gonna display the saved entries, and assigning an id to access it in JavaScript-->
  <div id="entriesContainer"></div>
</div>

 <!--Link to the external JavaScript for the save functionality -->
 <script src="diary.js"></script>
</body>
</html>