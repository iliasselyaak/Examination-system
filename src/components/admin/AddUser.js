function addUser(body) {
    body.find("#error-message").hide();
    try { 
        checkInputs(body);
    } catch (e) {
        body.find("#error-message").show();
        body.find("#error-message").text(e);
        return
    }

    var admin = body.find("#admin").prop("checked");
    var trainee = body.find("#trainee").prop("checked");
    var trainer = body.find("#trainer").prop("checked");

    var username = body.find("#username").val();
    var email = body.find("#email").val();
    var password = body.find("#password").val();

    var u;
    if(admin) {
        u = new Administrator(username, password, email);
    } else if(trainee) {
        u = new Trainee(username, password, email);
    } else if(trainer) {
        u = new Trainer(username, password, email);
    }

    r = Registry.getInstance();
    console.log("Registry: ", r);
    console.log("Adding user: " + u);
    r.addUser(u);

    window.location.href="users.html";
}

function checkInputs(body) {
    if(body.find("input[type='radio']:checked").val() == undefined) {
        throw "Select a user type."
    }

    var username = body.find("#username").val();
    if(username == "" || username == undefined) {
        throw "Username box is empty."
    }

    var email = body.find("#email").val();
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    if(!validateEmail(email)) {
        throw "Enter a valid email."
    }

    var password = body.find("#password").val();
    if(password.length < 8) {
        throw "Password invalid."
    }
}