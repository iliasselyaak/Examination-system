class TestTemplate {

    openEndedQuestions = [];
    closeEndedQuestions = [];
    openEndedPoints =[];
    closeEndedPoints=[];
    startDate;
    endDate;
    name;
    description;
    duration;
    tests =[];

    constructor(name, description){
        this.name=name;
        this.description=description;
    }

    generateTest(username, closeEndedAnswers, openEndedAnswers){
        let newTest = new Test(this, Registry.getInstance().getUser(username), openEndedAnswers, closeEndedAnswers);
        return newTest;
    }

    getTest(username){
        for (let i = 0; i < this.tests.length; i++) {
            if (username == tests[i].getUsername()){
                return tests[i];
            }
        }
    }

    addCloseEndedQuestion(question){
        confirm = true;
        try{
            this.closeEndedQuestions.push(question);
        }
        catch(err){
            confirm = false;
        }
        return confirm;
    }

    addOpenEndedQuestion(question){
        confirm = true;
        try{
            this.openEndedQuestions.push(question);
        }
        catch(err){
            confirm = false;
        }
        return confirm;
    }

    removeCloseEndedQuestion(question){
        confirm = false;
        for (let i = 0; i < this.closeEndedQuestions.length; i++) {
            if (question == this.closeEndedQuestions[i]) {
                this.closeEndedQuestions.splice(i,1);
                this.closeEndedPoints.splice(i,1);
                confirm = true;
                break;
            }
        }
        return confirm;
    }

    removeOpenEndedQuestion(question){
        confirm = false;
        for (let i = 0; i < this.openEndedQuestions.length; i++) {
            if (question == this.openEndedQuestions[i]) {
                this.openEndedQuestions.splice(i,1);
                this.openEndedPoints.splice(i,1);
                confirm = true;
                break;
            }
        }
        return confirm;
    }

    getName(){
        return this.name;
    }

    getDuration(){
        return this.duration;
    }

    getDescription(){
        return this.description;
    }

    getStartDate(){
        return this.startDate;
    }

    getEndDate(){
        return this.endDate;
    }

    getTests(){
        return this.tests;
    }

    getCloseEndedQuestions(){
        return this.closeEndedQuestions;
    }

    getOpenEndedQuestions(){
        return this.openEndedQuestions;
    }

    getCloseEndedQuestion(i){
        return this.closeEndedQuestions[i];
    }

    getOpenEndedQuestion(i){
        return this.openEndedQuestions[i]
    }

    getcloseEndedPoints(){
        return this.closeEndedPoints;
    }

    getOpenEndedPoints(){
        return this.openEndedPoints;
    }

    getOpenEndedPoint(i){
        return this.closeEndedPoints[i]
    }

    getCloseEndedPoint(i){
        return this.openEndedPoints[i]
    }

}
