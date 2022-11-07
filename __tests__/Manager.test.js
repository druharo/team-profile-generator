const Manager = require('../lib/Manager')
const manager = new Manager(1, "ruharo", "druharo")

manager.officeNumber = 401

describe("Mananager", () => {
    describe("officeNumber", () => {
        test('officeNumber', () => {
            expect(manager.officeNumber).toBeTruthy();
        });
    });
    describe("getRole", () => {
        test('isTruthy', () => {
            expect(manager.getRole()).toEqual("Manager");
        });
    });   
})


