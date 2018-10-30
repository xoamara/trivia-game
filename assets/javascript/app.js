// $("document").ready(function () {

let trivia = [

    {
        question: "What is the name of the story Bilbo wrote about his adventures?",
        choices: ["The Hobbit", "The Silmarillion ", "A Hobbit's Tale ", "Into the West"],
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
        answer: "Melon (friend)",
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

for (var i = 0; i < trivia.length; i++) {
    let activeQuestion = $("<h1>");
    activeQuestion = $("#question").text(trivia[i].question);
    {

        for (var i = 0; i < trivia.choices.length; i++) {
            let activeChoices = $("<button>");
            activeChoices.addClass("btn btn-primary btn-lg btn-block");
            activeChoices = $("#choice-buttons").text(trivia.choices[i]);
            $("#choice-buttons").append(activeChoices);
        }
    }


}

console.log(trivia.choices);

// });

