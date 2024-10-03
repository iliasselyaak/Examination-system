
function printTestOEQuestion(test, i){
    document.write("<li> <div className=" + "Question >" +  test.openEndedQuestions[i].question+ "<button id="+i+" onClick="+"deleteOETestQuestion(this.id)"+">Delete</button> </div></li>");
}


function printTestCEQuestion(test, i){
    document.write("<li> <div className=" + "Question >" +  test.closeEndedQuestions[i].question + " " + test.closeEndedQuestions[i].answer + " " + test.closeEndedQuestions[i].variants + " " + test.closeEndedQuestions[i].feedbacks + " " + test.closeEndedQuestions[i].values + "<button id="+i+" onClick="+"deleteCETestQuestion(this.id)"+">Delete</button> </div> </li>");
}


function deleteCETestQuestion(index){
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    let testIndex = sessionStorage.getItem("testTemplateIndex");
    Registry.getInstance().removeCEQuestionFromTest(moduleIndex, testIndex, index)
    location.reload();
}

function deleteOETestQuestion(index){
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    let testIndex = sessionStorage.getItem("testTemplateIndex");
    Registry.getInstance().removeOEQuestionFromTest(moduleIndex, testIndex, index);
    location.reload();

}



function printAllTestQuestions(){
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    let testTemplateIndex = sessionStorage.getItem("testTemplateIndex");
    let testList =  Registry.getInstance().getTestTemplates(moduleIndex);
    test = testList[testTemplateIndex];
    //let test = Registry.getInstance().modules[moduleIndex].tests[testTemplateIndex];
    document.write("<p>Open Ended Questions</p>");
    for (let i=0;i<test.openEndedQuestions.length;i++){
        printTestOEQuestion(test, i);
    }
    document.write("<p>Close Ended Questions</p>");
    for (let i=0;i<test.closeEndedQuestions.length;i++){
        printTestCEQuestion(test, i);
    }
}

function addQuestionToTest(){
    location.assign("../../pages/trainer/addTestQuestion.html");    
}


