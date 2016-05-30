'use strict';

describe("Biodata test", function () {
    it("should have a title", function () {
        browser.get('http://alrianahm.github.io/Protractor/App/biodata.html');
        expect(browser.getTitle()).toEqual('Biodata');
    });

    describe("memory", function () {

        var name, year, button;
        beforeEach(function () {
            name = element(by.model("vm.name"));
            year = element(by.model("vm.year"));
            button = element(by.id("calculateButton"));
        })

        var memory = element.all(by.repeater("result in vm.memory"));
        it("should start with empty memory", function () {
            expect(memory.count()).toEqual(0);
        });

        it("should not add to memory when all field empty", function () {
            button.click();
            expect(memory.count()).toEqual(0);
        });

        it("should not add to memory when year empty", function () {
            name.sendKeys("Alriana");
            button.click();
            expect(memory.count()).toEqual(0);
        });
/*
        it("should not add to memory when name empty", function () {
            button.click();
            expect(memory.count()).toEqual(0);
        });
*/
    })

});