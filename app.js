function playGame(){
const words = ["heyva", "nar", "armud"];   

let word = words[Math.floor(Math.random() * words.length)];   
let hiddenWord = Array(word.length).fill("_"); // 
console.log(word);

alert("Welcome to the quiz game!")

let lives = 5
let guessedLetters = [] 

while (lives > 0 && hiddenWord.includes("_")){
alert(`Your word is ${hiddenWord.join(" ")}`)
alert(`Chances :  ${lives}`) 


let guess = prompt("Guess the letter...").toLowerCase(); 

let wordIndex =  word.indexOf(guess) 

if(guessedLetters.includes(guess)){
    alert("Try different ...")
    continue; 
}

guessedLetters.push(guess)

if(guess == ""){
    alert("Write Something")
}else if( wordIndex !== -1 ){
    alert("NICEE!")
    hiddenWord[wordIndex] = guess
}else {
    alert("Wrong!")
    lives --;
}

}

if(!hiddenWord.includes("_")){
    alert(`Congrats, you guessed the word.The word is ${word} `)
}else if(confirm("You can do your best, do you want to play again?")) {
    playGame()
}else {
    alert("THANKS!")
}
}
playGame()

