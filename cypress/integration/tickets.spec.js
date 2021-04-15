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
    

    //cy.get(".agreement p").should("contain", `I, ${fullname}, wish to buy 2 VIP tickets`);


    it("Select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });

    it.only("Select 'Vip Tickect' type", () => {
        cy.get("#vip").check();
    });


    it("Selects Social Media checkbox",() => {
        cy.get("#social-media").check();
    });

    it("Selects 'Friend' and 'Publication' then uncheck 'friend'", () =>{
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });
    
    it("Has 'TICKETBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
    });

    it("Alerts on invalid email", () => {
        cy.get("#email")
        .as("email")
        .type("ricardofellini-msn.com");

        cy.get("email.invalid").should("exist");

        cy.get("@email")
        .clear()
        .type("ricardofellini@msn.com")
    
    cy.get("#email.invalid").should("not.exist");
    });
    
    it("Fills and reset the form", () =>{
        const firstName = "Ricardo";
        const lastName = "Fellini";
        const fullName = `${firstName} ${lastName}`;
        const email = "ricardofellini@msn.com";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type(email);
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.get("#requests").type("Beer Test");
        cy.get(".agreement p").should("contain", `I, ${fullName}, wish to buy 2 VIP tickets.`);

        cy.get("#agree").click();
        cy.get("#signature").type(fullName);

        cy.get("button[type='submit']")
        .as("submitButton")
        .should("not.be.disabled");

        cy.get("button[type='reset']").click();

        cy.get("@submitButton").should("be.disabled");

    });

    it("Fills mandatory fields using support command", () => {
        const customer = {
            firstName: "Joao",
            lastName: "Silva",
            email: "joaosilva@example.com"
        };

        cy.fillMandatoryFields(customer);

        cy.get("button[type='submit']")
        .as("submitButton")
        .should("not.be.disabled");

        cy.get("#agree").uncheck();

        cy.get("@submitButton").should("be.disabled");
    });

});

