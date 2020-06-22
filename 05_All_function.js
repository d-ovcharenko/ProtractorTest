describe ('Operation with function', function()
{
    function Add(a,b)
    {
        element(by.model("first")).sendKeys(a);
        browser.sleep('1000');
        element(by.model("second")).sendKeys(b)
        element(by.id("gobutton")).click().then(function ()
        {
            browser.sleep('1000');
        });
    }
    //repeater, chain locators, css for identical tags
    it('Using function', function() {
        //browser.waitForAngularEnabled(false); //use it only for non angular apps
        browser.get('https://juliemr.github.io/protractor-demo/');
        browser.driver.manage().window().maximize();

    Add(1,0);
    Add(2,1);
    Add(3,2);
    Add(4,3);
    Add(5,4);

        element.all(by.repeater("result in memory")).count().then(function (text)
        {
            console.log(text);
        });

        element.all(by.repeater("result in memory")).each(function (item)
        {
            item.element(by.css("td:nth-child(3)")).getText().then(function (text)
            {
                console.log(text);
            });
        });
    });
});
