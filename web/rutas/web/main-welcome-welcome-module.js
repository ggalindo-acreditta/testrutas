(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/welcome/welcome.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/welcome/welcome.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"page-layout carded\" style=\"background-color: white;\">\r\n    <div class=\"logo\">\r\n        <img style=\"height: 30vh\" src=\"assets/images/acreditta_logo.jpg\">\r\n    </div>\r\n    <div style=\"text-align: center;\" class=\"mb-36\">\r\n        <div style=\"font-size: 2.5em\">\r\n            {{ 'WELCOME.TITLE' | translate }}\r\n        </div>\r\n        <br>\r\n        <div style=\"font-size: 1.8em\">\r\n            {{ 'WELCOME.SUBTITLE' | translate }}\r\n        </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width: 50%\" class=\"mb-80\">\r\n        <button (click)=\"router.navigate(['auth/register'])\" mat-stroked-button color=\"primary\"\r\n            style=\"height: 44px; width: 132px; font-size: 1.05em;\">\r\n            {{ 'WELCOME.REGISTER' | translate }}\r\n        </button>\r\n        <div class=\"m-16\"></div>\r\n        <button (click)=\"router.navigate(['auth/login'])\" mat-stroked-button color=\"primary\"\r\n            style=\"height: 44px; width: 132px; font-size: 1.05em;\">\r\n            {{ 'WELCOME.LOGIN' | translate }}\r\n        </button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/main/welcome/i18n/es.ts":
/*!*****************************************!*\
  !*** ./src/app/main/welcome/i18n/es.ts ***!
  \*****************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var locale = {
    lang: 'es',
    data: {
        'WELCOME': {
            'TITLE': 'Bienvenidos a Rutas Acreditta',
            'SUBTITLE': 'Te invitamos a construir las rutas de aprendizaje con nosotros',
            'REGISTER': 'Registrarse',
            'LOGIN': 'Iniciar Sesión'
        }
    }
};


/***/ }),

/***/ "./src/app/main/welcome/welcome.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/main/welcome/welcome.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/welcome/welcome.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/welcome/welcome.component.ts ***!
  \***************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/es */ "./src/app/main/welcome/i18n/es.ts");
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





// import { locale as english } from './i18n/en';
// import { locale as spanish } from './i18n/es';
var WelcomeComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    function WelcomeComponent(_fuseTranslationLoaderService, _fuseConfigService, router) {
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseConfigService = _fuseConfigService;
        this.router = router;
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_4__["locale"]);
    }
    WelcomeComponent.ctorParameters = function () { return [
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'welcome',
            template: __importDefault(__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/welcome/welcome.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./welcome.component.scss */ "./src/app/main/welcome/welcome.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/main/welcome/welcome.module.ts":
/*!************************************************!*\
  !*** ./src/app/main/welcome/welcome.module.ts ***!
  \************************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome.component */ "./src/app/main/welcome/welcome.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
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
        component: _welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
    }
];
var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            exports: [
                _welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
            ]
        })
    ], WelcomeModule);
    return WelcomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-welcome-welcome-module.js.map