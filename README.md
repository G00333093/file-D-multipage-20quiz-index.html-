<!DOCTYPE html> 
<html>
<head>
	<title>Kevins Quiz</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="js/quiz.js"></script>
</head>
<body>

    <h2 id="header_display"></h2>
    <div id="quizquestions" style="visibility: hidden;"></div>

    <div id="Footer_Display"></div>

    <br>

    <progress id="progressBar" value="0" max="20"></progress><br>

    <h2 id="General Knowledge Quiz">General Knowledge Quiz</h2> <div id="test"></div>
	
 <!-- Button to open the modal -->
<button onclick="document.getElementById('id01').style.display='block'">Sign Up</button>

<!-- The Modal (contains the Sign Up form) -->
<div id="id01" class="modal">
  <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
  <form class="modal-content animate" action="/action_page.php">
    <div class="container">
      <label><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required>

      <label><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <label><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
      <input type="checkbox" checked="checked"> Remember me
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

      <div class="clearfix">
        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>
</div>
<!-- progress bar--> 
<div id="myProgress">
  <div id="myBar">10%</div>
</div>
<!-- print button -->
<div id="printableArea">
      <h1>Print Certificate</h1>
</div>

<input type="button" onclick="printDiv('printableArea')" value="Click here to Print!" />

</body> 
</html>
