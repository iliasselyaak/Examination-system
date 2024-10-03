function addTraineesModulesToTable(table, traineeUser){
  window.username = traineeUser;
  trainee = Registry.getInstance().getUser(traineeUser);
  traineesModules = trainee.getTraineeModules();
  var counter = 0;
  window.allModules = [];
  for(traineeModule of traineesModules){
    var row = $("<tr class = moduleContent></tr>").append("<td class = moduleContent>" + traineeModule.getCode() + "</td>");
    row.append("<td class = moduleContent>" + traineeModule.getName() + "</td>");
    var moduleObject = Registry.getInstance().getModule(traineeModule.getCode());
    allModules.push(moduleObject);
    var allTestTemplates = moduleObject.getTestTemplates();
    if(allTestTemplates.length != 0 && JSON.parse(window.localStorage.getItem(traineeUser + "-" + traineeModule.getCode())) == undefined){
      //username = traineeUser;
      row.append("<button class = 'testbutton'" + "onclick=test("+counter+")"+"> Take Test </button>");
    } else if(JSON.parse(window.localStorage.getItem(traineeUser + "-" + traineeModule.getCode())) != undefined){
      //username = traineeUser;
      row.append("<button class = 'testbutton'" + "onclick=review("+counter+")"+"> Review Grade </button>");
    }
    table.append(row);
    counter = counter  + 1;
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

function review(counter){
  var code = allModules[counter].getCode();
  window.location.href = "./reviewPage.html?user="+username+"&module="+code;
}


function test(counter){
  var code = allModules[counter].getCode();
  window.location.href = "./testPage.html?user="+username+"&module="+code;
}
