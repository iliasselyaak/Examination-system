function reviewGrade(username, module){
    const parseObj = JSON.parse(localStorage.getItem(username + "-" + module));
    const parseAnswers = JSON.parse(localStorage.getItem(username + "-" + module + "CE"));
    marks = 0
    trackq = 0
    var br = document.createElement("br");
    var div = document.createElement("div");
    div.setAttribute('id', 'whole');

    moduleObject = Registry.getInstance().getModule(module);

    var heading = document.createElement("h2");
    heading.className = "heading";
    var title = document.createTextNode(moduleObject.getName() + " - Test Review");
    heading.appendChild(title);
    document.body.appendChild(heading);


    //FOR CLOSED ENDED QUESTIONS ONLY!!
    for (let i = 0; i < parseObj.template.closeEndedQuestions.length; i++) {

        var questionDiv = document.createElement("div");
        questionDiv.className = "questionBox";

        //THIS PRINTS QUESTION NUMBER
        var h3 = document.createElement("h3");
        var QuestionNumber = document.createTextNode("Question "+(i+1) + ") ");
        h3.appendChild(QuestionNumber);
        questionDiv.appendChild(h3);

        var p = document.createElement("p");
        p.className = "question";
        var QuestionQ = document.createTextNode(parseObj.template.closeEndedQuestions[i].question);
        p.appendChild(QuestionQ);
        questionDiv.appendChild(p);

        //IF ANSWER IS CORRECT:
        if (parseObj.CloseEndedAnswers[i] == parseAnswers[i]){
            var p1 = document.createElement("p");
            var markC = document.createElement("mark");
            markC.className = 'correct';
            var UserAns = document.createTextNode("Your answer: " + parseObj.CloseEndedAnswers[i] + " was correct! ");
            markC.appendChild(UserAns);
            p1.appendChild(markC);
            questionDiv.appendChild(p1);

            p1.setAttribute('id', ("id"+i));
            //document.getElementById(("id"+i)).classList.add('correct');
            correctIndex = parseObj.template.closeEndedQuestions[i].answer;
            allValues = parseObj.template.closeEndedQuestions[i].values;
            marks = marks + allValues[correctIndex];

            var p2 = document.createElement("p");
            p2.className = "mark";
            var QMarks = document.createTextNode(allValues[correctIndex] + "/" + allValues[correctIndex]);
            p2.appendChild(QMarks);
            questionDiv.appendChild(p2);

        }

        //IF ANSWER IS WRONG:
        else{
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            var markW = document.createElement("mark");
            markW.className = 'incorrect';
            var UserAns = document.createTextNode("Your answer was: " + parseObj.CloseEndedAnswers[i]);
            var CorrectAns = document.createTextNode("The correct answer was: " + parseAnswers[i]);
            markW.appendChild(UserAns);
            p1.appendChild(markW);
            p2.appendChild(CorrectAns);
            questionDiv.appendChild(p1);
            questionDiv.appendChild(p2);

            p1.setAttribute('id', ("id"+i));
            //document.getElementById(("id"+i)).classList.add('incorrect');

            correctIndex = parseObj.template.closeEndedQuestions[i].answer;
            allValues = parseObj.template.closeEndedQuestions[i].values;
            var indexIncorrect = null;

            for(let j = 0; j < parseObj.template.closeEndedQuestions[i].variants.length; j++){
              if(parseObj.template.closeEndedQuestions[i].variants[j] == parseObj.CloseEndedAnswers[i]){
                indexIncorrect = j
              }
            }

            var p3 = document.createElement("p");
            p3.className = 'mark';
            if(parseObj.CloseEndedAnswers[i] == undefined){
              var QMarks = document.createTextNode(0 + "/" + allValues[correctIndex]);
            }
            else{
              var QMarks = document.createTextNode(parseObj.template.closeEndedQuestions[i].values[indexIncorrect] + "/" + allValues[correctIndex]);
            }
            p3.appendChild(QMarks);
            questionDiv.appendChild(p3);
        }
        trackq++;

        div.appendChild(questionDiv);
        document.write("<br>");
    }


    //FOR OPEN ENDED QUESTIONS ONLY!!
    for (let i = 0; i < parseObj.template.openEndedQuestions.length; i++) {
        var openQuestionDiv = document.createElement("div");
        trackq++;
        //THIS PRINTS QUESTION NUMBER
        var h3 = document.createElement("h3");
        var QuestionNumber = document.createTextNode("Question "+(trackq) + ") ");
        h3.appendChild(QuestionNumber);
        openQuestionDiv.appendChild(h3);

        //PRINT QUESTION
        var p = document.createElement("p");
        var QuestionQ = document.createTextNode(parseObj.template.openEndedQuestions[i].question);
        p.className = "question";
        p.appendChild(QuestionQ);
        openQuestionDiv.appendChild(p);

        //PRINT ANSWER
        var p2 = document.createElement("p");
        var UserAns = document.createTextNode("Your answer was: " + parseObj.OpenEndedAnswers);
        p2.appendChild(UserAns);
        openQuestionDiv.appendChild(p2);
        div.appendChild(openQuestionDiv);
        document.write("<br>");
    }
    const grade = document.createElement("p");
    grade.className = "grade";
    var gradecalc = "";
    if(parseObj.template.closeEndedQuestions.length > 0){
      gradecalc = document.createTextNode("Grade awarded: " + ((marks/parseObj.template.closeEndedQuestions.length) * 100) + "%");
    } else {
      gradecalc = document.createTextNode("Grade awarded: TBD");
    }
    grade.appendChild(gradecalc);
    div.appendChild(grade);
        //q.setAttribute('id', "id"+i);
        //q.setAttribute("name", "name"+i);
        //p.appendChild(q);



    document.body.appendChild(div);
}
