class Module {
    trainers = [];
    tests = [];
    trainees = [];
    CEquestionBank =[];
    OEquestionBank = [];

    constructor(code, name) {
        this.code = code;
        this.name = name;
    }

    addTrainee(trainee) {
        this.trainees.push(trainee);
    }

    removeTrainee(trainee) {
        //remove from trainees array
        this.trainees.splice(trainee,1);
    }

    addTrainer(trainer) {
        this.trainers.push(trainer);
    }

    removeTrainer(trainer) {
        //remove from trainer array
        this.trainers.splice(trainer,1);
    }

    addTest(test) {
        this.tests.push(test);
    }

    removeTest(test) {
        //remove from test array
        this.tests.splice(test,1);
    }

    getCode() {
        return this.code;
    }

    getName() {
      return this.name;
    }

    getTrainers() {
        return this.trainers;
    }

    getTrainee() {
        return this.trainees;
    }

    getTestTemplates() {
        return this.tests;
    }

    getTestTemplate(name) {
        for(const test of this.tests) {
            if(test.getName() == name) {
                return test;
            }
        }
    }

    getCEQuestionBank() {
        return this.CEquestionBank;
    }

    getOEQuestionBank(){
        return this.OEquestionBank;
    }



    addToCEQuestionBank(question, answer, variants, feedbacks, values){
        let q = new CloseEndedQuestion(question, answer, variants, feedbacks, values);
        this.CEquestionBank.push(q);
    }

    addToOEQuestionBank(question){
        let q = new OpenEndedQuestion(question);
        this.OEquestionBank.push(q);
    }
}
