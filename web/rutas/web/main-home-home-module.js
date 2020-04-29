(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/badge/badge.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/badge/badge.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div fxLayoutAlign=\"center center\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"mat-card badge-div m-20 p-16\" (click)=\"select.emit(badge)\"\r\n        style=\"border-radius: 10px !important; width: 260px; min-width: 230px; height: 230px;\">\r\n        <img style=\"max-width: 120px;\" src=\"{{badge.image.url}}\" onerror=\"this.src='assets/images/error.png';\">\r\n        <span style=\"text-align: center;\" class=\"pt-12\"><b>{{ getEllipsis(badge.name) }}</b></span>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/home.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"end start\" class=\"page-layout simple\">\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" class=\"m-28\" style=\"width: 100%\">\r\n        <div *ngFor=\"let badge of badges\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33\" fxFlex.lg=\"25\" fxFlex.xl=\"20\">\r\n            <badge (select)=\"showBadge(badge)\" [badge]=\"badge\"></badge>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/main/home/badge/badge.component.scss":
/*!******************************************************!*\
  !*** ./src/app/main/home/badge/badge.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".badge-div {\n  cursor: pointer; }\n\n.badge-div:hover {\n  background-color: #ddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NvcmlvL3NyYy9qcy9hY3JlZGl0dGEvYXBwLnJ1dGFzLXdlYi9zcmMvYXBwL21haW4vaG9tZS9iYWRnZS9iYWRnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9iYWRnZS9iYWRnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWRnZS1kaXYge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmFkZ2UtZGl2OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/home/badge/badge.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main/home/badge/badge.component.ts ***!
  \****************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BadgeComponent.prototype.ngOnInit = function () { };
    BadgeComponent.prototype.getEllipsis = function (str) {
        if (str.length < 90)
            return str;
        return str.substring(0, 90).trim() + '...';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('badge'),
        __metadata("design:type", Object)
    ], BadgeComponent.prototype, "badge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BadgeComponent.prototype, "select", void 0);
    BadgeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'badge',
            template: __importDefault(__webpack_require__(/*! raw-loader!./badge.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/badge/badge.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./badge.component.scss */ "./src/app/main/home/badge/badge.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BadgeComponent);
    return BadgeComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/main/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
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




var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router, fuseConfigService) {
        this.authService = authService;
        this.router = router;
        this.fuseConfigService = fuseConfigService;
        this.badges = [];
        this.fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: false
                },
                toolbar: {
                    hidden: false
                }
            }
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.badges = JSON.parse(sessionStorage.getItem('badges'));
        //Verificar si hay error en el config. Quitar el navbar y mostrar solo un botón para cerrar sesión
    };
    HomeComponent.prototype.showBadge = function (badge) {
        this.router.navigate(['/badges/' + badge.id]);
        // console.log(badge);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__["FuseConfigService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/main/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__["FuseConfigService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.module.ts":
/*!******************************************!*\
  !*** ./src/app/main/home/home.module.ts ***!
  \******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./badge/badge.component */ "./src/app/main/home/badge/badge.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__["BadgeComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ],
            exports: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-home-home-module.js.map