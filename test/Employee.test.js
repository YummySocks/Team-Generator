const Employee = require('../lib/Employee')

describe("Employee",() =>{
    describe("name",()=> {
        it("should return the name given", () =>{
            const empTest = new Employee("patrick","3","what@gmail.com")

            const nameTest = "patrick"

            expect(nameTest).toEqual(empTest.getName())
        })
    })
    describe("id",()=> {
        it("should return the id given", () =>{
            const empTest = new Employee("patrick","3","what@gmail.com")

            const idTest = "3"

            expect(idTest).toEqual(empTest.getId())
        })
    })
    describe("email",()=> {
        it("should return the email given", () =>{
            const empTest = new Employee("patrick","3","what@gmail.com")

            const emailTest = "what@gmail.com"

            expect(emailTest).toEqual(empTest.getEmail())
        })
    })
})
