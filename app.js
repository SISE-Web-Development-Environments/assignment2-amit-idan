var context;
var shape = new Object();
var board;
var FoodBoard;
var FemaleBoard;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;

// -------images vars--------
var PandaImage = new Image();
var PandaImageL = new Image();
var PandaImageR = new Image();
var PandaImageU = new Image();
var PandaF = new Image();
var LionImage = new Image();
var TigerImage = new Image();
var BearImage = new Image();
var WolfImage = new Image();
var Leaf1 = new Image();
var cherry = new Image();
var banana = new Image();

//-------images srcs--------
PandaImage.src = "panda1.png";
PandaImageL.src = "pandaleft.png";
PandaImageR.src = "pandaright.png";
PandaImageU.src = "pandaup.png";
PandaF.src = "pandaF.png"
LionImage.src = "Lion.png";
TigerImage.src = "Tiger.png";
BearImage.src = "bear.png";
cherry.src = "cherry.png";
WolfImage.src = "alpha.png"

var PandaMusic;
var Lives;
var Kiss;
var PandaFemale;
var FemaleUp;
var Enemies;
var EnemiesOn;
var EnemiesNum;
var timer;
var CherryPower;
var PowerTime;
var UserTime;
var fivePointers;
var fifteenPointers;
var twentyfivePointers;


$(document).ready(function() {
	context = canvas.getContext("2d");

});

function Start() {
	board = [
            		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            		[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            		[4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4],
            		[4, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 4],
            		[4, 0, 4, 0, 4, 0, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4],
            		[4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4],
            		[4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 0, 4, 0, 4],
            		[4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4, 0, 4],
            		[4, 0, 4, 0, 4, 4, 0, 0, 4, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 4],
            		[4, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 4, 4],
            		[4, 0, 4, 4, 0, 0, 0, 0, 4, 4, 4, 4, 0, 4, 4, 4, 0, 0, 0, 4],
            		[4, 0, 4, 0, 0, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4],
            		[4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 4],
            		[4, 0, 4, 0, 4, 0, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4],
            		[4, 0, 4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4],
            		[4, 0, 4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4],
            		[4, 0, 4, 0, 4, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4],
            		[4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4],
            		[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            	];;
    FoodBoard = [
                        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
                        [4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4],
                        [4, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 4],
                        [4, 0, 4, 0, 4, 0, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4],
                        [4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4],
                        [4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 0, 4, 0, 4],
                        [4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4, 0, 4],
                        [4, 0, 4, 0, 4, 4, 0, 0, 4, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 4],
                        [4, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 4, 4],
                        [4, 0, 4, 4, 0, 0, 0, 0, 4, 4, 4, 4, 0, 4, 4, 4, 0, 0, 0, 4],
                        [4, 0, 4, 0, 0, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4],
                        [4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 4],
                        [4, 0, 4, 0, 4, 0, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4],
                        [4, 0, 4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4],
                        [4, 0, 4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4],
                        [4, 0, 4, 0, 4, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4],
                        [4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4],
                        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
                        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                      ];;
    FemaleBoard = [
                            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
                            [4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4],
                            [4, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 4],
                            [4, 0, 4, 0, 4, 0, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4],
                            [4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4],
                            [4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 0, 4, 0, 4],
                            [4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4, 0, 4],
                            [4, 0, 4, 0, 4, 4, 0, 0, 4, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 4],
                            [4, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 4, 4],
                            [4, 0, 4, 4, 0, 0, 0, 0, 4, 4, 4, 4, 0, 4, 4, 4, 0, 0, 0, 4],
                            [4, 0, 4, 0, 0, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4],
                            [4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 4],
                            [4, 0, 4, 0, 4, 0, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4],
                            [4, 0, 4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4],
                            [4, 0, 4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4],
                            [4, 0, 4, 0, 4, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4],
                            [4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4],
                            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
                            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                       ];;
	score = 0;
	Lives = 5;
	Showlives();
	pandacolor_color = "white";
	CherryPower = new Object();
	CherryPower.spawned = false;
	var cnt = 200;
	var food_remain = food;
    var pacman_remain = 1;
    UserTime = time;
    timer = UserTime;
    start_time = new Date();
    fivePointers = food * 0.6;
    fifteenPointers = food * 0.3;
    twentyfivePointers = food * 0.1;
    FemaleUp = true;
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 20; j++) {
		    if(board[i][j] != 4 && board[i][j] != 5 && board[i][j] != 6){
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) {
                    food_remain--;
                    var tempfood = distributeFood();
                    board[i][j] = tempfood;
                    FoodBoard[i][j] = tempfood;
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					shape.i = i;
					shape.j = j;
					pacman_remain--;
					board[i][j] = 2;
				} else {

				}
				cnt--;
			}
			}
		}
    EnemiesNum = monsters;
	setEnemies(board);
	EnemiesOn = true;
    SummonFemale();
    PandaMusic = document.getElementById("Music");
    Kiss = document.getElementById("Kiss");
    PandaMusic.play();
	while (food_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 1;
		food_remain--;
	}
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	clearInterval(interval);
	interval = setInterval(UpdatePosition, 350);
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 19 + 1);
	var j = Math.floor(Math.random() * 19 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 19 + 1);
		j = Math.floor(Math.random() * 19 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
    if (keysDown[keyUp]) {
        return 1;
    }
    if (keysDown[keyDown]) {
        return 2;
    }
    if (keysDown[keyLeft]) {
        return 3;
    }
    if (keysDown[keyRight]) {
        return 4;
    }
}

function setEnemies(Board){
    Enemies = [];
    Board[1][1] = 5;
    Enemies[0] = new Object();
    Enemies[0].x = 1;
    Enemies[0].y = 1;
    Enemies[0].num = 5;
    if(EnemiesNum == 2){
        Board[18][1] = 6;
        Enemies[1] = new Object();
        Enemies[1].x = 18;
        Enemies[1].y = 1;
        Enemies[1].num = 6;
    }
    if(EnemiesNum == 3){
        Board[18][1] = 6;
        Enemies[1] = new Object();
        Enemies[1].x = 18;
        Enemies[1].y = 1;
        Enemies[1].num = 6;
        Board[18][18] = 7;
        Enemies[2] = new Object();
        Enemies[2].x = 18;
        Enemies[2].y = 18;
        Enemies[2].num = 7;
    }
    if(EnemiesNum == 4){
        Board[18][1] = 6;
        Enemies[1] = new Object();
        Enemies[1].x = 18;
        Enemies[1].y = 1;
        Enemies[1].num = 6;
        Board[18][18] = 7;
        Enemies[2] = new Object();
        Enemies[2].x = 18;
        Enemies[2].y = 18;
        Enemies[2].num = 7;
        Board[1][18] = 8;
        Enemies[3] = new Object();
        Enemies[3].x = 1;
        Enemies[3].y = 18;
        Enemies[3].num = 8;
    }
}

function Draw(x) {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
    lblTime.value = Math.floor(UserTime);
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 20; j++) {
			var center = new Object();
			center.x = i * 28 + 50;
			center.y = j * 28 + 25;
			if (board[i][j] == 2) { // pacman place
			switch(x){
			    case 1:{
			        context.drawImage(PandaImageU,center.x -37, center.y -37, canvas.width / 20, canvas.height / 20);
			        break;
			    }
			    case 2:{
                    context.drawImage(PandaImage,center.x -37, center.y -37, canvas.width / 20, canvas.height / 20);
                	break;
                }
                case 3:{
                   context.drawImage(PandaImageL,center.x -37, center.y -37, canvas.width / 20, canvas.height / 20);
                   break;
                }
                case 4:{
                  context.drawImage(PandaImageR,center.x -37, center.y -37, canvas.width / 20, canvas.height / 20);
                  break;
                }
                default:{
                        context.drawImage(PandaImage,center.x -37, center.y -37, canvas.width / 20, canvas.height / 20);
                        break;
                }
			}

			} else if (board[i][j] == 10 || (FoodBoard[i][j] == 10 && board[i][j] == 0)) { // 5 points ball place
                context.beginPath();
                context.arc(center.x - 20, center.y - 20, 5, 0, 2 * Math.PI); // circle
                context.fillStyle = points5; //color
                context.fill();
            } else if (board[i][j] == 11 || (FoodBoard[i][j] == 11 && board[i][j] == 0)) { // 15 points ball place
                context.beginPath();
                context.arc(center.x - 20, center.y - 20, 5, 0, 2 * Math.PI); // circle
                context.fillStyle = points15; //color
                context.fill();
            } else if (board[i][j] == 12 || (FoodBoard[i][j] == 12 && board[i][j] == 0)) { // 25 points ball place
                context.beginPath();
                context.arc(center.x - 20, center.y - 20, 5, 0, 2 * Math.PI); // circle
                context.fillStyle = points25; //color
                context.fill();
			}else if((board[i][j] == 13 || FemaleBoard[i][j] == 13) && FemaleUp) { // 50 points ball place
                context.drawImage(PandaF,center.x -37, center.y -37, canvas.width / 20, canvas.height / 20);
            }else if((board[i][j] == 14 || FoodBoard[i][j] == 14)) { // 50 points ball place
                context.drawImage(cherry,center.x -37, center.y -37, canvas.width / 20, canvas.height / 20);
            }else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 20, 20);
				context.fillStyle = "brown"; //color
				context.fill();
			}else if (board[i][j] == 5) {
             	context.drawImage(LionImage,center.x -37, center.y -37, canvas.width / 20, canvas.height / 20);
            }else if (board[i][j] == 6) {
                context.drawImage(TigerImage,center.x -37, center.y -37, canvas.width / 20, canvas.height / 20);
            }else if (board[i][j] == 7) {
                context.drawImage(BearImage,center.x -42, center.y -42, canvas.width / 15, canvas.height / 15);
            }else if (board[i][j] == 8) {
                context.drawImage(WolfImage,center.x -37, center.y -37, canvas.width / 25, canvas.height / 25);
            }
		}
	}
}

function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var currentTime = new Date();
    let Timewithpower = (currentTime - PowerTime) / 1000;
	if(Timewithpower > 5){
	    EnemiesOn = true;
	}
	if(UserTime<=30 && !CherryPower.spawned){
	    spawnCherry();
	}
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 19 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 19 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 10 || FoodBoard[shape.i][shape.j]== 10) {
    		score+= 5;
    		FoodBoard[shape.i][shape.j]=0;
    		board[shape.i][shape.j] = 0;
    }
    if (board[shape.i][shape.j] == 11 || FoodBoard[shape.i][shape.j]== 11) {
            score+= 15;
            FoodBoard[shape.i][shape.j]=0;
            board[shape.i][shape.j] = 0;
    }
    if (board[shape.i][shape.j] == 12 || FoodBoard[shape.i][shape.j]== 12) {
            score+= 25;
            FoodBoard[shape.i][shape.j]=0;
            board[shape.i][shape.j] = 0;
    }
    if (board[shape.i][shape.j] == 13 || FemaleBoard[shape.i][shape.j] == 13) {
            score+= 50;
            FemaleUp = false;
            Kiss.play();
            FemaleBoard[shape.i][shape.j] = 0;
            board[shape.i][shape.j] = 0;
    }
    if (board[shape.i][shape.j] == 14 || FoodBoard[shape.i][shape.j] == 14) {
                FoodBoard[shape.i][shape.j] = 0;
                board[shape.i][shape.j] = 0;
                EnemiesOn = false;
                PowerTime = new Date();
    }
    for (let e = 0; e < EnemiesNum; e++){
    	    if(Enemies[e].x == shape.i && Enemies[e].y == shape.j){
    	    PandaMusic.pause();
    	    if(Lives == 1)
    	    {
    	      loselife(e);
    	      window.alert("Loser!");
    	      window.clearInterval(interval);
    	    }
    	    else{
    	      loselife(e);
    	      window.alert("Watch out for those predators! Pandas are tasty, sadly for you!\nLives left:"+Lives);
    	    }
            PandaMusic.play();
            resetEnemies();
            setEnemies(board);
            board[shape.i][shape.j] = 0;
            var emptyCell = findRandomEmptyCell(board);
            board[emptyCell[0]][emptyCell[1]] = 2;
            shape.i = emptyCell[0];
            shape.j = emptyCell[1];

            break;
      }
    }
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
    time_elapsed = (currentTime - start_time) / 1000;
    UserTime = timer - time_elapsed;
    if (FemaleUp){
            moveFemalepanda();
    }
    if (EnemiesOn){
        movePredators();
    }
    if (UserTime <= 0) {
        if(score>100){
            window.alert("Winner!!!");
            window.clearInterval(interval);
        }else{
            window.alert("You are better than "+score+" points!");
            window.clearInterval(interval);
        }
    }
    else {
		Draw(x);
	}
}

function exit(){
    PandaMusic.pause();
    window.clearInterval(interval);
}

function loselife(num){
  if(num==0)
  {
    Lives--;
    $("#"+(Lives+1)).hide();
    Lives--;
    $("#"+(Lives+1)).hide();
    score = score - 20;
  }
  else{
    Lives--;
    $("#"+(Lives+1)).hide();
    score = score - 10;
  }

}

function Showlives(){
    for(let i=1; i<6; i++)
    {
     $("#"+i).show();
    }
}


function movePredators() {
    for (let e = 0; e < EnemiesNum; e++) {
    	var ParOnX = Enemies[e].x - shape.i;
    	var ParOnY = Enemies[e].y - shape.j;
    	var ParXY = Math.abs(ParOnX) - Math.abs(ParOnY);
    	if (ParXY > 0 && ParOnX > 0) { // go left
    		if (board[Enemies[e].x-1][Enemies[e].y] != 4){
    			board[Enemies[e].x][Enemies[e].y] = 0;
    			board[Enemies[e].x-1][Enemies[e].y] = Enemies[e].num;
    			Enemies[e].x = Enemies[e].x-1;
    		} else if(ParOnY > 0 && board[Enemies[e].x][Enemies[e].y-1] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x][Enemies[e].y-1] = Enemies[e].num;
                Enemies[e].y = Enemies[e].y-1;
            }else if(ParOnY < 0 && board[Enemies[e].x][Enemies[e].y+1] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x][Enemies[e].y+1] = Enemies[e].num;
                Enemies[e].y = Enemies[e].y+1;
            } else if(board[Enemies[e].x+1][Enemies[e].y] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x+1][Enemies[e].y] = Enemies[e].num;
                Enemies[e].x = Enemies[e].x+1;
            }else if(board[Enemies[e].x][Enemies[e].y-1] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x][Enemies[e].y-1] = Enemies[e].num;
                Enemies[e].y = Enemies[e].y-1;
            }
    	} else if(ParXY > 0 && ParOnX < 0){
            if (board[Enemies[e].x+1][Enemies[e].y] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x+1][Enemies[e].y] = Enemies[e].num;
                Enemies[e].x = Enemies[e].x+1;
            } else if(ParOnY > 0 && board[Enemies[e].x][Enemies[e].y-1] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x][Enemies[e].y-1] = Enemies[e].num;
                Enemies[e].y = Enemies[e].y-1;
            }else if(ParOnY < 0 && board[Enemies[e].x][Enemies[e].y+1] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x][Enemies[e].y+1] = Enemies[e].num;
                Enemies[e].y = Enemies[e].y+1;
            }else if(board[Enemies[e].x-1][Enemies[e].y] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x-1][Enemies[e].y] = Enemies[e].num;
                Enemies[e].x = Enemies[e].x-1;
            }
        }else if(ParXY < 0 && ParOnY < 0){
            if(board[Enemies[e].x][Enemies[e].y+1] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x][Enemies[e].y+1] = Enemies[e].num;
                Enemies[e].y = Enemies[e].y+1;
            }else if(ParOnX > 0 && board[Enemies[e].x-1][Enemies[e].y] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x-1][Enemies[e].y] = Enemies[e].num;
                Enemies[e].x = Enemies[e].x-1;
            }else if(board[Enemies[e].x+1][Enemies[e].y] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x+1][Enemies[e].y] = Enemies[e].num;
                Enemies[e].x = Enemies[e].x+1;
            }
        }else if(ParXY < 0 && ParOnY > 0){
            if(board[Enemies[e].x][Enemies[e].y-1] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x][Enemies[e].y-1] = Enemies[e].num;
                Enemies[e].y = Enemies[e].y-1;
            }else if(ParOnX > 0 && board[Enemies[e].x-1][Enemies[e].y] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x-1][Enemies[e].y] = Enemies[e].num;
                Enemies[e].x = Enemies[e].x-1;
            }else if(board[Enemies[e].x+1][Enemies[e].y] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x+1][Enemies[e].y] = Enemies[e].num;
                Enemies[e].x = Enemies[e].x+1;
            }
        } else if(ParOnY > 0 && board[Enemies[e].x][Enemies[e].y-1] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x][Enemies[e].y-1] = Enemies[e].num;
                Enemies[e].y = Enemies[e].y-1;
        } else if(ParOnY < 0 && board[Enemies[e].x][Enemies[e].y+1] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x][Enemies[e].y+1] = Enemies[e].num;
                Enemies[e].y = Enemies[e].y+1;
        }else if(ParOnX < 0 && board[Enemies[e].x+1][Enemies[e].y] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x+1][Enemies[e].y] = Enemies[e].num;
                Enemies[e].x = Enemies[e].x+1;
        }else if(board[Enemies[e].x-1][Enemies[e].y] != 4){
                board[Enemies[e].x][Enemies[e].y] = 0;
                board[Enemies[e].x-1][Enemies[e].y] = Enemies[e].num;
                Enemies[e].x = Enemies[e].x-1;
        }
    }
}

function resetEnemies(){
    for (let x = 0; x < 19; x++) {
        for (let y = 0; y < 19; y++) {
            if(board[x][y] == 5 || board[x][y] == 6 || board[x][y] == 7 || board[x][y] == 8){
                    board[x][y] = 0;
            }
        }
    }
}

function SummonFemale(){
    var emptyCell = findRandomEmptyCell(board);
    PandaFemale = new Object();
    board[emptyCell[0]][emptyCell[1]] = 13;
    FemaleBoard[emptyCell[0]][emptyCell[1]] = 13;
    PandaFemale.x = emptyCell[0];
    PandaFemale.y = emptyCell[1];
}

function spawnCherry(){
     var emptyCell = findRandomEmptyCell(board);
     CherryPower = new Object();
     board[emptyCell[0]][emptyCell[1]] = 14;
     FoodBoard[emptyCell[0]][emptyCell[1]] = 14;
     CherryPower.x = emptyCell[0];
     CherryPower.y = emptyCell[1];
     CherryPower.spawned = true;
}

function moveFemalepanda() {
    randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
                case 0:{
                    if (board[PandaFemale.x-1][PandaFemale.y] != 4){
                        board[PandaFemale.x][PandaFemale.y] = 0;
                        FemaleBoard[PandaFemale.x][PandaFemale.y] = 0;
                        board[PandaFemale.x-1][PandaFemale.y] = 13;
                        FemaleBoard[PandaFemale.x-1][PandaFemale.y] = 13;
                        PandaFemale.x = PandaFemale.x-1;
                    }
                    break;
                }
                case 1:{
                        if (board[PandaFemale.x+1][PandaFemale.y] != 4){
                                    board[PandaFemale.x][PandaFemale.y] = 0;
                                    FemaleBoard[PandaFemale.x][PandaFemale.y] = 0;
                                    board[PandaFemale.x+1][PandaFemale.y] = 13;
                                    FemaleBoard[PandaFemale.x+1][PandaFemale.y] = 13;
                                    PandaFemale.x = PandaFemale.x+1;
                                }
                        break;
                }
                case 2:{
                        if (board[PandaFemale.x][PandaFemale.y-1] != 4){
                                    board[PandaFemale.x][PandaFemale.y] = 0;
                                    FemaleBoard[PandaFemale.x][PandaFemale.y] = 0;
                                    board[PandaFemale.x][PandaFemale.y-1] = 13;
                                    FemaleBoard[PandaFemale.x][PandaFemale.y-1] = 13;
                                    PandaFemale.y = PandaFemale.y-1;
                        }
                        break;
                }
                case 3:{
                        if (board[PandaFemale.x][PandaFemale.y+1] != 4){
                                    board[PandaFemale.x][PandaFemale.y] = 0;
                                    FemaleBoard[PandaFemale.x][PandaFemale.y] = 0;
                                    board[PandaFemale.x][PandaFemale.y+1] = 13;
                                    FemaleBoard[PandaFemale.x][PandaFemale.y+1] = 13;
                                    PandaFemale.y = PandaFemale.y+1;
                                }
                        break;
                }
    }
}

function distributeFood() {
    //if (fivePointers != 0 && fifteenPointers != 0 && twentyfivePointers != 0) {
        randomNum = Math.floor(Math.random() * 3);
        switch (randomNum) {
            case 0:
                {
                    if (fivePointers > 0) {
                        fivePointers--;
                        return 10;
                    }
                    else if (fifteenPointers > 0) {
                        fifteenPointers--;
                        return 11;
                    }
                    else {
                        twentyfivePointers--;
                        return 12;
                    }
                }
            case 1:
                {
                    if (fifteenPointers > 0) {
                        fifteenPointers--;
                        return 11;
                    }
                    else if (twentyfivePointers > 0) {
                        twentyfivePointers--;
                        return 12;
                    }
                    else {
                        fivePointers--;
                        return 10;
                    }
                }
            case 2:
                {
                    if (twentyfivePointers > 0) {
                        twentyfivePointers--;
                        return 12;
                    }
                    else if (fivePointers > 0) {
                        fivePointers--;
                        return 10;
                    }
                    else {
                        fifteenPointers--;
                        return 11;
                    }
                }
        }
   // }
}
    

//              context.drawImage(Leaf1,center.x -15, center.y -15, canvas.width / 20, canvas.height / 20); //cherry
//				context.drawImage(Leaf1,center.x -15, center.y -15, canvas.width / 20, canvas.height / 20); //small
//              context.drawImage(Leaf1,center.x -15, center.y -15, canvas.width / 20, canvas.height / 20); //medium
//              context.drawImage(Leaf1,center.x -25, center.y -25, canvas.width / 60, canvas.height / 60); //leaf