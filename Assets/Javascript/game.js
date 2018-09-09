// waits until all the DOM elements are on place

var game=()=>{
    

    //create an array of words
    var words=["avi","amic","mare","pare","espanyol","ahir","fill","bon viatge","fins aviat","vespre","actriu","dubtar","lluny"];
  
    //array of right & wrong guesses
    //var rightletter=[];
    var wrongletter=[];
  
    //choose word randomly
    var randNum=Math.floor(Math.random()*words.length);
    var chosenWord=words[randNum];
  
    //DOM   
    var numberofunderscores=document.getElementsByClassName("underscore");
   // var docrightguess=document.getElementsByClassName("rightguess");
    var docwrongguess=document.getElementsByClassName("wrongguess");
    docwrongguess[0].innerHTML="Wrong Guess";
    //create underscore based on the length of the word
    var underscores=[];
    var generateunderscore= () => {
      for(var i=0;i<chosenWord.length; i++) {
        // checks if word contains an space
        if (chosenWord[i] === " ") {
          // replaces underscore array with an space
          underscores.push("&nbsp;");
        } else {
          // adds an underscore
          underscores.push("_");
        }
      }
      return underscores;
    };
    
    //console.log(chosenWord);
    //console.log(numberofunderscores, 'numberofunderscores')
    
    // initializes the underscores
    numberofunderscores[0].innerHTML=generateunderscore().join(" ");
    var gameover=false;
    //get users' guess  (here I didn't understand the method...I found it on internet, but IDK what's happening)
    
     var keyevent = (event) => {
      var kword = String.fromCharCode(event.keyCode);
     
    
  
      // checks if the letter chosen is found on the chosenWord
      // (iterates over all the word to capture repetition of letters)
      var isfound=false;
      for (var j = 0; j < chosenWord.length; j++) {
          if (chosenWord[j] === kword) {
              underscores[j] = kword;
              isfound=true;
          
          }
        
      }
      if (isfound===false && wrongletter.indexOf(kword)===-1){
          wrongletter.push(kword);
      }
    
      numberofunderscores[0].innerHTML=underscores.join(" ");
      docwrongguess[0].innerHTML= "Wrong Guess <br>" + wrongletter.join();
  
      if (underscores.join("").replace("&nbsp;", " ") === chosenWord) {
       gameover=true;
       document.removeEventListener("keypress",keyevent);
       setTimeout(() => {
        alert("You Win!");
        game();
       }, 1000);
      
      }
  
    
  
  };
  document.addEventListener("keypress",keyevent);
  };

  window.onload=function(){
      game();
  }
