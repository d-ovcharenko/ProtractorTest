describe ('Practise site', function()
        {
         function selectItem(product)
         {
             element.all(by.tagName("app-card")).each(function (item)
             {
             //если элемент уникален на странице, то можно не указывать детальный путь к нему, а только его название ( h4 -> a)
             //это применимо, если h4 единственный такой tag на странице. иначе надо указывать его полное расположение: "h4[class='card-title'] a"
             item.element(by.css("h4 a")).getText().then(function (text)
             {
                 if(text=="product")
                 {
                     //click on Add button
                     item.element(by.css("button[class*='btn-info']")).click();
                 }
             })
         })
         }

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
                element.all(by.name('inlineRadioOptions')).first().click();
                element(by.buttonText('Submit')).click().then(function ()
                    {
                    element(by.css("div[class*='success']")).getText().then(function (text)
                        {
                        console.log(text);
                        });
                    });
                browser.sleep('2000');
                //позволяет выбрать текст в линке
                element(by.linkText("Shop")).click();
                selectItem("Samsung Note 8");
                //selectItem("iphone X");
                //selectItem("Nokia Edge");
                //selectItem("Blackberry");

                //partialLinkText - позволяет выбрать текст в линке, если текст изменяется в процессе
                element(by.partialLinkText("Checkout")).getText().then(function (text)
                {
                    var res=text.split("(");
                    //.trim() - обрезает пробелы | .charAt(0) - позволяет выбрать определённый элемент | Number - делает из значения integer
                    var x=Number(res[1].trim().charAt(0));

                    for (let y=0;y>3;y=x+1)
                    {
                    console.log(y);
                    expect(res[1].trim().charAt(0)).toBe(y);
                    }
                })
            });
        });
