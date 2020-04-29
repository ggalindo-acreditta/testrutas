(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-auth-email-confirmation-email-confirmation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/auth/email-confirmation/email-confirmation.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/auth/email-confirmation/email-confirmation.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"page-layout carded\">\r\n    <span style=\"font-size: 1.8em;\" class=\"pb-20\"><b>{{\"EMAIL.TITLE\" | translate}}</b></span>\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"px-40 py-32 mb-20 mat-card\" style=\"border-radius: 8px;\">\r\n        <span style=\"font-size: 1.25em; margin: 0.7em\">{{\"EMAIL.INFO_1\" | translate}}</span>\r\n        <span style=\"font-size: 1.25em; margin: 0.7em\">{{\"EMAIL.INFO_2\" | translate}}</span>\r\n        <span style=\"font-size: 1.5em; margin: 0.7em\"><a style=\"color: #FB0014\">{{email}}</a></span>\r\n        <span style=\"font-size: 1.25em; margin: 0.7em\">{{\"EMAIL.INFO_3\" | translate}}</span>\r\n    </div>\r\n    <button mat-raised-button class=\"mb-120\" color=\"accent\" (click)=\"router.navigate(['auth/login'])\">{{ 'EMAIL.GOTO_LOGIN' | translate }}</button>\r\n</div>");

/***/ }),

/***/ "./src/app/main/auth/email-confirmation/email-confirmation.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/main/auth/email-confirmation/email-confirmation.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXV0aC9lbWFpbC1jb25maXJtYXRpb24vZW1haWwtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/auth/email-confirmation/email-confirmation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/auth/email-confirmation/email-confirmation.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmailConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailConfirmationComponent", function() { return EmailConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/es */ "./src/app/main/auth/email-confirmation/i18n/es.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/main/auth/auth.service.ts");
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






var EmailConfirmationComponent = /** @class */ (function () {
    function EmailConfirmationComponent(router, _fuseTranslationLoaderService, _fuseConfigService, authService) {
        this.router = router;
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseConfigService = _fuseConfigService;
        this.authService = authService;
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_4__["locale"]);
    }
    EmailConfirmationComponent.prototype.ngOnInit = function () {
        this.email = sessionStorage.getItem('SIGNUP-EMAIL');
    };
    EmailConfirmationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    EmailConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'email-confirmation',
            template: __importDefault(__webpack_require__(/*! raw-loader!./email-confirmation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/auth/email-confirmation/email-confirmation.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./email-confirmation.component.scss */ "./src/app/main/auth/email-confirmation/email-confirmation.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], EmailConfirmationComponent);
    return EmailConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/main/auth/email-confirmation/email-confirmation.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/auth/email-confirmation/email-confirmation.module.ts ***!
  \***************************************************************************/
/*! exports provided: EmailConfirmationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailConfirmationModule", function() { return EmailConfirmationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _email_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-confirmation.component */ "./src/app/main/auth/email-confirmation/email-confirmation.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
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
        component: _email_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["EmailConfirmationComponent"]
    }
];
var EmailConfirmationModule = /** @class */ (function () {
    function EmailConfirmationModule() {
    }
    EmailConfirmationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _email_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["EmailConfirmationComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            exports: [
                _email_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["EmailConfirmationComponent"]
            ]
        })
    ], EmailConfirmationModule);
    return EmailConfirmationModule;
}());



/***/ }),

/***/ "./src/app/main/auth/email-confirmation/i18n/es.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/auth/email-confirmation/i18n/es.ts ***!
  \*********************************************************/
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
        "EMAIL": {
            "TITLE": "Confirmación de email",
            "INFO_1": "Bienvenido a Rutas Acreditta",
            "INFO_2": "Le hemos enviado un correo de confirmación a su E-mail:",
            "INFO_3": "Por favor siga el enlace recibido para finalizar el registro.",
            "GOTO_LOGIN": "Ir a Inicio de Sesión"
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=app-main-auth-email-confirmation-email-confirmation-module.js.map