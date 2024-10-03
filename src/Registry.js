class Registry {
    users = []
    modules = []
    static instance

    constructor() {
        this.users.push(new Trainer("testtrainer", "password", "trainer@example.com"));
        this.users.push(new Trainee("testtrainee", "password", "trainee@example.com"));
        this.users.push(new Administrator("testadmin", "password", "admin@example.com"));


        this.modules.push(new Module("M0001","module 1")) //Pushes new module object
        this.modules.push(new Module("M0002","module 2"))
        this.modules.push(new Module("M0003","module 3"))

        this.modules[0].addTrainer(this.users[0]);
        this.modules[1].addTrainer(this.users[0]);
        this.modules[2].addTrainer(this.users[0]);

        this.modules[0].addTrainee(this.users[1]);

        this.modules[0].addToCEQuestionBank("What is 2+2", 3, ["1", "2", "3", "4"], ["You are dumb", "You are dumb", "You are dumb", "Correct"], [0,0,0,1]);
        this.modules[0].addToOEQuestionBank("Tell us about you");

        this.modules[0].addTest(new TestTemplate("Test 1", "Default test"));
        this.modules[0].tests[0].addOpenEndedQuestion(this.modules[0].OEquestionBank[0]);
        this.modules[0].tests[0].addCloseEndedQuestion(this.modules[0].CEquestionBank[0]);
    }


    login(user) {
        //checks whether user exists in users array
        this.getFromJSON()
        confirm = false;
        try{
            for (let i = 0; i < this.users.length; i++) {
                if (user.getUsername() == this.users[i].getUsername()){
                    confirm = true;
                    break;
                }
            }
        }
        catch(err){
          confirm = false;
        }
        return confirm;
    }

    logout(user) {
        //checks whether user is logged in
    }

    addUser(user) {
        this.getFromJSON()
        confirm = true
        try{
            this.users.push(user)
            this.writeToJSON();
        }
        catch(err){
            console.log(err);
            confirm = false;
        }
        return confirm;
    }

    removeUser(user) {
        this.getFromJSON()
        confirm = true;
        try{
            for (let i = 0; i < this.users.length; i++) {
                if (user.getUsername() == this.users[i].getUsername()){
                    this.users.splice(i,1)
                    break;
                }
            }
            //remove user from module
            for (let i = 0; i < this.modules.length; i++) {
                this.removeUserFromModule(i, user);
            }
            this.writeToJSON();
        }
        catch(err){
            confirm = false;
        }
        return confirm;
    }

    addUserToModule(i,user){
        confirm = true
        try{
            if (user instanceof Trainer){
                this.modules[i].addTrainer(user)
            }
            if (user instanceof Trainee){
                this.modules[i].addTrainee(user)
            }
            this.writeToJSON();
        }
        catch(err){
            console.log(err);
            confirm = false;
        }
        return confirm;
    }

    removeUserFromModule(i,user){
        confirm = true;
        try{
            if (user instanceof Trainer){
                this.modules[i].removeTrainer(user);
            }
            if (user instanceof Trainee){
                this.modules[i].removeTrainee(user);
            }
            this.writeToJSON();
        }
        catch(err){
            confirm = false;
        }
        return confirm;
    }

    addModule(module){
        this.getFromJSON()
        confirm = true
        try{
            this.modules.push(module)
            console.log(this.modules);
            this.writeToJSON();
        }
        catch(err){
            console.log(err);
            confirm = false;
        }
        return confirm;
    }



    addCEquestion(moduleIndex, CEquestion){
        this.getFromJSON()
        this.modules[moduleIndex].CEquestionBank.push(CEquestion);
        this.writeToJSON();
    }

    addOEquestion(moduleIndex, OEquestion) {
        this.getFromJSON()
        this.modules[moduleIndex].OEquestionBank.push(OEquestion);
        this.writeToJSON();
    }


    addOEquestionToTestTemplate(moduleIndex, testTemplateIndex, OEquestion){
        this.getFromJSON()
        let a = this.modules[moduleIndex];
        console.log(testTemplateIndex);
        let b = a.tests[testTemplateIndex];
        b.openEndedQuestions.push(OEquestion);
        this.writeToJSON();
    }

    addCEquestionToTestTemplate(moduleIndex, testTemplateIndex, CEquestion){
        this.getFromJSON()
        this.modules[moduleIndex].tests[testTemplateIndex].closeEndedQuestions.push(CEquestion);
        this.writeToJSON();
    }

    removeCEquestion(moduleIndex, index){
        this.getFromJSON()
        this.modules[moduleIndex].CEquestionBank.splice(index,1);
        this.writeToJSON();
        this.getFromJSON()
    }

    removeOEquestion(moduleIndex, index){
        this.getFromJSON()
        this.modules[moduleIndex].OEquestionBank.splice(index,1);
        this.writeToJSON();
        this.getFromJSON()
    }

    removeCEQuestionFromTest(moduleIndex, testIndex, index){
        this.getFromJSON()
        this.modules[moduleIndex].tests[testIndex].closeEndedQuestions.splice(index,1);
        this.writeToJSON();
        this.getFromJSON();
    }

    removeOEQuestionFromTest(moduleIndex, testIndex, index){
        this.getFromJSON()
        this.modules[moduleIndex].tests[testIndex].openEndedQuestions.splice(index,1);
        this.writeToJSON();
        this.getFromJSON()
    }

    removeTestTemplate(moduleIndex, testTemplateIndex){
        this.getFromJSON()
        this.modules[moduleIndex].tests.splice(testTemplateIndex,1);
        this.writeToJSON();
        this.getFromJSON()
    }

    removeModule(module) {
        this.getFromJSON()
        confirm = true;
        try{
            for (let i = 0; i < this.modules.length; i++) {
                if (module == this.modules[i]){
                    this.modules.splice(i,i)
                    break;
                }
            }
            this.writeToJSON();
        }
        catch(err){
            confirm = false;
        }
        return confirm;
    }


    static getInstance() {
      if (!this.instance){
          this.instance = new Registry()
      }
      return this.instance
    }

    getUsers() {
        this.getFromJSON();
        return this.users;
    }

    getModules() {
        this.getFromJSON();
        return this.modules;
    }

    getTestTemplates(index) {
        this.getFromJSON();
        return this.modules[index].tests;
    }

    getModule(code) {
        this.getFromJSON();
        for(const module of this.modules) {
            if(module.getCode() == code) {
                return module;
            }
        }
    }


    addTestTemplateToModule(moduleIndex, testTemplate){
        this.getFromJSON();
        this.modules[moduleIndex].tests.push(testTemplate);
        this.writeToJSON();
    }

    getUser(username) {
        this.getFromJSON();
        for(const user of this.users) {
            if(user.getUsername() == username) {
                return user;
            }
        }
    }


    getCloseEndedQuestions(code){
        this.getFromJSON();
        for(const module of this.modules) {
            if(module.getCode() == code) {
                return module.CEquestionBank;
            }
        }
    }

    getOpenEndedQuestions(code){
        this.getFromJSON();
        for(const module of this.modules) {
            if(module.getCode() == code) {
                return module.OEquestionBank;
            }
        }
    }

    writeToJSON() {
        var admins = [];
        var trainees = [];
        var trainers = [];
        for(const user of this.users) {
            if(user instanceof Administrator) {
                admins.push(user);
            } else if(user instanceof Trainee) {
                trainees.push(user);
            } else if(user instanceof Trainer) {
                trainers.push(user);
            }
        }
        var data = {"admins" : admins, "trainees": trainees, "trainers": trainers, "modules" : this.modules};
        console.log(data);
        var toFile = JSON.stringify(data);
        sessionStorage.setItem("registry", toFile);
    }

    getFromJSON() {
        var json = JSON.parse(sessionStorage.getItem("registry"));
        if(json != null) {
            this.users = [];
            this.modules = [];
            var admins = json.admins;
            var trainees = json.trainees;
            var trainers = json.trainers;
            for(const admin of admins) {
                this.users.push(new Administrator(admin.username, admin.password, admin.email));
            }
            for(const trainee of trainees) {
                this.users.push(new Trainee(trainee.username, trainee.password, trainee.email));
            }
            for(const trainer of trainers) {
                this.users.push(new Trainer(trainer.username, trainer.password, trainer.email));
            }
            for(const module of json.modules) {
                var m = new Module(module.code, module.name);
                for(const trainer of module.trainers) {
                    m.addTrainer(this.#getUserNoUpdate(trainer.username));
                }
                for(const trainee of module.trainees) {
                    m.addTrainee(this.#getUserNoUpdate(trainee.username));
                }
                for(const test of module.tests) {
                    var t = new TestTemplate(test.name, test.description);
                        for(const closeEndedQuestion of test.closeEndedQuestions){
                            t.addCloseEndedQuestion(closeEndedQuestion);
                        }
                        for(const openEndedQuestion of test.openEndedQuestions){
                            t.addOpenEndedQuestion(openEndedQuestion);
                        }
                    m.addTest(t);
                }
                for(const ceQuestion of module.CEquestionBank) {
                    m.addToCEQuestionBank(ceQuestion.question, ceQuestion.answer, ceQuestion.variants, ceQuestion.feedbacks, ceQuestion.values);
                }
                for(const oeQuestion of module.OEquestionBank) {
                    m.addToOEQuestionBank(oeQuestion.question);
                }
                this.modules.push(m);
            }
        }
    }

    #getUserNoUpdate(username) {
        for(const user of this.users) {
            if(user.getUsername() == username) {
                return user;
            }
        }
    }
}
