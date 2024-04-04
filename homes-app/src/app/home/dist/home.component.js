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
var housing_location_component_1 = require("../housing-location/housing-location.component");
var housing_service_1 = require("../housing.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.housingLocationList = [];
        this.housingService = core_1.inject(housing_service_1.HousingService);
        this.housingLocationList = this.housingService.getAllHousingLocations();
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            standalone: true,
            imports: [common_1.CommonModule, housing_location_component_1.HousingLocationComponent],
            template: "\n    <section>\n      <form>\n        <input type=\"text\" placeholder=\"Filter by city\" />\n        <button class=\"primary\" type=\"button\">Search</button>\n      </form>\n      <section class=\"results\">\n        <app-housing-location\n          *ngFor=\"let housingLocation of housingLocationList\"\n          [housingLocation]=\"housingLocation\"\n        ></app-housing-location>\n      </section>\n    </section>\n  ",
            styleUrls: ["./home.component.css"]
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home.component.js.map
