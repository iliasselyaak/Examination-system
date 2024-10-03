class Test {

    OpenEndedAnswers = []
    CloseEndedAnswers = []
    grade;
    feedback;
    user;
    template;

    constructor(template, user, openEndedAnswers, closeEndedAnswers){
        this.template = template;
        this.user = user;
        this.OpenEndedAnswers = openEndedAnswers;
        this.CloseEndedAnswers = closeEndedAnswers;
    }

    checkAnswers(){
        //check answer
    }

    getTest(){
        return this.Test;
    }

    getGrade(){
        return this.grade;
    }

    getFeedback(){
        return this.feedback;
    }

    getOEA(){
        return this.OpenEndedAnswers;
    }

    getCEA(){
        return this.CloseEndedAnswers;
    }

    markCloseENdedQuestions(){
        //marking algo
    }

    getUsername(){
        return this.username;
    }


}
