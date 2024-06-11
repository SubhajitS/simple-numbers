import { Result } from "./result"

export class QuizEntry {
    key: number
    state: Result

    constructor(number: number, state: Result = Result.unset) {
        this.key = number
        this.state = state
    }
}