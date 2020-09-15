/// <reference types="cypress" />
const clilog = console.log

describe("Suit", () => {
    before(() => {
        clilog("Running suit: ");
    });
    after(() => {
        clilog("Completing suit: ");
    });
    describe("Test: Some Test", () => {
        before(() => {
            clilog("Before Test: ");
        });
        after(() => {
            clilog("After Test: ");
        });
        xit( "This is the test to skip", ()=>{
            //test code
            clilog("Running Test: ");
        });
        it( "This is the sample test", ()=>{
            //test code
            clilog("Running Test: ");
        });
    });
});
