function login(username, password) {
    var r = Registry.getInstance();
    user = r.getUser(username);
    sessionStorage.setItem("username", username);
    console.log(sessionStorage.getItem("username"))
    if(user != undefined){
      state = user.login(username, password);
      if(state == true){
        console.log("successful login");
        if(user instanceof Administrator) {
          window.location.href = "./pages/admin/dashboard.html";
        }
        else if(user instanceof Trainee) {
          window.location.href = "./pages/trainee/dashboard.html?user="+username;
        }
        else if(user instanceof Trainer) {
          location.assign("./pages/trainer/trainer.html?users="+username);
        }
      }
      else{
        console.log("unsuccessful login");
      }
    }
    else{
      console.log("username does not exist");
    }
    
}
