"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var home_component_1 = require("./home/home.component");
var router_1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "homes";
    }
    AppComponent = __decorate([
        core_1.Component({
            standalone: true,
            selector: "app-root",
            template: "<main>\n    <header class=\"brand-name\">\n      <img\n        class=\"brand-logo\"\n        src=\"/assets/logo.svg\"\n        alt=\"logo\"\n        aria-hidden=\"true\"\n      />\n    </header>\n    <section class=\"content\">\n      <router-outlet></router-outlet>\n    </section>\n  </main>",
            styleUrls: ["./app.component.css"],
            imports: [home_component_1.HomeComponent, router_1.RouterModule]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
