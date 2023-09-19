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

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];

    for (let i = 1; i <= 4; i++) {
        const answer = question[`answer_${i}`];
        document.getElementById(`answer_${i}`).innerHTML = answer;
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('right answer is', question['right_answer']);
}