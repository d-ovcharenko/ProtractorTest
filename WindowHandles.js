/*
describe ('Actions', function()

{
    it('Open site', function()
    {
        //browser.waitForAngularEnabled(false);
        browser.get("https://posse.com/");
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

                browser.getTitle().then(function (title)
                {
                    console.log(title+" | title of the page before switching");
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


 */