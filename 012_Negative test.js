describe ('Negative test', function()
        {
            it('Error handle', function()
            {
                //browser.waitForAngularEnabled(false);
                browser.driver.manage().window().maximize();
                browser.get('https://qaclickacademy.github.io/protocommerce/');
                element(by.name('name')).sendKeys("Practice");
                element(by.css("input[name='email']")).sendKeys("practice@mail.com");
                element(by.id('exampleInputPassword1')).sendKeys("password");
                element(by.css("input[type='checkbox']")).click();
                //чтобы выбрать конкретную опцию из нескольких при одинаковых локаторах
                element(by.cssContainingText("[id='exampleFormControlSelect1'], option", 'Female')).click();
                element.all(by.name('inlineRadioOptions')).first().click();
                element(by.buttonText('Submit')).click().then(function ()
                    {
                    element(by.css("div[class*='success']")).getText().then(function (text)
                        {
                        console.log(text);
                        });
                    });
                //вариант 1 для получения сообщения об ошибке
                //чтобы очистить введенное значение
                element(by.name("name")).clear();
                element(by.name("name")).sendKeys("E").then(function ()
                {
                    element(by.css("[class='alert alert-danger']")).getText().then(function (text)
                    {
                        console.log(text);
                    })
                });
                browser.sleep('3000');
            });
        });
