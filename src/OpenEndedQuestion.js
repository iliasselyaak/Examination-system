class OpenEndedQuestion extends Question {
    constructor(question) {
        super(question)
    }

    getOEQ() {
        return this.question;
    }
}