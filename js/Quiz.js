class Quiz{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant;
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }

            question = new Question();
            question.display();
            
        }
    }

    play(){
        Contestant.getContestantInfo();
        
        background("lightblue");
        textSize(30);
        fill(0);
        text("Results!", 370, 50);


        //QUESTION 1
        if(allContestants !== undefined){
            var x = 600;
            var y = 105;
            textSize(12.5);
            fill(0);
            text("NOTE: Contestants who answered correct is highlighted in green!", 40, 220);


            for(var plr in allContestants){
                var correctAnswer1 = "4";
                y = y + 20;
                if(correctAnswer1 === allContestants[plr].answer1){
                    fill("green"); 
                } else{
                    fill("red");
                }


                textSize(15);
                text(allContestants[plr].name + ": " + allContestants[plr].answer1, 600, y);
                
            }
        }

        //QUESTION 2
        if(allContestants !== undefined){
            var x = 600;
            var y = 285;

            for(var plr in allContestants){
                var correctAnswer2 = "2";
                y = y + 20;
                if(correctAnswer2 === allContestants[plr].answer2){
                    fill("green"); 
                } else{
                    fill("red");
                }

                textSize(15);
                text(allContestants[plr].name + ": " + allContestants[plr].answer2, 600, y);
                
            }
        }

        //QUESTION 3
        if(allContestants !== undefined){
            var x = 600;
            var y = 465;

            for(var plr in allContestants){
                var correctAnswer3 = "2";
                y = y + 20;
                if(correctAnswer3 === allContestants[plr].answer3){
                    fill("green"); 
                } else{
                    fill("red");
                }

                textSize(15);
                text(allContestants[plr].name + ": " + allContestants[plr].answer3, 600, y);
                
            }
        }

        //QUESTION 4
        if(allContestants !== undefined){
            var x = 600;
            var y = 645;

            for(var plr in allContestants){
                var correctAnswer4 = "2";
                y = y + 20;
                if(correctAnswer4 === allContestants[plr].answer4){
                    fill("green"); 
                } else{
                    fill("red");
                }

                textSize(15);
                text(allContestants[plr].name + ": " + allContestants[plr].answer4, 600, y);
                
            }
        }

        //QUESTION 5
        if(allContestants !== undefined){
            var x = 600;
            var y = 825;

            for(var plr in allContestants){
                var correctAnswer5 = "4";
                y = y + 20;
                if(correctAnswer5 === allContestants[plr].answer5){
                    fill("green"); 
                } else{
                    fill("red");
                }

                textSize(15);
                text(allContestants[plr].name + ": " + allContestants[plr].answer5, 600, y);
                
            }
        }

        //QUESTION 6
        if(allContestants !== undefined){
            var x = 600;
            var y = 1005;

            for(var plr in allContestants){
                var correctAnswer6 = "4";
                y = y + 20;
                if(correctAnswer6 === allContestants[plr].answer6){
                    fill("green"); 
                } else{
                    fill("red");
                }

                textSize(15);
                text(allContestants[plr].name + ": " + allContestants[plr].answer6, 600, y);
                
            }
        }

        //QUESTION 7
        if(allContestants !== undefined){
            var x = 600;
            var y = 1185;

            for(var plr in allContestants){
                var correctAnswer7 = "1";
                y = y + 20;
                if(correctAnswer7 === allContestants[plr].answer7){
                    fill("green"); 
                } else{
                    fill("red");
                }

                textSize(15);
                text(allContestants[plr].name + ": " + allContestants[plr].answer7, 600, y);
                
            }
        }

        //QUESTION 8
        if(allContestants !== undefined){
            var x = 600;
            var y = 1365;

            for(var plr in allContestants){
                var correctAnswer8 = "2";
                y = y + 20;
                if(correctAnswer8 === allContestants[plr].answer8){
                    fill("green"); 
                } else{
                    fill("red");
                }

                textSize(15);
                text(allContestants[plr].name + ": " + allContestants[plr].answer8, 600, y);
                
            }
        }

        //QUESTION 9
        if(allContestants !== undefined){
            var x = 600;
            var y = 1545;

            for(var plr in allContestants){
                var correctAnswer9 = "3";
                y = y + 20;
                if(correctAnswer9 === allContestants[plr].answer9){
                    fill("green"); 
                } else{
                    fill("red");
                }

                textSize(15);
                text(allContestants[plr].name + ": " + allContestants[plr].answer9, 600, y);
                
            }
        }

        //QUESTION 10
        if(allContestants !== undefined){
            var x = 600;
            var y = 1725;

            for(var plr in allContestants){
                var correctAnswer10 = "4";
                y = y + 20;
                if(correctAnswer10 === allContestants[plr].answer10){
                    fill("green"); 
                } else{
                    fill("red");
                }

                textSize(15);
                text(allContestants[plr].name + ": " + allContestants[plr].answer10, 600, y);
                
            }
        }
    }
}
