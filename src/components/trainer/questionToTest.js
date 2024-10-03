function printOEQuestion2(module, i){
    document.write("<li> <div className=" + "Question >" +  module.OEquestionBank[i].question+  " <button id="+i+" onClick=addOEQuestionToTest(this.id)"+">Add to test</button> </div> </li>");
}

function printCEQuestion2(module, i){
    document.write("<li> <div className=" + "Question >" +  module.CEquestionBank[i].question + " " + module.CEquestionBank[i].answer + " " + module.CEquestionBank[i].variants + " " + module.CEquestionBank[i].feedbacks + " " + module.CEquestionBank[i].values + " <button id="+i+" onClick=addCEQuestionToTest(this.id)"+">Add To Test</button>  </div> </li>");
}


function printAllQuestions2(){
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    console.log(moduleIndex);
    let modules = Registry.getInstance().getModules();
    let module = modules[moduleIndex];
    document.write("<p> Open Ended Questions </p>");
    for (let i=0;i<module.OEquestionBank.length;i++){
        printOEQuestion2(module, i);
    }
    document.write("<p> Close Ended Questions </p>");
    for (let i=0;i<module.CEquestionBank.length;i++){
        printCEQuestion2(module, i);
    }
}
function addOEQuestionToTest(index){
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    let testIndex = sessionStorage.getItem("testTemplateIndex");
    let mods = Registry.getInstance().getModules();
    let mod = mods[moduleIndex]; 
    let q = mod.OEquestionBank[index];
    Registry.getInstance().addOEquestionToTestTemplate(moduleIndex, testIndex, q);
    location.assign("../../pages/trainer/viewTestTemplate.html");        
    }

function addCEQuestionToTest(index){
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    let testTemplateIndex = sessionStorage.getItem("testTemplateIndex");
    let q =  Registry.getInstance().modules[moduleIndex].CEquestionBank[index];
    Registry.getInstance().addCEquestionToTestTemplate(moduleIndex, testTemplateIndex, q); 
    location.assign("../../pages/trainer/viewTestTemplate.html"); 
}
