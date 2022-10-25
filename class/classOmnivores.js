"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Omnivores = void 0;
var classMammals_1 = require("./classMammals");
var Omnivores = /** @class */ (function (_super) {
    __extends(Omnivores, _super);
    function Omnivores(pName, pEat, pPaws, pDisplace) {
        return _super.call(this, pName, pEat, pPaws, pDisplace) || this;
    }
    Omnivores.prototype.setEat = function (paramEat) {
        this.eat = paramEat;
    };
    Omnivores.prototype.setMaximumSpeed = function () {
        this.displace_KM = 17;
    };
    return Omnivores;
}(classMammals_1.Mammals));
exports.Omnivores = Omnivores;
