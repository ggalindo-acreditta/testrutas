(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-send-confirmation-send-confirmation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/send-confirmation/send-confirmation.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/send-confirmation/send-confirmation.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"fetch\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"page-layout carded\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"px-40 py-32 mb-32 mat-card\"\r\n        style=\"border-radius: 8px; min-width: 500px; min-height: 225px; width: 40%; text-align: center;\">\r\n        <span *ngIf=\"!error\" style=\"font-size: 2.5em;\" class=\"mt-8 mb-20\"><b>{{\"CONFIRMATION.TITLE_SUCCESS\" | translate}}</b></span>\r\n        <span *ngIf=\"!error\" style=\"font-size: 1.5em; margin: 0.7em\">{{\"CONFIRMATION.INFO_SUCCESS\" | translate}}</span>\r\n\r\n        <span *ngIf=\"error\" style=\"font-size: 2em; margin: 0.7em\"><b>{{\"CONFIRMATION.TITLE_ERROR\" | translate}}</b></span>\r\n        <span *ngIf=\"error\" style=\"font-size: 1.5em; margin: 0.7em\">{{\"CONFIRMATION.INFO_ERROR\" | translate}}</span>\r\n    </div>\r\n    <button mat-raised-button class=\"mb-120\" color=\"accent\" (click)=\"router.navigate(['auth/login'])\">{{ 'CONFIRMATION.GOTO_LOGIN' | translate }}</button>\r\n</div>");

/***/ }),

/***/ "./src/app/main/send-confirmation/i18n/es.ts":
/*!***************************************************!*\
  !*** ./src/app/main/send-confirmation/i18n/es.ts ***!
  \***************************************************/
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
        'CONFIRMATION': {
            "TITLE_SUCCESS": "Felicidades!",
            "INFO_SUCCESS": "Su cuenta ha sido confirmada con éxito.",
            "TITLE_ERROR": "Ha ocurrido un error al intentar confirmar su cuenta",
            "INFO_ERROR": "Esto pudo haber ocurrido porque el código es incorrecto o inválido, o bien el usuario ya se encuentra confirmado",
            "GOTO_LOGIN": "Ir a Inicio de Sesión"
        }
    }
};


/***/ }),

/***/ "./src/app/main/send-confirmation/send-confirmation.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/send-confirmation/send-confirmation.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2VuZC1jb25maXJtYXRpb24vc2VuZC1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/main/send-confirmation/send-confirmation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/send-confirmation/send-confirmation.component.ts ***!
  \***********************************************************************/
/*! exports provided: SendConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendConfirmationComponent", function() { return SendConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/es */ "./src/app/main/send-confirmation/i18n/es.ts");
/* harmony import */ var _send_confirmation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-confirmation.service */ "./src/app/main/send-confirmation/send-confirmation.service.ts");
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






var SendConfirmationComponent = /** @class */ (function () {
    function SendConfirmationComponent(_fuseTranslationLoaderService, _fuseConfigService, router, activatedRoute, confirmService) {
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseConfigService = _fuseConfigService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.confirmService = confirmService;
        this.fetch = false;
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_4__["locale"]);
    }
    SendConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParamMap.subscribe(function (res) {
            if (res.params.param1) {
                _this.confirmService.checkVerifCode(res.params.param1).subscribe(function (res) {
                    _this.fetch = true;
                    _this.error = false;
                    _this.router.navigate(['.'], { relativeTo: _this.activatedRoute, queryParams: null });
                }, function (err) {
                    _this.fetch = true;
                    _this.error = true;
                });
            }
            else {
                // this.router.navigate(['auth/login']);
            }
        });
    };
    SendConfirmationComponent.ctorParameters = function () { return [
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _send_confirmation_service__WEBPACK_IMPORTED_MODULE_5__["SendConfirmationService"] }
    ]; };
    SendConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'send-confirmation',
            template: __importDefault(__webpack_require__(/*! raw-loader!./send-confirmation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/send-confirmation/send-confirmation.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./send-confirmation.component.scss */ "./src/app/main/send-confirmation/send-confirmation.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _send_confirmation_service__WEBPACK_IMPORTED_MODULE_5__["SendConfirmationService"]])
    ], SendConfirmationComponent);
    return SendConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/main/send-confirmation/send-confirmation.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/send-confirmation/send-confirmation.module.ts ***!
  \********************************************************************/
/*! exports provided: SendConfirmationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendConfirmationModule", function() { return SendConfirmationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _send_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./send-confirmation.component */ "./src/app/main/send-confirmation/send-confirmation.component.ts");
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
        component: _send_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["SendConfirmationComponent"]
    }
];
var SendConfirmationModule = /** @class */ (function () {
    function SendConfirmationModule() {
    }
    SendConfirmationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _send_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["SendConfirmationComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            exports: [
                _send_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["SendConfirmationComponent"]
            ]
        })
    ], SendConfirmationModule);
    return SendConfirmationModule;
}());



/***/ }),

/***/ "./src/app/main/send-confirmation/send-confirmation.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/send-confirmation/send-confirmation.service.ts ***!
  \*********************************************************************/
/*! exports provided: SendConfirmationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendConfirmationService", function() { return SendConfirmationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/network.service */ "./src/app/services/network.service.ts");
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


var SendConfirmationService = /** @class */ (function () {
    function SendConfirmationService(networkService) {
        this.networkService = networkService;
    }
    SendConfirmationService.prototype.checkVerifCode = function (param1) {
        return this.networkService.post('account/confirm?param1=' + param1, {});
    };
    SendConfirmationService.ctorParameters = function () { return [
        { type: app_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"] }
    ]; };
    SendConfirmationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [app_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"]])
    ], SendConfirmationService);
    return SendConfirmationService;
}());



/***/ })

}]);
//# sourceMappingURL=main-send-confirmation-send-confirmation-module.js.map