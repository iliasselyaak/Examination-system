function createTest(){
    let name =prompt("Enter Test name: ")
    let description =prompt("Enter Test Description: ");
    let moduleIndex = sessionStorage.getItem("moduleIndex");
    let test = new TestTemplate(name, description);
    Registry.getInstance().addTestTemplateToModule(moduleIndex, test);
    location.reload();
}