function addModulesToTable(table) {
    var r = Registry.getInstance();
    var modules = r.getModules()
    console.log(modules);
    var counter = 0;
    for(const module of modules) {
        var row = $("<tr class='tr'></tr>").append("<td>" + module.getCode() + "</td>");
        row.append("<td>" + module.getName() + "</td>");
        row.append("<td>" + (module.getTrainee().length + module.getTrainers().length) + "</td>");
        row.append("<td><select class='select' name='actions' id='i"+counter+"'><option value=''>Select Action</option><option value='1'>Add User</option><option value='2'>Remove User</option></select></td>");
        row.append("<button id='btn' class='action-button'" + "onclick=editModule('#i"+counter+"',"+counter+")"+">Edit</button>");
        table.append(row);
        counter = counter +1;
    }
}

function editModule(id,i){
    const option = document.querySelector(id);
    if (option.value == ""){
        alert("Please select an action");
    }
    else if (option.value == "1"){
        window.location.href="addUserToModule.html?id="+i+"";

    }
    else if (option.value == "2"){
        window.location.href="RemoveUserFromModule.html?id="+i+"";
    }
    
}

function addUserInterface(body){
    const urlParams = new URLSearchParams(window.location.search);
    const i = urlParams.get('id');
    var r = Registry.getInstance();
    var modules = r.getModules();
    var users = r.getUsers();
    var row = $("<div></div>");
    row.append("<h3>Module: "+modules[i].getCode()+" "+modules[i].getName()+"</h3>");
    var trainers = "";
    var trainees = "";
    for (const user of users){
        if(!modules[i].trainers.some(e => e.username === user.getUsername()) && !modules[i].trainees.some(e => e.username === user.getUsername())){
            if(user instanceof Trainer) {trainers = trainers + ("<option value='"+user.getUsername()+"'>"+user.getUsername()+"</option>");}
            else if(user instanceof Trainee) {trainees = trainees + ("<option value='"+user.getUsername()+"'>"+user.getUsername()+"</option>");}
        }
    }
    if (trainers == ""){
        trainers = trainers + ("<option value='empty'>No available trainers</option>");
    }
    if (trainees == ""){
        trainees = trainees + ("<option value='empty'>No available trainees</option>");
    }
    row.append("<label>Username:</label>")
    row.append("<select id='users'> <option value=''>Select User</option> <optgroup label='Trainers'>"+ trainers+ "</optgroup>"+ "<optgroup label='Trainees'>"+trainees+"</optgroup></select><br>");
    row.append("<button onclick='addUserToModule()' class='button'>Add</button>");

    body.append(row);
}

function addUserToModule(){
    var user = $('#users').val();
    // Add user object
    if(user == "empty"){
        alert("No available users.")
    }
    else if (user != "" || user != undefined){
        const urlParams = new URLSearchParams(window.location.search);
        const i = urlParams.get('id');
        var r = Registry.getInstance();
        var modules = r.getModules();
        
        var userObj = r.getUser(user);
        r.addUserToModule(i,userObj);
        window.location.href="modules.html";
        
    }
    else if (user == ""){
        alert("Please select a user.")
    }
}

function removeUserInterface(body){
    const urlParams = new URLSearchParams(window.location.search);
    const i = urlParams.get('id');
    var r = Registry.getInstance();
    var modules = r.getModules();
    var row = $("<div></div>");
    row.append("<h3>Module: "+modules[i].getCode()+" "+modules[i].getName()+"</h3>");
    var trainers = "";
    var trainees = "";
    for (const trainer of modules[i].trainers){
        trainers = trainers + ("<option value='"+trainer.username+"'>"+trainer.username+"</option>");
    }
    for (const trainee of modules[i].trainees){
        trainees = trainees + ("<option value='"+trainee.username+"'>"+trainee.username+"</option>");
    }
    if (trainers == ""){
        trainers = trainers + ("<option value='empty'>No available trainers</option>");
    }
    if (trainees == ""){
        trainees = trainees + ("<option value='empty'>No available trainees</option>");
    }
    row.append("<label>Username:</label>")
    row.append("<select id='users'> <option value=''>Select User</option> <optgroup label='Trainers'>"+ trainers+ "</optgroup>"+ "<optgroup label='Trainees'>"+trainees+"</optgroup></select><br>");
    row.append("<button onclick='removeUserFromModule()' class='button'>Remove</button>");

    body.append(row);
}

function removeUserFromModule(){
    var user = $('#users').val();
    // Remove user object
    if(user == "empty"){
        alert("No available users.")
    }
    else if (user != "" || user != undefined){
        const urlParams = new URLSearchParams(window.location.search);
        const i = urlParams.get('id');
        var r = Registry.getInstance();
        var modules = r.getModules();
        
        var userObj = r.getUser(user);
        r.removeUserFromModule(i,userObj);
        window.location.href="modules.html";
    }
    else if( user == ""){
        alert("Please select a user.")
    }
}