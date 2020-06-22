describe ('Practise site', function()
        {
            it('Practice 1', function()
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
                //выбирает все опции на основании локатора, который указан. тут речь про radio button
                element.all(by.name('inlineRadioOptions')).first().click();
                //определяет текст в кнопке и по нему понимает какую кнопку надо нажать
                element(by.buttonText('Submit')).click().then(function ()
                    {
                    element(by.css("div[class*='success']")).getText().then(function (text)
                        {
                        console.log(text);
                        });
                    });
                browser.sleep('5000');
            });
        });
