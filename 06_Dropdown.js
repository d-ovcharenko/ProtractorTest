describe ('Operation with dropdown', function()
{
    function Calc(a,b,c)
    {
        element(by.model("first")).sendKeys(a);
        browser.sleep('1000');
        element(by.model("second")).sendKeys(b)
        browser.sleep('1000');
        element.all(by.tagName("option")).each(function (item)
        {
            item.getAttribute("value").then(function (values)
            {
                if (values == c) {
                    item.click();
                }
            });
        });
        element(by.id("gobutton")).click();
    }

    it('Using dropdown', function()
    {
        //browser.waitForAngularEnabled(false); //use it only for non angular apps
        browser.get('https://juliemr.github.io/protractor-demo/');
        browser.driver.manage().window().maximize();

        Calc(1,5,"MULTIPLICATION");
        Calc(2,4,"DIVISION");
        Calc(3,3,"SUBTRACTION");
        Calc(4,2,"ADDITION");

        element.all(by.repeater("result in memory")).each(function (item)
        {
            item.element(by.css("td:nth-child(3)")).getText().then(function (text)
            {
                console.log(text);
                browser.sleep('1000');
            });
        });
    });
});

//To use specific operator:
//element(by.model("operator")).element(by.css("td:nth-child(4)")).click();