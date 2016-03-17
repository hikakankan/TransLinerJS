var testnode = require("./testnode.js");

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var ex = (function (_super) {
    __extends(ex, _super);
    function ex(name) {
        _super.call(this, name);
    }
    ex.prototype.print = function () {
        console.log("testroot " + this.name);
    };
    return ex;
})(testnode);

//var ex = function(name)
//{
//    this.name = name;
//    //this.print = function()
//    //{
//    //    console.log("testroot " + this.name);
//    //}
//};
//ex.prototype.print = function()
//{
//    console.log("testroot " + this.name);
//};
module.exports = ex;
