function addModule(body) {
    body.find("#error-message").hide();
    try { 
        checkInputs(body);
    } catch (e) {
        body.find("#error-message").show();
        body.find("#error-message").text(e);
        return
    }

    var module = body.find("#module").val();
    var code = body.find("#code").val();

    r = Registry.getInstance();
    r.addModule(new Module(code, module)); 

    window.location.href="modules.html";
}

function checkInputs(body) {
    var code = body.find("#code").val();
    if(code == ""|| code == undefined) {
        throw "Code is empty";
    }

    var module = body.find("#module").val();
    if(module == ""|| module == undefined) {
        throw "Module name is empty";
    }


}