//RANDOM ITEM FROM AN ARRAY https://css-tricks.com/snippets/javascript/select-random-item-array/

const quotes = [
  '"I’m not a businessman, I’m a business… man."– Jay Z ',
  '"Its Cool To Love To Win, But Its Better To Hate To Lose"– Nas',
  '"YOU CAN SPEND HOURS , DAYS , WEEKS , OR EVEN MONTHS TRYING TO PICK UP THE PIECES AND FIGURE OUT WHAT WENT WRONG OR YOU CAN JUST LEAVE THE PIECES ON THE FLOOR AND MOVE THE F@CK ON " - 2Pac',
  '"The most important parts,are the ones that are unseen. The wings don’t make you fly, and the crown don’t make you king." - Lupe',
  '"I sell ice in the winter, I sell fire in hell, I am a hustler baby, I’ll sell water to a well" - Jay Z'
];
//TARGET ELEMENT H1 BY SELECTING ID
let answer = document.getElementById('quote');
//USE RANDOM METHOD AND USE FLOOR METHOD TO EXCLUDE DECIMALS
//TIMES IT BY THE LENGTH OF THE ARRAY 'QUOTES'
//USE HTML METHOD TO TARGET HTML AND EQUAL IT TO THE LENGTH OF THE QUOTE
function randomQuote(){
  let randomSum = Math.floor(Math.random() * quotes.length);
  answer.innerHTML = quotes[randomSum];
}
//TARGET ELEMENT BUTTON TAG
let button = document.querySelector('button');
//ADD EVENT CLICK AND RECALL FUNCTION
button.addEventListener('click', randomQuote);
//CALL FUNCTION
 randomQuote();
