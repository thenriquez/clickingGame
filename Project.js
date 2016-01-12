//Global Variables
var players = document.getElementsByClassName("btn btn-default");
var score = 0;
var startTime = document.getElementById('start');
var resetGame = document.getElementById('restart');
var clock = 20;
var timeLeft;

//Loop to set count for pictures clicked and display them also disables pictures once clicked to prevent double click counts

for (var i = 0; i < players.length; i++) {
  players[i].addEventListener("click", function() {
    score = score + 1;
    this.disabled = true;
    document.getElementById("runningCount").innerHTML = score;
  });
}

//The Timer for the game display, also enables pictures to be clicked when start button clicked

function start() {
  setTimeout(function() {
    if (score < 10) {
      $("#low-score").modal("show");
      $("#append-low").html("You suck loser, think you need some practice! You clicked on " + score + " images!");
    } else if (score >= 10 && score <= 15) {
      $("#medium-score").modal("show");
      $("#append-medium").html("Not bad, not bad. You clicked on " + score + " images!");
    } else {
      $("#high-score").modal("show");
      $("#append-high").html("Nice player, you clicked " + score + " images!");
    }
  }, 20000);
  this.disabled = true;
  timeLeft = setInterval(function() {
    document.getElementById('runningTime').innerHTML = clock = clock - 1;
    if (clock <= 0) {
      document.getElementById('runningTime').innerHTML = 'Time!';
      clearInterval(interval);
    }
  }, 1000);
  for (var i = 0; i < players.length; i++) {
  players[i].removeAttribute("disabled");
}

}
startTime.addEventListener("click", start);

//Load and reload page upon restart button click

function restartGame() {
  window.location.reload();
}

resetGame.addEventListener("click", restartGame);

$("#verified").click(function() {
  $("#verified-modal").modal("show");
});