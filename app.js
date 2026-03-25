// app.js

// Firebase Configuration
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Authentication Functions
export const signUp = async (email, password) => {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('User signed up:', userCredential.user);
    } catch (error) {
        console.error('Error signing up:', error.message);
    }
};

export const logIn = async (email, password) => {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('User logged in:', userCredential.user);
    } catch (error) {
        console.error('Error logging in:', error.message);
    }
};

// Quiz System
const quizQuestions = [
    { question: 'What is 2 + 2?', answers: ['3', '4', '5'], correct: '4' },
    { question: 'What is the capital of France?', answers: ['Berlin', 'Madrid', 'Paris'], correct: 'Paris' }
];

let userScore = 0;

export const startQuiz = () => {
    quizQuestions.forEach((q, index) => {
        const userAnswer = prompt(q.question + '\nOptions: ' + q.answers.join(', '));
        if (userAnswer === q.correct) {
            userScore++;
            console.log('Correct!');
        } else {
            console.log('Wrong!');
        }
    });
    console.log('Your score:', userScore);
};

// User Progress Tracking
let userProgress = {};

export const trackProgress = (userId, score) => {
    userProgress[userId] = score;
    console.log('Progress tracked for user:', userId, 'Score:', score);
};

// Example function to use the features
export const runApp = () => {
    logIn('user@example.com', 'password') // Example of using logIn function
    .then(() => {
        startQuiz(); // Starting the quiz
        trackProgress('userId123', userScore); // Track progress
    });
};