
function printTest(module, i){
    document.write("<li> <div className=" + "Test" + " >" + module.tests[i].name + " " + module.tests[i].description + "<button id="+i+" onClick="+"deleteTest(this.id)"+">Delete</button> <button id="+i+" onClick="+"editTest(this.id)"+">View and Edit</button> </div> </li>");
}

function deleteTest(index){
    moduleIndex = sessionStorage.getItem("moduleIndex");
    Registry.getInstance().removeTestTemplate(moduleIndex, index);
    location.reload();
}

function printAllTests(){
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    let modules = Registry.getInstance().getModules();
    let module = modules[moduleIndex];
    for (let i=0;i<module.tests.length;i++){
        printTest(module, i);
    }
}

function editTest(index){
    sessionStorage.setItem("testTemplateIndex", index);
    console.log(sessionStorage.getItem("testTemplateIndex"));
    location.assign("../../pages/trainer/viewTestTemplate.html");
}