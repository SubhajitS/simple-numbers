import { Outcome } from "./outcome";
import { QuizEntry } from "./quiz-entry";
import { Result } from "./result";

export class Game {
    private totalQuestions: number;
    private max: number;
    private min: number;
    private complexity: 2 | 3 | 4;
    private pointer: number = 0;
    private state: Array<Array<QuizEntry>> = [];

    constructor(totalQuestions: number = 10, complexity: 2 | 3 | 4 = 2, max: number = 20, min: number = 0) {
        this.totalQuestions = totalQuestions;
        this.complexity = complexity;
        this.max = max;
        this.min = min;
        this.initiateGame();
    }

    getQuestion(delta: 1 | 0 | -1): Array<QuizEntry> {
        if ((this.pointer + delta < this.totalQuestions) && (this.pointer + delta >= 0))
            this.pointer += delta;

        return this.state[this.pointer];
    }

    setAnswer(input: number): Array<QuizEntry> {
        const maxNumber = Math.max(...this.state[this.pointer].map(x => x.key))

        this.state[this.pointer].forEach(entry => {
            if (entry.key !== input)
                entry.state = Result.off
            if (entry.key === input) {
                if (input === maxNumber) {
                    entry.state = Result.right
                }
                else {
                    entry.state = Result.wrong
                }
            }
        });
        return this.state[this.pointer];
    }

    resetAnswer(): Array<QuizEntry> {
        this.state[this.pointer].forEach(entry => {
            entry.state = Result.off
        })

        return this.state[this.pointer];
    }

    resetAll(): Array<QuizEntry> {
        this.state.flatMap(x => x).forEach(e => e.state = Result.off);
        this.pointer = 0;
        return this.state[this.pointer];
    }

    getResult(): Outcome {
        const correct = this.state.flatMap(x => x).filter(e => e.state === Result.right).length;
        return new Outcome(this.totalQuestions, correct)
    }

    private initiateGame() {
        for (let i = 0; i < this.totalQuestions; i++) {
            const set: Array<QuizEntry> = [];
            for (let j = 0; j < this.complexity; j++) {
                set.push(new QuizEntry(this.getRandomArbitrary(this.min, this.max)))
            }
            this.state.push(set);
        }
    }

    private getRandomArbitrary(min: number, max: number): number {
        return Math.ceil(Math.floor((Math.random() * (max - min) + min) * 100) / 100);
    }
}