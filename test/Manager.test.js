const Manager = require('../lib/Manager')

describe("Manager",() =>{
    describe("name",()=> {
        it("should return the name given", () =>{
            const manTest = new Manager("patrick","3","what@gmail.com","4043035555")

            const nameTest = "patrick"

            expect(nameTest).toEqual(manTest.getName())
        })
    })
    describe("id",()=> {
        it("should return the id given", () =>{
            const manTest = new Manager("patrick","3","what@gmail.com","4043035555")

            const idTest = "3"

            expect(idTest).toEqual(manTest.getId())
        })
    })
    describe("email",()=> {
        it("should return the email given", () =>{
            const manTest = new Manager("patrick","3","what@gmail.com","4043035555")

            const emailTest = "what@gmail.com"

            expect(emailTest).toEqual(manTest.getEmail())
        })
    })
    describe("number",()=> {
        it("should return the phone number given", () =>{
            const manTest = new Manager("patrick","3","what@gmail.com","4043035555")

            const numberTest = "4043035555"

            expect(numberTest).toEqual(manTest.getNumber())
        })
    })
})