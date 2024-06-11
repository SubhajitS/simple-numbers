export class Outcome {
    totalQuestions: number;
    correctAnswers: number;
    correctPercentage: number;

    constructor(totalQuestions: number, correctAnswers: number) {
        this.totalQuestions = totalQuestions;
        this.correctAnswers = correctAnswers;
        this.correctPercentage = Math.floor(this.correctAnswers/this.totalQuestions)*100
    }
}