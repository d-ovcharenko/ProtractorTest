describe ('Alerts', function()
        {
            it('Open NonAngular js website Alerts', function()
            {
                browser.waitForAngularEnabled(false);
                browser.driver.manage().window().maximize();
                browser.get('http://qaclickacademy.com/practice.php');
                element(by.id('confirmbtn')).click();
                browser.sleep('1000');
                browser.switchTo().alert().accept().then(function ()
                //для отмены нужно использовать dismiss
                // browser.switchTo().alert().dismiss().then(function ()
                {
                    console.log("The end");
                    browser.sleep('2000');
                });
            });
        });
