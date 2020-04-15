# music_trivia

Test your music knowledge here: 
https://eapatton.github.io/music_trivia/ 

I made this game because I enjoy tivia and music 
I am not much of a video game player but I love board games and trivia.
I made 15 music trivia questions all about musicians I enjoy.

The User stories
The user begins on a screen with an event listener, to click on the start button to begin the game
From there the user has a 4 multiple choice answers for each question
When you hover over the answer the border changes color
The user clicks on the answer they want and then the game proceeds to the next question
The bar on the bottom is a progress bar
When the player answers the question with the correct answer the progress bar in association with that question turns mint green and if the answer is incorrect the color turns a light pink. 
There are 15 questions that all react the same in terms of the click for answer and move to next question and progress bar color change.
At the end, a score is calculated and an emoji is displayed for the percentage correct

Unsolved problems- certain formatting with CSS was not perfected, I wish I centered and aligned things more precisely.

The technologies used
I had a div container that holds the start button, trivia game, and score
I set the trivia game and score to display none at the first page.
I use an event listener to start the game with a click.
From there to start the game we set the start to display none and the trivia to display block
I used divs with id's in the body of my html to utilize DOM
I selected these elements by the getElementById method
I had 15 questions, the questions were an array of objects
Each object had one question, an image, 4 possible answers and the correct answer
From there I created some variables- the last question (questions.length -1, current question, count and score were all given the starting value of zero.
To start the game I added an event listener that when clicked would begin the game
The display of the start container would be set to none and the display for trivia would be changed from none to block
The start trivia would also render the progress
To render the question I set q to equal the questions array -current question
I used innerHTML for the question image, while I used textContent for the question, choices, and possible answers
To render the progress I used a for loop to start at zero and end at the last question
The progress bar has the same class but each one will be associated with the index of the current question
From there we must check to see if the user got the correct answer.
In the html onclick=checkAnswer
I used an if else statement to check the answer
if the answer is equal to the currentquestion. correct the answer is correct
Else the answer is wrong
I also need to make sure it use an if else to get to the next question or end the game and render the score. We also use an if else statement. If the current question is less than the last question we go to the next question and render that question ELSE we render the score

I need to make two new functions to change the background color of the progress squares.
A function for answer is correct and answer is wrong. I used DOM manipulation, getELementById, of the current question to style the background color for a correct or wrong answer.


To render the score I needed to change the score container to a display of block
To calculate the percentage the user received I used math round of 100 multiplied by score divided by the questions.length.
From there I used else if statements to associate an emoji to the correct score percentage.
I used innerHTML to show the correctly correlated image and score percentage 

