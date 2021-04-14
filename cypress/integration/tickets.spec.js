//const { it } = require("mocha");

describe("Tickets", () =>{

    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))
    
    it("Fills all the text input fields", () => {

        const firstName = "Ricardo";
        const lastName = "Fellini";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("ricardofellini@msn.com");
        cy.get("#requests").type("Testes");
        cy.get("#signature").type(lastName);

    });
    
    it("Select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });

    it.only("Select 'Vip Tickect' type", () => {
        cy.get("#vip").check();
    });
    
    it("has 'TICKETBOX header's heading", () => {});

});

