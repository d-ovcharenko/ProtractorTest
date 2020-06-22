describe ('Chain locators', function()
{
    //repeater, chain locators, css for identical tags
    it('3 concepts', function() {
        //browser.waitForAngularEnabled(false); //use it only for non angular apps
        browser.get('https://juliemr.github.io/protractor-demo/');
        browser.driver.manage().window().maximize();
        element(by.model("first")).sendKeys("2");
        browser.sleep('2000');
        element(by.model("second")).sendKeys("1")
        element(by.id("gobutton")).click().then(function ()
        {
            browser.sleep('2000');
        });

        element(by.model("first")).sendKeys("3");
        browser.sleep('2000');
        element(by.model("second")).sendKeys("2")
        element(by.id("gobutton")).click().then(function ()
        {
            browser.sleep('2000');
        });

        element(by.model("first")).sendKeys("4");
        browser.sleep('2000');
        element(by.model("second")).sendKeys("3")
        element(by.id("gobutton")).click().then(function ()
        {
            browser.sleep('2000');
        });
        //.count - helps to get number of variables in the list
        element.all(by.repeater("result in memory")).count().then(function (text)
        {
            console.log(text);
        });

        element.all(by.repeater("result in memory")).each(function (item)
        {
            item.element(by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            });
        });
        /*
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("9");
        //tagname[attribute='value']
        element(by.css("h2[class='ng-binding']")).getText().then(function (text) {
            console.log(text);
        });
        */

    });
});
