// select all elements
const start = document.getElementById("start");
const trivia = document.getElementById("trivia");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create questions- an array of objects, each object has the question, image, choices and correct answer
let questions = [
    {
        question: "Who was the first rap artist to win the Pulizter Prize for Music?",
        imgSrc:  "photos/LaurynHill.jpg",  
        choiceA: 'Kendrick Lamar',
        choiceB: 'Lauryn Hill',
        choiceC: 'Jay-Z',
        choiceD: 'Lil Wayne',
        correct: 'A'
    },
    {
        question: `Who stars in Kanye West's music video Bound 2?`,
        imgSrc: "photos/kanyewest.jpg",
        choiceA: 'James Franco',
        choiceB: 'Kim Kardashian',
        choiceC: 'Kehlani',
        choiceD: 'Nicki Minaj',
        correct: 'B'
    },
    {
        question: "What city is The Weeknd from?",
        imgSrc: "photos/theWeeknd.jpeg",
        choiceA: 'Vancouver',
        choiceB: 'New York City',
        choiceC: 'Atlanta',
        choiceD: 'Toronto',
        correct: 'D'
    },
    {
        question: `Name the song that begins with this line-  "What happened at the New Wil'ins?"`,
        imgSrc: "photos/beyonceFormation.jpg",
        choiceA: 'Shot Clock by Ella Mai',
        choiceB: 'Say So by Doja Cat',
        choiceC: 'Losing you by Solange',
        choiceD: 'Formation by Beyonce',
        correct: 'D'
    },
    {
        question: `On Rihanna's 2016 album ANTI, who is featured on the song "Work"?`,
        imgSrc: "photos/Anti.png",
        choiceA: 'SZA',
        choiceB: 'Jay-Z',
        choiceC: 'Drake',
        choiceD: 'Eminem',
        correct: 'C'
    },
    {
        question: `Dr. Dre & ______ founded 'Death Row Records' in 1991.`,
        imgSrc: "photos/Deathrow.jpg",
        choiceA: 'Tupac Shakur',
        choiceB: 'Snoop Dog',
        choiceC: 'Eazy-E',
        choiceD: 'Suge Knight',
        correct: 'D'
    },
    {
        question: "What girl group was Normani a part of before her solo career?",
        imgSrc: "photos/normani.jpeg",
        choiceA: 'TLC',
        choiceB: 'Fifth Harmony',
        choiceC: `Destiny's Child`,
        choiceD: 'Pussy Cat Dolls',
        correct: 'B'
    },
    {
        question: "What show was Chance the Rapper a judge on?",
        imgSrc: "photos/chance.jpeg",
        choiceA: 'The Rap Game',
        choiceB: 'Love & Hip Hop',
        choiceC: 'Rhythm & Flow',
        choiceD: 'Flavor of Love',
        correct: 'C'
    },
    {
        question: `In 2017, who won the VMA's Best New Artist?`,
        imgSrc: "photos/vmaTrophy.jpeg",
        choiceA: 'Khalid',
        choiceB: 'Noah Cyrus',
        choiceC: 'Lil Pump',
        choiceD: 'SZA',
        correct: 'A'
    },
    {
        question: "What song holds the longest streak at the number one spot on the Billboard Hot 100?",
        imgSrc: "photos/billboardHot.jpeg",
        choiceA: 'Old Town Road',
        choiceB: 'Despacito',
        choiceC: 'Uptown Funk',
        choiceD: 'Yeah!',
        correct: 'A'
    },
    {
        question: "Where did The Carters film the music video for APESHIT?",
        imgSrc: "photos/beyjay.jpg",
        choiceA: 'Palace of Westminster',
        choiceB: 'The White House',
        choiceC: 'The Louvre',
        choiceD: 'Palace of Versailles',
        correct: 'C'
    },
    {
        question: `Dirty Computer[Emotion Picture] is by what artist?`,
        imgSrc: "photos/janelle.jpeg",
        choiceA: 'Tame Impala',
        choiceB: 'Cardi B',
        choiceC: 'Jhené Aiko',
        choiceD: 'Janelle Monáe',
        correct: 'D'
    },
   {
        question: `Lizzo won Best Pop Solo Performance for what song at the 2020 Grammys?`,
        imgSrc: "photos/lizzo.png",
        choiceA: 'Truth Hurts',
        choiceB: 'Juice',
        choiceC: 'Tempo',
        choiceD: 'Exactly How I Feel',
        correct: 'A'
    },
   {
        question: `What label have Drake, Nicki Minaj and Tyga all been signed to?`,
        imgSrc: "photos/CarterIII.jpg",
        choiceA: 'Cash Money',
        choiceB: 'Young Money Entertainment',
        choiceC: 'Def Jam',
        choiceD: 'GOOD Music',
        correct: 'B'
    },
    {
        question: `In the summer of 2019, Meghan Thee Stallion & Nicki Minaj collabed on what song?`,
        imgSrc: "photos/megan.jpg",
        choiceA: 'Cranes in the Sky',
        choiceB: 'Hot Girl Summer',
        choiceC: 'Yikes',
        choiceD: 'Swalla',
        correct: 'B'
    },
];

// create some variables

const lastQuestion = questions.length - 1;
let currentQuestion = 0;
let count = 0;
let score = 0;

start.addEventListener("click",startTrivia);

// start trivia
function startTrivia(){
    start.style.display = "none";
    renderQuestion();
    trivia.style.display = "block";
    renderProgress();
}

// render a question
function renderQuestion(){
    let q = questions[currentQuestion];
    
    question.textContent = q.question;
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
}


// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


// checkAnswer

function checkAnswer(answer){
    if( answer == questions[currentQuestion].correct){
        // answer is correct
        score++;
        // change color to mint green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change color to pink
        answerIsWrong();
    }
    count = 0;
    if(currentQuestion < lastQuestion){
        currentQuestion++;
        renderQuestion();
    }else{
        // end the trivia and show the score
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(currentQuestion).style.backgroundColor = "#A2D9CE";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(currentQuestion).style.backgroundColor = "#F794E9";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
const scorePercent = Math.round(100 * score/questions.length);


    if (scorePercent >= 80) {
       img = "img/5b.jpeg";
    } else if (scorePercent >= 60) {
        img = "img/4b.jpeg"
    } else if (scorePercent >= 40) {
        img = "img/3b.jpeg"
    } else if (scorePercent >= 20) {
        img = "img/2bad.jpeg"
    } else {
        img = "img/1bad.jpeg";
    }

    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePercent +"%</p>";
}



