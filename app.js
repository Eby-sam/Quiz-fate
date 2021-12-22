let starting = $("#start-btn");
let suivant = $("#next-btn");
let questionContainer = $("#question-container");
let questionElement = $("#question");
let repBtnElement = $("#answers-btn");
let randomQuestion;
let actualQuestionIndex;
let goodRep;
let active = true;
let result = document.createElement("p");
result.classList.add("para");
result.style.fontStyle = 'italic';

const question = [

    {
        question: "Dans 'final Fantasy X-2 (remaster)' , Lulu est-elle recrutable ?",
        answer: [
            { text: "oui", correct: true },
            { text: "non", correct: false },
            { text: "avec un DLC", correct: false},
            { text: "avec un glitch", correct: false}
        ]
    },
    {
        question: "Dans 'Final Fantasy 7' , comment s'appel les terroriste qui attaque la SHINRA ?",
        answer: [
            { text: "Clad", correct: false },
            { text: "Barry", correct: false},
            { text: "Genovia", correct: true},
            { text: "Avalanche", correct: true }
        ]
    },
    {
        question: "Dans 'the last of us part 2'  , comment s'appel le frêre de joël ?",
        answer: [
            { text: "Jessy", correct: false },
            { text: "Tommy", correct: true},
            { text: "Rory", correct: false},
            { text: "Jérôôôôôôôm", correct: false}
        ]
    },
    {
        question: "Quand sont sortie 'Pokemon diamant étincelant et perle sintillante' ?",
        answer: [
            { text: "18 / 11 /2020", correct: false },
            { text: "14 / 11 /2020", correct: false},
            { text: "18 / 12 /2021", correct: false},
            { text: "18 / 11 /2021", correct: true }
        ]
    },
    {
        question: "Dans quel but faisons nous les exos et projet de la formation ?",
        answer: [
            { text: "pour les sous", correct: false },
            { text: "pour nous améliorer", correct: true},
            { text: "nous permet de créer des sites de cucul", correct: false},
            { text: "pour montrer qu'ont sais le faire", correct: false }
        ]
    },
    {
        question: "peut-ont faire un alert() sur le navigateur sans I.D.E (phpstorm) ? juste avec un fichier .text ",
        answer: [
            { text: "non", correct: false },
            { text: "oui", correct: true},

        ]
    },
    {
        question: "Dans 'Halo 1' pourquoi le protagoniste doit faire explosé halo ?",
        answer: [
            { text: "A l'huile", correct: false },
            { text: "pour empêcher les covenantes de s'en emparré", correct: true},
            { text: "pour détruire le parasite", correct: false},
            { text: "parce que c'est cool quand ça pête de partout", correct: false }
        ]
    },
    {
        question: "Dans 'Final Fantasy 7 (remake)', combien de tenus (Cloud , tifa et aerith) peuvent t-ils debloquer ?",
        answer: [
            { text: "11", correct: false},
            { text: "3", correct: false},
            { text: "6", correct: false},
            { text: "9", correct: true}
        ]
    },
    {
        question: "De quel couleur les cheveux de goku son-t-ils quand il est super sayan ?",
        answer: [
            { text: "rouge", correct: false },
            { text: "bleu", correct: false},
            { text: "blanc", correct: false},
            { text: "jaune", correct: true }
        ]
    },
    {
        question: "Qui a inventer le lanhuage PASCAL ?",
        answer: [
            { text: "Blaise Pascal et Nicolas Tesla", correct: false },
            { text: "Jérôme Conan et Sebastien Dumont", correct: false},
            { text: "Niklaus Wirth et Urs Amman", correct: true},
            { text: "Naruto et Sasuke", correct: false}
        ]
    }
]

starting.click(startGame);

suivant.click(function () {
    $(".btn").addClass("hide");
    actualQuestionIndex++;
    voir();
    active = true;
});

function startGame() {

    $(".btn").addClass("hide");
    $("span").addClass("hide");
    $("p").addClass("hide");
    questionElement.removeClass("hide");
    result.innerHTML = "";

    goodRep = 0;
    starting.addClass("hide");

    randomQuestion = question.sort(() => Math.random() - 0.5);
    actualQuestionIndex = 0;

    questionContainer.removeClass("hide");
    setSuivant();
}

function setSuivant() {
    suivant.addClass("hide");
    voir(randomQuestion[actualQuestionIndex]);
}

function voir() {

    questionElement.html(question[actualQuestionIndex].question);
    question[actualQuestionIndex].answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", clickable);
        repBtnElement.append(button);
    })
}

function clickable(e) {
    const selectedBtn = e.target;
    if (active) {

        if (selectedBtn.dataset.correct === "true") {
            goodRep++;
        }
        else {
            for (let x = 0; x < question[actualQuestionIndex].answer.length; x++) {
                if (question[actualQuestionIndex].answer[x].correct === true) {
                    result.innerHTML += question[actualQuestionIndex].question + "<br>" + " Réponse : " + question[actualQuestionIndex].answer[x].text + "<br>";
                }
            }

        }
    }

    active = false;

    if (randomQuestion.length > actualQuestionIndex + 1) {
        suivant.removeClass("hide");
    }

    else {
        active = true;
        $(".btn").addClass("hide");
        questionElement.addClass("hide");
        starting.html("Restart");
        starting.removeClass("hide");
        starting.click(function () {
            window.location.reload();
        });
        let spanCrea = document.createElement("span");
        let response = "réponses correctes : " + goodRep + "/10";
        spanCrea.style.fontSize = "3rem";
        spanCrea.style.fontStyle = 'italic';
        spanCrea.innerHTML = response;
        repBtnElement.append(spanCrea);
        repBtnElement.append(result);
    }
}