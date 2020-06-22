describe ('Frames', function()
        {
            it('Open NonAngular js website with iFrames', function()
            {
                browser.waitForAngularEnabled(false);
                browser.driver.manage().window().maximize();
                browser.get('http://qaclickacademy.com/practice.php');
                //чтобы переключится в окно фрейма
                browser.switchTo().frame("courses-iframe");
                element(by.css("a[href*='sign_in']")).getText().then(function (text)
                {
                    console.log(text);
                });
            });
        });
