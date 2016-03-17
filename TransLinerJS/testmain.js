//var testnode = require("./testnode.js");
var testroot = require("./testroot.js");

//testroot.prototype = new testnode("xxxxx");

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var testroot_2 = (function (_super) {
    __extends(testroot_2, _super);
    function testroot_2(name) {
        _super.call(this, name);
    }
    testroot_2.prototype.print = function () {
        console.log("testroot_2 " + this.name);
    };
    return testroot_2;
})(testroot);

__extends(testroot_3, testroot);
function testroot_3(name) {
    testroot.call(this, name);
    //this.print = function () {
    //    console.log("testroot_3 " + this.name);
    //};
}
testroot_3.prototype.print = function () {
    console.log("testroot_3 x " + this.name);
};
testroot_3.prototype.print3 = function () {
    console.log("testroot_3 print3 " + this.name);
};

__extends(testroot_4, testroot_3);
function testroot_4(name) {
    testroot_3.call(this, name);
}
testroot_4.prototype.print = function () {
    console.log("testroot_4 " + this.name);
};

var testmain = new testroot_4("server 8");

testmain.print();
testmain.print2();
testmain.print3();
