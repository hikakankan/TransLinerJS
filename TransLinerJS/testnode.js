var ex = function(name)
{
    this.name = name;
    //this.print = function()
    //{
    //    console.log("testnode " + this.name);
    //};
    //this.print2 = function()
    //{
    //    console.log("testnode2 " + this.name);
    //};
};
ex.prototype.print = function()
{
    console.log("testnode " + this.name);
};
ex.prototype.print2 = function()
{
    console.log("testnode2 " + this.name);
};
module.exports = ex;
