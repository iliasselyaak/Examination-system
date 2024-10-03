function addCEquestion(body){
    
    var question = body.find("#question").val();

    var varient0 = body.find("#variant0").val();
    var varient1 = body.find("#variant1").val();
    var varient2 = body.find("#variant2").val();
    var varient3 = body.find("#variant3").val();

    var feedback0 = body.find("#feedback0").val();
    var feedback1 = body.find("#feedback1").val();
    var feedback2 = body.find("#feedback2").val();
    var feedback3 = body.find("#feedback3").val();

    var value0 = body.find("#value0").val();
    var value1 = body.find("#value1").val();
    var value2 = body.find("#value2").val();
    var value3 = body.find("#value3").val();

    var correct = body.find("#correctOption").val();

    let q = new CloseEndedQuestion(question,correct,[varient0,varient1,varient2,varient3],[feedback0,feedback1,feedback2,feedback3],[value0,value1,value2,value3]);
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    Registry.getInstance().addCEquestion(moduleIndex, q);
    location.assign("../../pages/trainer/trainer.html");
}