describe ('Protractor elements', function()
{
    //Here is prerequisite
    var obj = require("./pageObject.js");
    //var data = require("./pageObject.js");
    var using = require("jasmine-data-provider");
    var drive = require("./dataDriven.js");

    beforeEach(function()
    {
        obj.getUrl();
        console.log("Test is started");
    });
    
    //use "using" block if you want to parametrize test cases from Jasmine-data-provider
    //"data" stores actual data. "description" stores sub object name. for every iteration one data set is picked
    using(drive.dataDriven, function (data, description) {

    it('Locators' +description, function() {
        //browser.waitForAngularEnabled(false); //use it only for non angular apps
        obj.getUrl();        
        //browser.driver.manage().window().maximize();
        obj.firstInput.sendKeys(data.first);
        browser.sleep('2000');
        obj.secondInput.sendKeys(data.second);
        obj.goButton.click().then(function ()
        {
            browser.sleep('2000');
        });
        expect(obj.result.getText()).toBe(data.results);
        //exepect - is Jasmine conept. Jasmine takes care of promise resolve
        //tagname[attribute='value']
        obj.result.getText().then(function (text)
        {
            console.log(text);
        });

    });
    });
    //Here is postconditions
    afterEach(function()
    {
        console.log("Test is completed");
    });
});
