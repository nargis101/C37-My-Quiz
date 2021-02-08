class Question{
    constructor(){
        this.nameInput = createInput("Enter Name Here...");
        this.title = createElement('h2');
        this.okay = createButton("Ok");
        this.reset = createButton('Reset to Play Again');

        
        //QUESTION 1
        this.answer1 = createInput("Enter Option No.");
        this.question1 = createElement('h4');
        this.Q1option1 = createElement('h5');
        this.Q1option2 = createElement('h5');
        this.Q1option3 = createElement('h5');
        this.Q1option4 = createElement('h5');

        this.submit1 = createButton("Submit");

        //QUESTION 2
        this.answer2 = createInput("Enter Option No.");
        this.question2 = createElement('h4');
        this.Q2option1 = createElement('h5');
        this.Q2option2 = createElement('h5');
        this.Q2option3 = createElement('h5');
        this.Q2option4 = createElement('h5');

        this.submit2 = createButton("Submit");

        //QUESTION 3
        this.answer3 = createInput("Enter Option No.");
        this.question3 = createElement('h4');
        this.Q3option1 = createElement('h5');
        this.Q3option2 = createElement('h5');
        this.Q3option3 = createElement('h5');
        this.Q3option4 = createElement('h5');

        this.submit3 = createButton("Submit");

        //QUESTION 4
        this.answer4 = createInput("Enter Option No.");
        this.question4 = createElement('h4');
        this.Q4option1 = createElement('h5');
        this.Q4option2 = createElement('h5');
        this.Q4option3 = createElement('h5');
        this.Q4option4 = createElement('h5');

        this.submit4 = createButton("Submit");

        //QUESTION 5
        this.answer5 = createInput("Enter Option No.");
        this.question5 = createElement('h4');
        this.Q5option1 = createElement('h5');
        this.Q5option2 = createElement('h5');
        this.Q5option3 = createElement('h5');
        this.Q5option4 = createElement('h5');

        this.submit5 = createButton("Submit");

        //QUESTION 6
        this.answer6 = createInput("Enter Option No.");
        this.question6 = createElement('h4');
        this.Q6option1 = createElement('h5');
        this.Q6option2 = createElement('h5');
        this.Q6option3 = createElement('h5');
        this.Q6option4 = createElement('h5');

        this.submit6 = createButton("Submit");

        //QUESTION 7
        this.answer7 = createInput("Enter Option No.");
        this.question7 = createElement('h4');
        this.Q7option1 = createElement('h5');
        this.Q7option2 = createElement('h5');
        this.Q7option3 = createElement('h5');
        this.Q7option4 = createElement('h5');

        this.submit7 = createButton("Submit");

        //QUESTION 8
        this.answer8 = createInput("Enter Option No.");
        this.question8 = createElement('h4');
        this.Q8option1 = createElement('h5');
        this.Q8option2 = createElement('h5');
        this.Q8option3 = createElement('h5');
        this.Q8option4 = createElement('h5');

        this.submit8 = createButton("Submit");

        //QUESTION 9
        this.answer9 = createInput("Enter Option No.");
        this.question9 = createElement('h4');
        this.Q9option1 = createElement('h5');
        this.Q9option2 = createElement('h5');
        this.Q9option3 = createElement('h5');
        this.Q9option4 = createElement('h5');
        this.submit9 = createButton("Submit");

        //QUESTION 10
        this.answer10 = createInput("Enter Option No.");
        this.question10 = createElement('h4');
        this.Q10option1 = createElement('h5');
        this.Q10option2 = createElement('h5');
        this.Q10option3 = createElement('h5');
        this.Q10option4 = createElement('h5');

        this.submit10 = createButton("Submit");

    }

    display(){
        this.title.html("My Quiz!");
        this.title.position(400, 20);
        this.nameInput.position(30, 20);
        this.okay.position(180, 20);
        this.reset.position(770, 20);

        //QUESTION 1
        this.question1.html("Question 1: Poor people have it, rich people need it. If you eat it, you die. What is it?");
        this.question1.position(20, 80);

        this.Q1option1.html("1. Money");
        this.Q1option1.position(40, 110);

        this.Q1option2.html("2. Everything");
        this.Q1option2.position(40, 130);

        this.Q1option3.html("3. Faith");
        this.Q1option3.position(40, 150);

        this.Q1option4.html("4. Nothing");
        this.Q1option4.position(40, 170);

        this.answer1.position(300, 210);
        this.submit1.position(450, 210);


        //QUESTION 2
        this.question2.html("Question 2: How many months have 28 days?");
        this.question2.position(20, 260);

        this.Q2option1.html("1. 5 months");
        this.Q2option1.position(40, 290);

        this.Q2option2.html("2. All months");
        this.Q2option2.position(40, 310);

        this.Q2option3.html("3. 2 months");
        this.Q2option3.position(40, 330);

        this.Q2option4.html("4. 1 month");
        this.Q2option4.position(40, 350);

        this.answer2.position(300, 390);
        this.submit2.position(450, 390);
        this.submit2.hide();


        //QUESTION 3
        this.question3.html("Question 3: I’m tall when I’m young, and I’m short when I’m old. What am I?");
        this.question3.position(20, 440);

        this.Q3option1.html("1. Babies");
        this.Q3option1.position(40, 470);

        this.Q3option2.html("2. Candle");
        this.Q3option2.position(40, 490);

        this.Q3option3.html("3. Lion");
        this.Q3option3.position(40, 510);

        this.Q3option4.html("4. Earth");
        this.Q3option4.position(40, 530);

        this.answer3.position(300, 570);
        this.submit3.position(450, 570);
        this.submit3.hide();


        //QUESTION 4
        this.question4.html("Question 4: Sometimes I am light, sometimes I am dark. Most people love me. What am I?");
        this.question4.position(20, 620);

        this.Q4option1.html("1. Checkers");
        this.Q4option1.position(40, 650);

        this.Q4option2.html("2. Chocolate");
        this.Q4option2.position(40, 670);

        this.Q4option3.html("3. Chess");
        this.Q4option3.position(40, 690);
        
        this.Q4option4.html("4. Candle");
        this.Q4option4.position(40, 710);

        this.answer4.position(300, 750);
        this.submit4.position(450, 750);
        this.submit4.hide();


        //QUESTION 5
        this.question5.html("Question 5: Which letter of the alphabet has the most water?");
        this.question5.position(20, 800);

        this.Q5option1.html("1. R");
        this.Q5option1.position(40, 830);

        this.Q5option2.html("2. X");
        this.Q5option2.position(40, 850);

        this.Q5option3.html("3. L");
        this.Q5option3.position(40, 870);
        
        this.Q5option4.html("4. C");
        this.Q5option4.position(40, 890);

        this.answer5.position(300, 930);
        this.submit5.position(450, 930);
        this.submit5.hide();


        //QUESTION 6
        this.question6.html("Question 6: I am the only organ in the human body that gave itself its own name. What am I?");
        this.question6.position(20, 980);

        this.Q6option1.html("1. Liver");
        this.Q6option1.position(40, 1010);

        this.Q6option2.html("2. Heart");
        this.Q6option2.position(40, 1030);

        this.Q6option3.html("3. Leg");
        this.Q6option3.position(40, 1050);
        
        this.Q6option4.html("4. Brain");
        this.Q6option4.position(40, 1070);

        this.answer6.position(300, 1110);
        this.submit6.position(450, 1110);
        this.submit6.hide();


        //QUESTION 7
        this.question7.html("Question 7: The one who makes it, sells it. the one who buys it, never uses it. the one that uses it never knows he’s using it. what is it?");
        this.question7.position(12, 1160);

        this.Q7option1.html("1. Coffin");
        this.Q7option1.position(40, 1190);

        this.Q7option2.html("2. Shoes");
        this.Q7option2.position(40, 1210);

        this.Q7option3.html("3. Chocolates");
        this.Q7option3.position(40, 1230);
        
        this.Q7option4.html("4. Donut");
        this.Q7option4.position(40, 1250);

        this.answer7.position(300, 1290);
        this.submit7.position(450, 1290);
        this.submit7.hide();


        //QUESTION 8
        this.question8.html("Question 8: What is as light as a feather, but even the world’s strongest man couldn’t hold it for more than five minutes?");
        this.question8.position(20, 1340);

        this.Q8option1.html("1. Steal Beams");
        this.Q8option1.position(40, 1370);

        this.Q8option2.html("2. His breath");
        this.Q8option2.position(40, 1390);

        this.Q8option3.html("3. An atom");
        this.Q8option3.position(40, 1410);
        
        this.Q8option4.html("4. A feather");
        this.Q8option4.position(40, 1430);

        this.answer8.position(300, 1470);
        this.submit8.position(450, 1470);
        this.submit8.hide();


        //QUESTION 9
        this.question9.html("Question 9: What gets bigger every time you take from it?");
        this.question9.position(20, 1520);

        this.Q9option1.html("1. A pancake");
        this.Q9option1.position(40, 1550);

        this.Q9option2.html("2. A clock");
        this.Q9option2.position(40, 1570);

        this.Q9option3.html("3. A hole");
        this.Q9option3.position(40, 1590);
        
        this.Q9option4.html("4. Money");
        this.Q9option4.position(40, 1610);

        this.answer9.position(300, 1650);
        this.submit9.position(450, 1650);
        this.submit9.hide();


        //QUESTION 10
        this.question10.html("Question 10: I run in and out of town all day and night and yet I never get tired? What am I?");
        this.question10.position(20, 1700);

        this.Q10option1.html("1. A messenger");
        this.Q10option1.position(40, 1730);

        this.Q10option2.html("2. A ruler");
        this.Q10option2.position(40, 1750);

        this.Q10option3.html("3. A streetlight");
        this.Q10option3.position(40, 1770);
        
        this.Q10option4.html("4. A road");
        this.Q10option4.position(40, 1790);

        this.answer10.position(300, 1830);
        this.submit10.position(450, 1830);
        this.submit10.hide();

        
      
        this.submit1.mousePressed(()=>{
            this.answer1.hide();
            this.submit1.hide();
            contestant.answer1 = this.answer1.value();
            this.submit2.show();
        });

        this.submit2.mousePressed(()=>{
            this.answer2.hide();
            this.submit2.hide();
            contestant.answer2 = this.answer2.value();
            this.submit3.show();
        });

        this.submit3.mousePressed(()=>{
            this.answer3.hide();
            this.submit3.hide();
            contestant.answer3 = this.answer3.value();
            this.submit4.show();
        });

        this.submit4.mousePressed(()=>{
            this.answer4.hide();
            this.submit4.hide();
            contestant.answer4 = this.answer4.value();
            this.submit5.show();
        });

        this.submit5.mousePressed(()=>{
            this.answer5.hide();
            this.submit5.hide();
            contestant.answer5 = this.answer5.value();
            this.submit6.show();
        });

        this.submit6.mousePressed(()=>{
            this.answer6.hide();
            this.submit6.hide();
            contestant.answer6 = this.answer6.value();
            this.submit7.show();
        });

        this.submit7.mousePressed(()=>{
            this.answer7.hide();
            this.submit7.hide();
            contestant.answer7 = this.answer7.value();
            this.submit8.show();
        });

        this.submit8.mousePressed(()=>{
            this.answer8.hide();
            this.submit8.hide();
            contestant.answer8 = this.answer8.value();
            this.submit9.show();
        });

        this.submit9.mousePressed(()=>{
            this.answer9.hide();
            this.submit9.hide();
            contestant.answer9 = this.answer9.value();
            this.submit10.show();
        });

        this.submit10.mousePressed(()=>{
            this.answer10.hide();
            this.submit10.hide();
            this.title.hide();
            contestant.answer10 = this.answer10.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });

        this.okay.mousePressed(()=>{
            this.okay.hide();
            this.nameInput.hide();
            contestant.name = this.nameInput.value();
        })

        this.reset.mousePressed(()=>{
            contestant.updateCount(0);
            quiz.update(0);
            quiz.start();
          });
          
    }

}