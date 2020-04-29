(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/badges.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/badges.service.ts ***!
  \********************************************/
/*! exports provided: BadgesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesService", function() { return BadgesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var BadgesService = /** @class */ (function () {
    function BadgesService(networkService, fuseConfigService) {
        this.networkService = networkService;
        this.fuseConfigService = fuseConfigService;
        this.badges = {};
    }
    BadgesService.prototype.fetchBadges = function () {
        return this.networkService.get('organization/badge');
    };
    BadgesService.ctorParameters = function () { return [
        { type: app_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] }
    ]; };
    BadgesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [app_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"], _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"]])
    ], BadgesService);
    return BadgesService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map