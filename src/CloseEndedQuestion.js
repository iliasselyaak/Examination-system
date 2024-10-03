class CloseEndedQuestion extends Question {
    constructor(question, answer, variants, feedbacks, values) {
        super(question)
        this.answer = answer;
        this.variants = variants;
        this.feedbacks = feedbacks;
        this.values = values;
    }

    getAnswer() {
        return this.answer;
    }

    getVariants() {
        return this.variants;
    }

    getFeedbacks() {
        return this.feedbacks;
    }

    getValues() {
        return this.values;
    }
}