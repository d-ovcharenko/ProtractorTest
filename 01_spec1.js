describe ('First test suite', function()
        {
            it('first test case - open site', function()
            {
                browser.waitForAngularEnabled(false);
                browser.driver.manage().window().maximize();
                browser.get('https://google.com');
                browser.get('https://dropbox.com').then(function ()
                {
                    console.log("The end :)");
                    browser.sleep('1000');
                });
            });
        });

//first parameter - Test suite name
    //second parameter - function (function will have all tests ("it" blocks))

    //first parameter - Test case name
    //second parameter - function (inside the function is Protractor)
    //"describe" and "it" - it's Jasmine

//Для связи с преподавателем курса
// rahulonlinetutor@gmail.com