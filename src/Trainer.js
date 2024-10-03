class Trainer extends User {
    constructor(username, password, email) {
        super(username, password, email)
    }

    createCEQ(question, answer, variants, feedbacks, values, module) {
        return new CloseEndedQuestion(question, answer, variants, feedbacks, values)
    }

    createOEQ(question, module) {
        return new OpenEndedQuestion(question);
    }

    markOpenEndedQuestions() {
        //Not sure yet - need user interface for that 
    }

    composeTest(questions) {
        test = new TestTemplate(null, null);
        for(let question of questions) {
            test.addQuestion(question)
        }
        //Set other parts
        return test;
    }

    removeQuestionFromTest(question, test) {
        if (question instanceof CloseEndedQuestion){
            return test.removeCloseEndedQuestion(question);
        }
        else if (question instanceof OpenEndedQuestion){
            return test.removeOpenEndedQuestion(question);
        }
    }

    addQuestionToTest(question, test) {
        if (question instanceof CloseEndedQuestion){
            return test.addCloseEndedQuestion(question);
        }
        else if (question instanceof OpenEndedQuestion){
            return test.addOpenEndedQuestion(question);
        }
    }

    getAllMyModules(){
        let myModules =[];
        for (let i=0; i<Registry.getInstance().modules.length;i++) {
            for (let j=0; j<Registry.getInstance().modules[i].trainers.length;j++){
                if (this == Registry.getInstance().modules[i].trainers[j]){
                    myModules.push(Registry.getInstance().modules[i]);
                }
            } 
        }
        return myModules;        
    }
}