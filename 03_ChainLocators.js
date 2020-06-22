describe ('Chain locators', function()
{
    //3 concepts: repeater, chain locators, css for identical tags
    it('3 concepts', function()
    {
        //browser.waitForAngularEnabled(false); //use it only for non angular apps
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("5");
        browser.sleep('2000');
        element(by.model("second")).sendKeys("4")
        element(by.id("gobutton")).click().then(function ()
        {
            browser.sleep('2000');
        })
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text)
        {
            console.log(text);
        });
        /*
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("9");
        //tagname[attribute='value']
        element(by.css("h2[class='ng-binding']")).getText().then(function (text) {
            console.log(text);
        });
        */

        // element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    });
});
