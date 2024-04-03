"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var HousingLocationComponent = /** @class */ (function () {
    function HousingLocationComponent() {
    }
    __decorate([
        core_1.Input()
    ], HousingLocationComponent.prototype, "housingLocation");
    HousingLocationComponent = __decorate([
        core_1.Component({
            selector: "app-housing-location",
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterModule],
            template: "\n    <section class=\"listing\">\n      <img\n        class=\"listing-photo\"\n        [src]=\"housingLocation.photo\"\n        alt=\"Exterior photo of {{ housingLocation.name }}\"\n      />\n      <h2 class=\"listing-heading\">{{ housingLocation.name }}</h2>\n      <p class=\"listing-location\">\n        {{ housingLocation.city }} {{ housingLocation.city }}\n      </p>\n      <a [routerLink]=\"['/details', housingLocation.id]\"> LearnMore </a>\n    </section>\n  ",
            styleUrls: ["./housing-location.component.css"]
        })
    ], HousingLocationComponent);
    return HousingLocationComponent;
}());
exports.HousingLocationComponent = HousingLocationComponent;

//# sourceMappingURL=housing-location.component.js.map
