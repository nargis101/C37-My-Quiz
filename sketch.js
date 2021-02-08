var canvas;

var gameState = 0;
var contestant, contestantCount = 0; 
var allContestants;
var database, quiz;
var question, reset;


function setup(){
  database = firebase.database();
  canvas = createCanvas(900, 1900);

  quiz = new Quiz();
  quiz.getState();
  quiz.start();


}


function draw(){
  background("pink");


  if(contestantCount === 1){
    quiz.update(1);
  }

  if(gameState === 1){
    clear();
    quiz.play();
  }



  drawSprites();
}
