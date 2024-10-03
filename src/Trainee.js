class Trainee extends User{
    constructor(username, password, email) {
        super(username, password, email)
    }

    getTraineeModules(){
      let traineeModules = [];
      for(let i = 0; i < Registry.getInstance().modules.length; i++){
        for(let j = 0; j < Registry.getInstance().modules[i].trainees.length; j++){
          if(this == Registry.getInstance().modules[i].trainees[j]){
            traineeModules.push(Registry.getInstance().modules[i]);
          }
        }
      }
      return traineeModules;
    }
}
