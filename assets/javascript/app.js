$("document").ready(function () {

let trivia = [

    {
        question: "What is the name of the story Bilbo wrote about his adventures?",
        choices: ["The Hobbit", "The Silmarillion ", "A Hobbit's Tale", "Into the West"],
        answer: "A Hobbit's Tale",
    },
    {
        question: "By what name do the Elves call Gandalf?",
        choices: ["The Grey Pilgrim", "Incanus", "Gandalf the Grey", "Mithrandir"],
        answer: "Mithrandir",
    },
    {
        question: "Who was originally cast as Aragorn?",
        choices: ["Eric Bana", "Tom Cruise", "Stuart Townsend", "Johnny Depp"],
        answer: "Stuart Townsend",
    },
    {
        question: "What is the secret word that opens the Gates of Moria?",
        choices: ["Belok (friend)", "Danwaith (elves)", "Galad (light)", "Mellon (friend)"],
        answer: "Mellon (friend)",
    },
    {
        question: "Which Rebel Pilot, who goes on a run of both Death Stars appears in all 2 films?",
        choices: ["Biggs Darklighter", "Luke Skywalker", "Wedge Antilles", "Lando Calrissian"],
        answer: "Wedge Antilles",
    },
    {
        question: "Which creature on Hoth captures Luke?",
        choices: ["Darth Vader", "Wampa", "Tauntaun", "Jawa"],
        answer: "Wampa",
    },
    {
        question: "Which of the following is not a character of Spaceballs?",
        choices: ["Barf", "Goop", "Yogurt", "Princess Vespin", "Pizza the Hutt"],
        answer: "Goop",
    },
    {
        question: '"You will never find a more wretched hive of scum and villainy." But where was Obi-Wan Kenobi referring to?',
        choices: ["Coruscant", "Mos Eisley", "Jabba's Palace", "Tatooine"],
        answer: "Mos Eisley",
    },
    {
        question: "What is the name of Jabba's pet?",
        choices: ["Boba Tea", "Feisty D. Frisker", "Saldatitudes K. Quazi", "Salacious B. Crumb", "Flita R. Fricmuffin"],
        answer: "Salacious B. Crumb",
    },

]

let score = 0;
let questionZone = $("#question-zone");
let startTimer = $("#start");
let showTimer = $("#show-timer");
let checkButton = $("#check-answers-button");
let seconds = 30;
let intervalId;

startTimer.on("click", setClock);

function setClock() {
    clearInterval(intervalId);
    intervalId = setInterval(countDown, 1000);
}

function countDown() {
    seconds--;
    showTimer.text("Time Remaining: " + seconds);

    if (seconds === 0) {
        showTimer.text("Time's up!  You scored " + score + "/" + trivia.length + " correct");
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
}

checkButton.on("click", showAnswers);

function showAnswers() {
    showTimer.text("You scored " + score + "/" + trivia.length + " correct");
    stop()
};



for (var i = 0; i < trivia.length; i++) {
    let activeQuestion = trivia[i];
    let questionBox = $("<div>");
    let questionTitle = $("<h4>").text(activeQuestion.question);
    let answerBox = $("<div>");
    let answers = activeQuestion.choices;



    for (var j = 0; j < answers.length; j++) {
        let answerChoice = answers[j];
        let radioButton = $("<input>", "</input>");
        let radioLabel = $("<label>" + answerChoice + "</label>");
        radioButton.attr({
            class: "custom-control custom-radio",
            type: "radio",
            value: answerChoice,
            name: i
        });
        answerBox.append(radioButton);
        answerBox.append(radioLabel);

    }
    questionBox.append(questionTitle);
    questionBox.append(answerBox);
    questionZone.append(questionBox);
}



$("input[type='radio']").click(function () {
    var radioValue = $(this).val();
    var answerValue = $(this).attr("name");
    var answerCheck = trivia[answerValue].answer;
    if (radioValue === answerCheck) {
        score++;
    }
});

});


// TODO

// Need game reset function

// Need radio disabled until the start button is clicked

