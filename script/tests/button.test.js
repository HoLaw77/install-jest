const { TestScheduler } = require("jest");
const buttonClick = require("../tests/button");

beforeEach(() => {
    document.body.innerHTML = "<p id = 'par'></p>";
});

describe("DOM tests", () => {
    test("expect p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked");
    });
});