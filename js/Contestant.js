class Contestant {
    constructor(){
      this.name = null;
      this.index = null;
      this.answer1 = null;
      this.answer2 = null;
      this.answer3 = null;
      this.answer4 = null;
      this.answer5 = null;
      this.answer6 = null;
      this.answer7 = null;
      this.answer8 = null;
      this.answer9 = null;
      this.answer10 = null;
    }

    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }

  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name: this.name,
        answer1: this.answer1,
        answer2: this.answer2,
        answer3: this.answer3,
        answer4: this.answer4,
        answer5: this.answer5, 
        answer6: this.answer6,
        answer7: this.answer7,
        answer8: this.answer8,
        answer9: this.answer9, 
        answer10: this.answer10
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
    

  }
  