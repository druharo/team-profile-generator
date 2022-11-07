const Intern = require('../lib/Intern')
const intern = new Intern(1, "ruharo", "druharo")

intern.school = "ntare"

describe("intern", () => {
    describe("school", () => {
        test('school', () => {
            expect(intern.school).toBeTruthy();
        });
    });
    describe("getSchool", () => {
        test('isTruthy', () => {
            expect(intern.getSchool()).toBeTruthy();
        });
    });
    describe("getRole", () => {
        test('isTruthy', () => {
            expect(intern.getRole()).toEqual("Intern");
        });
    });
})
