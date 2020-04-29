(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-help-help-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/help/help.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/help/help.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"page-layout carded\">\r\n    <span style=\"font-size: 1.8em;\" class=\"pb-20 mt-40\"><b>{{\"HELP.TITLE\" | translate}}</b></span>\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"p-20 mb-80 mat-card\" style=\"border-radius: 8px; min-width: 575px;\">\r\n        <div style=\"align-self: flex-start;\" class=\"my-20 px-28\">\r\n            <span style=\"text-align: center; font-size: 1.25em;\">\r\n                {{\"HELP.STEP_1\" | translate}}\r\n            </span>\r\n        </div>\r\n        <img style=\"min-width: 750px; max-width: 1300px;\" src=\"assets/images/help_1.png\">\r\n        <div style=\"align-self: flex-start;\" class=\"mt-48 mb-20 px-28\">\r\n            <span style=\"text-align: center; font-size: 1.25em;\">\r\n                {{\"HELP.STEP_2\" | translate}}\r\n            </span>\r\n        </div>\r\n        <img style=\"min-width: 750px; max-width: 1300px;\" src=\"assets/images/help_2.png\">\r\n        <div style=\"margin-right: auto\" class=\"mt-28 mb-8 ml-40\">\r\n            <button mat-raised-button color=\"accent\" (click)=\"location.back();\">{{'HELP.GO_BACK' | translate}}</button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/main/help/help.component.scss":
/*!***********************************************!*\
  !*** ./src/app/main/help/help.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/help/help.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/help/help.component.ts ***!
  \*********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/es */ "./src/app/main/help/i18n/es.ts");
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






var HelpComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    function HelpComponent(_fuseTranslationLoaderService, _fuseConfigService, router, location) {
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseConfigService = _fuseConfigService;
        this.router = router;
        this.location = location;
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_5__["locale"]);
        this._fuseConfigService.config = {
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
    HelpComponent.ctorParameters = function () { return [
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__["FuseTranslationLoaderService"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__["FuseConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'help',
            template: __importDefault(__webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/help/help.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./help.component.scss */ "./src/app/main/help/help.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__["FuseTranslationLoaderService"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__["FuseConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/main/help/help.module.ts":
/*!******************************************!*\
  !*** ./src/app/main/help/help.module.ts ***!
  \******************************************/
/*! exports provided: HelpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModule", function() { return HelpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help.component */ "./src/app/main/help/help.component.ts");
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
        component: _help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"]
    }
];
var HelpModule = /** @class */ (function () {
    function HelpModule() {
    }
    HelpModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            exports: [
                _help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"]
            ]
        })
    ], HelpModule);
    return HelpModule;
}());



/***/ }),

/***/ "./src/app/main/help/i18n/es.ts":
/*!**************************************!*\
  !*** ./src/app/main/help/i18n/es.ts ***!
  \**************************************/
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
        'HELP': {
            'TITLE': 'Conectar Organización (Ayuda)',
            'STEP_1': 'Paso 1: Ingresar al menú de la Organización',
            'STEP_2': 'Paso 2: Copiar la información de la Organización',
            'GO_BACK': 'Regresar'
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=main-help-help-module.js.map