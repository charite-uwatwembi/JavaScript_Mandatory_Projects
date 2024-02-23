// Quiz questions and answers represented as objects
const quizQuestions = [
    {
        question: 'What is the capital of France?',
        choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        choices: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars',
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        choices: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'Mark Twain'],
        correctAnswer: 'William Shakespeare',
    },
];

let correctAnswers = 0;
let incorrectAnswers = 0;

// Function to display a random quiz question with multiple-choice answers
const displayRandomQuestion = () => {
    
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    const currentQuestion = quizQuestions[randomIndex];

    console.log(currentQuestion.question);

   
    for (let index = 0; index < currentQuestion.choices.length; index++) {
        console.log(`${index + 1}. ${currentQuestion.choices[index]}`);
    }

    
    console.log("Enter your answer (by entering the option number):");

    
    const userAnswer = '3'; 

    if (userAnswer && parseInt(userAnswer) === currentQuestion.choices.indexOf(currentQuestion.correctAnswer) + 1) {
        console.log('Correct!');
        correctAnswers++;
    } else {
        console.log(`Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`);
        incorrectAnswers++;
    }

    
    console.log(`Correct Answers: ${correctAnswers}`);
    console.log(`Incorrect Answers: ${incorrectAnswers}`);
};


displayRandomQuestion();
