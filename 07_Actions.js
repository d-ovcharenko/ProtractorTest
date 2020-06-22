describe ('Actions', function()
{
    it('Open site', function()
    {
        //browser.waitForAngularEnabled(false);
        browser.get("https://posse.com/");
        browser.driver.manage().window().maximize();
        element.all(by.className("location")).get(7).click()
        browser.sleep('5000');
        element(by.css("a[ng-href='/place/GB/London/Victoria and Albert Museum']")).click().then(function ()
        {
            browser.getTitle().then(function (title)
            {
                console.log(title+" | title of the page before switching");
            });
            //функция переключения на страницу по ссылке
            browser.getAllWindowHandles().then(function (handles)
            {
                browser.switchTo().window(handles[1]);
                //чтобы получить название страницы
                browser.getTitle().then(function (title)
                {
                    console.log(title+" | title of the page after switching");
                });
                //функция переключения на исходную страницу
                browser.switchTo().window(handles[0]);
            });
        });
        //вариант использования короткого пути
        //element(by.css("a[ng-href*='/London/Victoria and Albert Museum']")).click();
        browser.sleep('5000');
    });
});

/*
Функция actions:
browser.get('https://posse.com');
element(by.model("userInputQuery")).sendKeys("river");
//actions используется, когда надо выполнить последовательность действий 
//actions будет выполняться только если в конце есть .perform()
//перемещает курсор мыши в выбранное поле:
browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform()
//нажимает клавишу "вниз" на клавиатуре:
browser.actions.sendKeys(protractor.Key.ARROW_DOWN).perform()
//нажимает клавишу "Enter" на клавиатуре:
browser.actions.sendKeys(protractor.key.ENTER).perform().then(function()
{
    browser.sleep(2000);
    //тест пройдет, если количество будет равно 7
    //если ожидается число, то лучше использовать .toEqual(), если строка то .toBe()
    expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7)
    //чтобы выбрать первый элемент из списка:
    element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
    //чтобы нажать на ссылку в выбранном элементе(ng-href* - позволяет не указывать весь путь целиком):
    element(by.css("a[ng-href*='London/River Island']")).click();
})
*/