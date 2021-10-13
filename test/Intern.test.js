const Intern = require('../lib/Intern')

describe("Intern",() =>{
    describe("name",()=> {
        it("should return the name given", () =>{
            const intTest = new Intern("patrick","3","what@gmail.com","GA-Tech")

            const nameTest = "patrick"

            expect(nameTest).toEqual(intTest.getName())
        })
    })
    describe("id",()=> {
        it("should return the id given", () =>{
            const intTest = new Intern("patrick","3","what@gmail.com","GA-Tech")

            const idTest = "3"

            expect(idTest).toEqual(intTest.getId())
        })
    })
    describe("email",()=> {
        it("should return the email given", () =>{
            const intTest = new Intern("patrick","3","what@gmail.com","GA-Tech")

            const emailTest = "what@gmail.com"

            expect(emailTest).toEqual(intTest.getEmail())
        })
    })
    describe("school",()=> {
        it("should return the school given", () =>{
            const intTest = new Intern("patrick","3","what@gmail.com","GA-Tech")

            const school = "GA-Tech"

            expect(school).toEqual(intTest.getSchool())
        })
    })
})