describe ('Synchronization', function()
        {
            it('Open NonAngular js site with Synchronization', function() {
                browser.waitForAngularEnabled(false);
                browser.driver.manage().window().maximize();
                browser.get("http://itgeared.com/demo/1506-ajax-loading.html");
                element(by.css("a[href*='loadAjax']")).click();
                var EC = protractor.ExpectedConditions;
                //используется чтобы дожаться пока объект исчезнет
                browser.wait(EC.invisibilityOf(element(by.id("loader"))),5000);
                //используется чтобы дожаться пока объект появится
                //browser.wait(EC.visibilityOf(element(by.id("results"))),5000);
                element(by.id("results")).getText().then(function (text) {
                    console.log(text);
                    browser.sleep('2000');
                });
            });
        });

//другие элементы синхронизации можно найти тут: https://www.protractortest.org/#/api?view=ProtractorExpectedConditions