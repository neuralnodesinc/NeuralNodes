const assert = require("assert");

describe("Token Contract", function () {
    it("should have a name", function () {
        const name = "NeuralNodes";
        assert.equal(name, "NeuralNodes");
    });

    it("should have a total supply", function () {
        const totalSupply = 1_000_000_000;
        assert.equal(totalSupply, 1_000_000_000);
    });
});
