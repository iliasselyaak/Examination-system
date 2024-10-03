class Administrator extends User {
    constructor(username, password, email) {
        super(username, password, email)
    }

    createModule(name){
        //Create module object with code name
        module = new Module(name);
        return module;
    }

    addTrainerToModule(user,module){
        //Add trainer to module
        module.addTrainer(user);
    }

    removeUser(user){
        //Delete user from Registry List
        if (Registry.getInstance().removeUser(user)){
            return true;
        }
        return false;
    }

    removeModule(module){
        //Delete module from Registry List
        if (Registry.getInstance().removeModule(module)){
            return true;
        }
        return false;
    }
        //Returns boolean

    removeTrainerFromModule(module, trainer){
        //Returns boolean
    }

    addTraineeToModule(trainee, module){
        //Returns boolean
        module.addTrainee(user);
    }

    removeTraineeFromModule(traineem,module){
        //Returns boolean
    }

    createTrainee(username, password, email){
        //Returns trainee
        newTrainee = new Trainee(username, password, email);
        if(Registry.getInstance().addUser(newTrainee)){
          return newTrainee;
        }
        return null;
    }

    createTrainer(username, password, email){
        //Returns Trainer
        newTrainer = new Trainer(username, password, email);
        if(Registry.getInstance().addUser(newTrainer)){
          return newTrainer;
        }
        return null;
    }

    createAdministrator(username,password, email){
        //Returns Administrator
        newAdmin = new Administrator(username, password, email);
        if(Registry.getInstance().addUser(newAdmin)){
          return newAdmin;
        }
        return null;
    }
}
