const Engineer = require('../src/Engineer')
const engineer = new Engineer(1, "ruharo", "druharo")

engineer.github = "druharo"

describe("Engineer", () => {
    describe("github", () => {
        test('github', () => {
            expect(engineer.github).toBeTruthy();
        });
    });
    describe("getGithub", () => {
        test('isTruthy', () => {
            expect(engineer.getGithub()).toBeTruthy();
        });
    });   
    describe("getRole", () => {
        test('isTruthy', () => {
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });   

})
