describe ('Negative test', function()
        {
            it('Error handle', function()
            {
                //browser.waitForAngularEnabled(false);
                browser.driver.manage().window().maximize();
                browser.get('https://qaclickacademy.github.io/protocommerce/');
                //element(by.name('name')).sendKeys("Practice");
                element(by.css("input[name='email']")).sendKeys("practice@mail.com");
                element(by.id('exampleInputPassword1')).sendKeys("password");
                element(by.css("input[type='checkbox']")).click();
                //чтобы выбрать конкретную опцию из нескольких при одинаковых локаторах
                element(by.cssContainingText("[id='exampleFormControlSelect1'], option", 'Female')).click();
                element.all(by.name('inlineRadioOptions')).first().click();
                browser.sleep('2000');
                element(by.buttonText('Submit')).click().then(function ()
                    {
                        element.all(by.css("div[class*='success']")).count();
                        element(by.css("div[class*='success']")).getText().then(function (text)
                        {
                        console.log(text);
                        });
                    });
                //вариант 1 для получения сообщения об ошибке
                /*element(by.name("name")).clear();
                element(by.name("name")).sendKeys("E").then(function ()
                {
                    element(by.css("[class='alert alert-danger']")).getText().then(function (text)
                    {
                        console.log(text);
                    })
                });*/
                //вариант 2 для получения сообщения об ошибке
                browser.sleep('2000');
                element(by.name("name")).clear().then(function ()
                {
                    browser.sleep('1000');
                    element(by.css("[class='alert alert-danger']")).getText().then(function (text)
                    {
                        console.log(text);
                    })
                });

                /*element(by.css("input[name='email']")).clear().then(function ()
                {
                    browser.sleep('2000');
                    element(by.css("[class='alert alert-danger']")).getText().then(function (text)
                    {
                        console.log(text);
                    })
                });
                */
                browser.sleep('5000');
            });
        });
