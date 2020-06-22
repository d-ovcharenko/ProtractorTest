function elements()
{
    this.firstInput=element(by.model("first"));
    this.secondInput=element(by.model("second"));
    this.goButton=element(by.id("gobutton"));
    this.result=element(by.css("h2[class='ng-binding']"));
    
    this.getUrl=function()
    {
        browser.get('https://juliemr.github.io/protractor-demo/');
    };
};

module.exports = new elements;
/*
module.exports.dataDrive = 
{
    first:"5",
    second:"4",
    results: "9"
}
*/