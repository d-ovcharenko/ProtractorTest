describe ('Protractor elements', function()
{
    it('Locators', function() {
        browser.waitForAngularEnabled(false); //use it only for non angular apps
        browser.get('https://juliemr.github.io/protractor-demo/');
        browser.driver.manage().window().maximize();
        element(by.model("first")).sendKeys("5");
        browser.sleep('2000');
        element(by.model("second")).sendKeys("4");
        element(by.id("gobutton")).click().then(function ()
        {
            browser.sleep('2000');
        });
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("9");
        //exepect - is Jasmine conept. Jasmine takes care of promise resolve
        //tagname[attribute='value']
        element(by.css("h2[class='ng-binding']")).getText().then(function (text)
        {
            console.log(text);
        });

    });
});
