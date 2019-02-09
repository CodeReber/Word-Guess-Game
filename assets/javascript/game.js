// - print "_ _ _ _" line changing as per possible answer
// - set default number of guesses, decrement number as per wrong answers
//     not allowing more then 1 wrong letter to be used
//     printing out wrong letter guess
// - if answer before number of guess runs out, Print title of song and show pic of band
//     else print sorry wrong listen to the new song, play new song
// - when open page start new song to be guessed tied into name of band _ _ _ _  guess

//default look when enter page song play, game instruction presented, default _ _ _ 
var numWin = 0;
var numOfGuess;
var answer;
var words;
var word;
var wrongGuess;
var remainingLetters;
var audio = new Audio('assets/audio/Born_To_Boogie.mp3');
var audio1 = new Audio('assets/audio/family_tradition.mp3');
var audio2 = new Audio('assets/audio/Country_Boy_Can_Survive.mp3');
var bogpic = document.createElement("img");
bogpic.setAttribute("src", "assests/img/born2boogie.png");


//Set global vars
function gamestart(){
numOfGuess = 12;


// for (var i=97; i<123; i++)
//     AllChars.push(String.fromCharCode(i));
//create array of words
words = ["borntoboogie","countryboycansurvive","familytradition"];

//Choose word randomly, define number of char in word
word = words[Math.floor(Math.random() * words.length)];
remainingLetters = word.length;
console.log(remainingLetters);
//Make array for answer
answer = [];
for (var i = 0; i < word.length; i++) {
    answer[i] = " _ ";
}
wrongGuess = []
//Set up user keyboard input compare with word update remaining
}
document.onkeyup = function(){
    var guess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(guess);
    console.log(word);
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answer[j] = guess;
            remainingLetters--;
            var win = remainingLetters;
            if(win === 0 && word === "borntoboogie"){
                numWin++;
                audio2.pause();
                audio1.pause();
                audio.play();
                gamestart();
                document.getElementById("pic").src = "assets/img/born2boogie.png";
                document.getElementById("answer").innerHTML = "Correct!!! Born to Boogie";
            }
            else if(win === 0 && word === "countryboycansurvive"){
                numWin++;
                audio1.pause();
                audio.pause();
                audio2.play();
                gamestart();
                document.getElementById("pic").src = "assets/img/countryboy.png";
                document.getElementById("answer").innerHTML = "Correct!!! Country Boy Can Survive";
            }
            else if(win === 0 && word === "familytradition"){
                numWin++;
                audio.pause();
                audio2.pause();
                audio1.play();
                gamestart();
                document.getElementById("pic").src = "assets/img/familytradition.png";
                document.getElementById("answer").innerHTML = "Correct!!! Family Tradition";
            }
        }
        else{
            if(!wrongGuess.includes(guess) && !word.includes(guess)){
                wrongGuess.push(guess);
                numOfGuess--;
                var lose = numOfGuess;
                if(lose === 0){
                    gamestart();
                }
            }
           
        }
    document.getElementById("numOfWins-text").innerHTML = numWin;
    document.getElementById("underscoreLine-text").innerHTML = answer.join(" ");
    document.getElementById("lettersGuessed-text").innerHTML = wrongGuess;
    document.getElementById("remainNumGuess-text").innerHTML = numOfGuess;
    }
}
//print to html screen
gamestart();
document.getElementById("remainNumGuess-text").innerHTML = numOfGuess;
document.getElementById("underscoreLine-text").innerHTML = answer.join(" ");
// document.getElementById("lettersGuessed-text").innerHTML = guess;






