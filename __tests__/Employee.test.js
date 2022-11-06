const Employee = require('../src/Employee')
const employee = new Employee(1, "ruharo", "druharo")

describe("Employee", () => {
    describe("name", () => {
        test('name', () => {
            expect(employee.name).toBeTruthy();
        });
    });
    describe("Id", () => {
        test('Id', () => {
            expect(employee.id).toBeTruthy();
        });
    });
    describe("Email", () => {
        test('Email', () => {
            expect(employee.email).toBeTruthy();
        });
    });
    describe("getName", () => {
        test('isTruthy', () => {
            expect(employee.getName()).toBeTruthy();
        });
    });

    describe("getId", () => {
        test('isTruthy', () => {
            expect(employee.getId()).toBeTruthy();
        });
    });
    describe("getEmail", () => {
        test('isTruthy', () => {
            expect(employee.getEmail()).toBeTruthy();
        });
    });
    describe("getRole", () => {
        test('isTruthy', () => {
            expect(employee.getRole()).toEqual("Employee");
        });
    });

});