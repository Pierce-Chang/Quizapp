let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was ist die Hauptfunktion von HTML?",
        "answer_1": "Bildbearbeitung",
        "answer_2": "Musikproduktion",
        "answer_3": "Textformatierung",
        "answer_4": "Strukturierung von Webseiten",
        "right_answer": 4
    },
    {
        "question": "Welche Programmiersprache wird hauptsächlich für Webentwicklung verwendet?",
        "answer_1": "Java",
        "answer_2": "Python",
        "answer_3": "Ruby",
        "answer_4": "JavaScript",
        "right_answer": 4
    },
    {
        "question": "Welches Element wird verwendet, um Überschriften in HTML darzustellen?",
        "answer_1": "<p>",
        "answer_2": "<div>",
        "answer_3": "<h1>-<h6>",
        "answer_4": "<span>",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet CSS?",
        "answer_1": "Computer Science and Software",
        "answer_2": "Cascading Style Sheets",
        "answer_3": "Creative Style Selector",
        "answer_4": "Colorful Style System",
        "right_answer": 2
    },
    {
        "question": "Welche Methode wird verwendet, um Inhalte in JavaScript in die Konsole auszugeben?",
        "answer_1": "print()",
        "answer_2": "log()",
        "answer_3": "console()",
        "answer_4": "display()",
        "right_answer": 2
    },
    {
        "question": "Welche Dateiendung wird normalerweise für HTML-Dateien verwendet?",
        "answer_1": ".xml",
        "answer_2": ".html",
        "answer_3": ".css",
        "answer_4": ".js",
        "right_answer": 2
    }
];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
            document.getElementById('rightAnswers').innerHTML = rightQuestions;
            document.getElementById('amountOfQuestions').innerHTML = currentQuestion;
            document.getElementById('endScreen').style = '';
            document.getElementById('questionBody').style = 'display: none';
            document.getElementById('header-image').src = 'img/tropy.png';
            document.getElementById('header-image').classList.add('tropy-endscreen');
}

function answer(selection) {  // selection is the parameter for the answer_i variable out of html code
    let question = questions[currentQuestion];  //question get the count of the array questions[0,1,2,3...] in this case the actual "0" for the first question
    let selectedQuestionNumber = selection.slice(-1); //give selectedQuestionNumber the value of last char from selection 'answer_(i)'
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function updateProgressBar() {
    let percent =  (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
}

function updateToNextQuestion() {
    updateProgressBar();
    let question = questions[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').textContent = question['question'];

    for (let i = 1; i <= 4; i++) {
        const answer = question[`answer_${i}`];
        document.getElementById(`answer_${i}`).textContent = answer;
    }
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-image').src = 'img/brainbg.jpg';
    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('header-image').classList.remove('tropy-endscreen');
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}