
function printModule(myModules, i){
    document.write("<li> <div className=" + "Module >" +  myModules[i].code +  ", " + myModules[i].name +"<button id="+ i + " onClick=" +"viewQuestionsModule(this.id)" +">View Questions</button> <button id="+i+" onClick ="+"viewTestsModule(this.id)"+">View Tests</button> </div></li>");
}

function viewQuestionsModule(index){
    username = sessionStorage.getItem("username");
    trainer = Registry.getInstance().getUser(username);
    let  myModules = trainer.getAllMyModules();
    for (let i=0;i<Registry.getInstance().modules.length;i++){
        if(myModules[index] === Registry.getInstance().modules[i]){
            moduleIndex = i;
        }
    }
    sessionStorage.setItem("moduleIndex", moduleIndex);
    location.assign("../../pages/trainer/viewQuestions.html");
}

function viewTestsModule(index){
    username = sessionStorage.getItem("username");
    trainer = Registry.getInstance().getUser(username);
    let  myModules = trainer.getAllMyModules();
    for (let i=0;i<Registry.getInstance().modules.length;i++){
        if(myModules[index] === Registry.getInstance().modules[i]){
            moduleIndex = i;
        }
    }
    sessionStorage.setItem("moduleIndex", moduleIndex);
    location.assign("../../pages/trainer/chooseTest.html");
}


function trainerModules(username){
    trainer = Registry.getInstance().getUser(username);
    sessionStorage.setItem("username", username);
    let  myModules = trainer.getAllMyModules();
        for (let i=0; i<myModules.length; i++){
            printModule(myModules, i);
        }
}
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++){
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
  }
