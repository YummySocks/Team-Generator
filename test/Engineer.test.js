const Engineer = require('../lib/Engineer')

describe("Engineer",() =>{
    describe("name",()=> {
        it("should return the name given", () =>{
            const engTest = new Engineer("patrick","3","what@gmail.com","Yummily")

            const nameTest = "patrick"

            expect(nameTest).toEqual(engTest.getName())
        })
    })
    describe("id",()=> {
        it("should return the id given", () =>{
            const engTest = new Engineer("patrick","3","what@gmail.com","Yummily")

            const idTest = "3"

            expect(idTest).toEqual(engTest.getId())
        })
    })
    describe("email",()=> {
        it("should return the email given", () =>{
            const engTest = new Engineer("patrick","3","what@gmail.com","Yummily")

            const emailTest = "what@gmail.com"

            expect(emailTest).toEqual(engTest.getEmail())
        })
    })
    describe("github",()=> {
        it("should return the github given", () =>{
            const engTest = new Engineer("patrick","3","what@gmail.com","Yummily")

            const gitTest = "Yummily"

            expect(gitTest).toEqual(engTest.getGithub())
        })
    })
})