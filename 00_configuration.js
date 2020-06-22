var Jasmine2HtmlCliReporter = require('protractor-jasmine2-html-cli-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //IE will runs only without directConnect
    //directConnect: true,
    //framework: 'jasmine',
    //allScriptsTimeout: 15000,
    //specs: ['01_spec1.js'],
    //specs: ['02_ElementBasics.js'],
    //specs: ['03_ChainLocators.js'],
    //specs: ['04_All.js'],
    //specs: ['05_All_function.js'],
    //specs: ['06_Dropdown.js'],
    //specs: ['07_Actions.js'],
    //specs: ['08_Alerts.js'],
    //specs: ['09_Frames.js'],
    //specs: ['010_Sync.js'],
    //specs: ['011_PracticeExercise.js'],
    //specs: ['012_Negative test.js'],
    //specs: ['013_Negative test 2.js'],
    //specs: ['014_Add to cart.js'],
    specs: ['015_ElementBasicsNew.js'],
    //test suite to run few test cases at a time
    suites: 
    {
        Smoke: ['01_spec1.js', '02_ElementBasics.js', '03_ChainLocators.js'],
        Regression: ['04_All.js', '05_All_function.js', '06_Dropdown.js', '07_Actions.js'],
    },
    //if you want to write common prerequests for all test cases in your project
    //which is you describe in this block will be executed first, before every test cases:
    onPrepare:function()
    {
        //here you can initialize to reports from each case
        //also you can add strings for NonAngular sites:
        //browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        //for creation reports
            jasmine.getEnv().addReporter(
              new Jasmine2HtmlCliReporter({
                savePath: 'target/screenshots'
              })
            );
    },
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
      },
    capabilities: {
        'browserName': 'chrome',
        //'browserName': 'firefox',
        //'browserName': 'internet explorer',
        //chromeOnly:true,
    //useAllAngular2AppRoots: true,
    },
};