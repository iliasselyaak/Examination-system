function printOEQuestion(module, i){
    document.write("<li> <div className=" + "Question >" +  module.OEquestionBank[i].question+  " <button id="+i+" onClick=deleteOEQuestion(this.id)"+">Delete</button>  </div> </li>");
}

function printCEQuestion(module, i){
    document.write("<li> <div className=" + "Question >" +  module.CEquestionBank[i].question + " " + module.CEquestionBank[i].answer + " " + module.CEquestionBank[i].variants + " " + module.CEquestionBank[i].feedbacks + " " + module.CEquestionBank[i].values + " <button id="+i+" onClick=deleteCEQuestion(this.id)"+">Delete</button> </div> </li>");
}


function printAllQuestions(){
    console.log(Registry.getInstance());
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    let modules = Registry.getInstance().getModules();
    let module = modules[moduleIndex];
    document.write("<p> Open Ended Questions </p>");
    for (let i=0;i<module.OEquestionBank.length;i++){
        printOEQuestion(module, i);
    }
    document.write("<p> Close Ended Questions </p>");
    for (let i=0;i<module.CEquestionBank.length;i++){
        printCEQuestion(module, i);
    }
} 

function addOEQuestionToModule(){
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    let q = prompt("Please enter the question");
    let OEquestion = new OpenEndedQuestion(q);
    Registry.getInstance().addOEquestion(moduleIndex, OEquestion);
    location.reload();
}

function deleteOEQuestion(index){
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    Registry.getInstance().removeOEquestion(moduleIndex, index);
    location.reload();
}

function deleteCEQuestion(index){
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    Registry.getInstance().removeCEquestion(moduleIndex, index);
    location.reload();
}

function createCloseEndedQuestion(){
    location.assign("../../pages/trainer/createCEquestion.html");
}