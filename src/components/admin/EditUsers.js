var tableref;

function addUsersToTable(table) {
    tableref = table;
    var r = Registry.getInstance();
    var users = r.getUsers()
    for(const user of users) {
        var row = $("<tr class='tr'></tr>").append("<td>" + user.getUsername() + "</td>");
        row.append("<td>" + user.getEmail() + "</td>");
        if(user instanceof Trainee) {
            row.append("<td>Trainee</td>");
        } else if(user instanceof Trainer) {
            row.append("<td>Trainer</td>");
        } else if(user instanceof Administrator) {
            row.append("<td>Administrator</td>");
        }
        row.append("<button class='action-button' onclick='deleteUser(\""+ user.getUsername() + "\")'>Delete</button>");
        table.append(row);
    }
}

function refreshUsers() {
    //clear the table
    tableref.empty();
    tableref.append("<tr class='th'><th>Username</th><th>Email</th><th>Type</th><th>Actions</th></tr>");
    var r = Registry.getInstance();
    var users = r.getUsers()
    for(const user of users) {
        var row = $("<tr class='tr'></tr>").append("<td>" + user.getUsername() + "</td>");
        row.append("<td>" + user.getEmail() + "</td>");
        if(user instanceof Trainee) {
            row.append("<td>Trainee</td>");
        } else if(user instanceof Trainer) {
            row.append("<td>Trainer</td>");
        } else if(user instanceof Administrator) {
            row.append("<td>Administrator</td>");
        }
        row.append("<button class='action-button' onclick='deleteUser(\""+ user.getUsername() + "\")'>Delete</button>");
        tableref.append(row);
    }
}

function deleteUser(username) {
    var r = Registry.getInstance();
    var user = r.getUser(username);
    r.removeUser(user);
    refreshUsers();
}

function editUser(username) {
    sessionStorage.setItem("username", username);
    window.location.href = "edituser.html";
}