function car()
{
    this.color="red";
    this.engine="turbo";
    this.brand="BMW";

    this.getModel()=function()
    {
        console.log("this is 2020 model");
    };
};
/*
var a = new car();
a.getModel();
*/
//to make available some class from any file need to export it like this:
module.exports = new car();