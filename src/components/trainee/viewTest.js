//store the ids of all of the inputs
var ids = [];
var correctAnswers = [];

function loadTest(username, module){
  moduleObject = Registry.getInstance().getModule(module);
  allTestTemplates = moduleObject.getTestTemplates();
  test = allTestTemplates[0];
  closeEndedQs = test.getCloseEndedQuestions();
  openEndedQs = test.getOpenEndedQuestions();
  totalLength = closeEndedQs.length + openEndedQs.length;

  var heading = document.createElement("h2");
  var title = document.createTextNode(moduleObject.getName() + " - Test");
  heading.appendChild(title);
  document.body.appendChild(heading);

  var form = document.createElement("form");
  var div = document.createElement("div");
  //form.setAttribute("onsubmit", submitTest());
  let questionsArray = [];
  i = 0;
  //changed j to an integer and put it in a while loop
  var j = 0;
  while(j < closeEndedQs.length){
    variants = closeEndedQs[j].variants;
    var textual = closeEndedQs[j].question;
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(parseInt(j)+1 + ") " + textual));
    div.append(p);
    //var br = document.createElement("br");
    //div.appendChild(br);
    for(variant in variants){
      var answerDiv = document.createElement("div");
      var q = document.createElement("input");
      q.setAttribute("type", "radio");
      // in the event of a MCQ, the id is the question number - the answer number (e.g. 0-0)
      q.setAttribute('id', j+"-"+i);
      ids.push(j+"-"+i);
      q.setAttribute("name", j);
      q.setAttribute("value", variants[variant]);

      if(variant == closeEndedQs[j].answer){
        correctAnswers[j] = variants[variant];
      }

      var label = document.createElement("label");
      label.htmlFor = i;
      var description = document.createTextNode(variants[variant]);
      label.appendChild(description);
      var newline = document.createElement("br");

      answerDiv.appendChild(q);
      answerDiv.appendChild(label);
      answerDiv.appendChild(newline);
      div.appendChild(answerDiv);
      i = i+1;
    }
    j = j + 1;
  }

    for(k in openEndedQs){
      var textual = openEndedQs[k].question;
      var op = document.createElement("p");
      op.appendChild(document.createTextNode(parseInt(j)+1 + ") " + textual));
      div.append(op);
      var boxDiv = document.createElement("div");
      var box = document.createElement("textarea");
      box.setAttribute("rows", "5");
      box.setAttribute("cols", "136")
      // for open ended questions, the id is the question number
      box.setAttribute("id", j);
      ids.push(j);
      boxDiv.appendChild(box);
      div.appendChild(boxDiv);
      i = i + 1;
    }
    document.getElementsByTagName("body")[0].appendChild(form);
    document.getElementsByTagName("form")[0].appendChild(div);
  }





  function submitTest(module, username){
    moduleObject = Registry.getInstance().getModule(module);
    allTestTemplates = moduleObject.getTestTemplates();
    test = allTestTemplates[0];
    closeEndedQs = test.getCloseEndedQuestions();
    openEndedQs = test.getOpenEndedQuestions();

    // An array to store the answers to the question. The index of the array corresponds to the question number (first question is 0)
    var answers = [];
    var closeEndedA = [];
    var openEndedA = [];

    for (let i = 0; i < ids.length; i++) {
      var id = ids[i];
      // if the id contains "-" then it is a close ended question
      if(id.toString().includes("-")){
        var idSplit = id.split("-");
        // get the question number
        var question = idSplit[0];
        var index = idSplit[1];

        // if it finds a checked radio button, add it to the answers array at the question number
        if(document.getElementById(id).checked){
          var answer = document.getElementById(id).value;
          // double check that the answer is selected
          if(answer) {
            answers[question] = answer;
            closeEndedA[question] = answer;
          }
        }
        /*
        submit = document.getElementById(ids[i]).checked;
        console.log(submit);
        // submit = document.getElementById("hi").value;
        // console.log(submit);
        */
      } else {
        // if the id does not contain "-" then it is an open ended question
        // get the question number
        var question = id;
        // get the answer
        answers[question] = document.getElementById(id).value;
        openEndedA[question-closeEndedA.length] = document.getElementById(id).value;
      }
  }

testObj = test.generateTest(username, closeEndedA, openEndedA);
//console.log(testObj);
//Registry.getInstance().addTestToModule(module, testObj, 0);
window.localStorage.setItem(username+ "-" + module, JSON.stringify(testObj));
window.localStorage.setItem(username+ "-" + module + "CE", JSON.stringify(correctAnswers));

window.location.href = "./dashboard.html?user="+username;

}

