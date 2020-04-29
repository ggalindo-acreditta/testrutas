(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-auth-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/auth/register/register.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/auth/register/register.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"page-layout carded\">\r\n    \r\n    <form [formGroup]=\"form\" fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"p-20 mb-20 mat-card\" style=\"border-radius: 8px; width: 40%; min-width: 600px;\">\r\n            <div class=\"mb-20 mt-8\">\r\n                <span style=\"text-align: start; font-size: 1.8em;\">\r\n                    {{\"REGISTER.REGISTER\" | translate}}\r\n                </span>\r\n                <br>\r\n                <div style=\"height: 5px\"></div>\r\n                <span style=\"text-align: center; font-size: 1.15em;\">\r\n                        {{\"REGISTER.INFO\" | translate}}\r\n                </span>\r\n            </div>\r\n            <mat-form-field style=\"width: 50%\">\r\n                <input\r\n                    matInput\r\n                    placeholder=\"{{'REGISTER.NAMES' | translate}}\"\r\n                    autocomplete=\"off\"\r\n                    formControlName=\"name\"\r\n                    required\r\n                >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 50%\">\r\n                <input\r\n                    matInput\r\n                    placeholder=\"{{'REGISTER.LAST_NAMES' | translate}}\"\r\n                    autocomplete=\"off\"\r\n                    formControlName=\"lastname\"\r\n                    required\r\n                >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 50%\">\r\n                <input\r\n                    matInput\r\n                    placeholder=\"{{'REGISTER.EMAIL' | translate}}\"\r\n                    autocomplete=\"off\"\r\n                    formControlName=\"email\"\r\n                    required\r\n                >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 50%\">\r\n                <input\r\n                    matInput\r\n                    placeholder=\"{{'REGISTER.PASSWORD' | translate}}\"\r\n                    autocomplete=\"off\"\r\n                    formControlName=\"password\"\r\n                    type=\"password\"\r\n                    required\r\n                >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 50%\">\r\n                <input\r\n                    matInput\r\n                    placeholder=\"{{'REGISTER.CONFIRM_PASSWORD' | translate}}\"\r\n                    autocomplete=\"off\"\r\n                    formControlName=\"confirm_password\"\r\n                    type=\"password\"\r\n                    required\r\n                >\r\n            </mat-form-field>\r\n\r\n            <div style=\"margin-left: auto\" class=\"mt-16 mb-12 mr-40\">\r\n                <button mat-raised-button color=\"accent\" [disabled]=\"form.invalid\" (click)=\"register()\">{{'REGISTER.DO_REGISTER' | translate}}</button>\r\n            </div>\r\n        </div>\r\n        <span class=\"mb-80\">{{ 'REGISTER.ACCOUNT_ALREADY' | translate }} <a style=\"color: #fb0014\" class=\"mb-80\" href=\"/#/auth/login\">{{ 'REGISTER.SIGN_IN' | translate }}</a></span>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./src/app/main/auth/register/i18n/es.ts":
/*!***********************************************!*\
  !*** ./src/app/main/auth/register/i18n/es.ts ***!
  \***********************************************/
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
        "REGISTER": {
            "REGISTER": "Registro",
            "INFO": "Por favor complete los siguientes datos para iniciar el registro",
            "NAMES": "Nombres",
            "LAST_NAMES": "Apellidos",
            "EMAIL": "Correo",
            "PASSWORD": "Contraseña",
            "CONFIRM_PASSWORD": "Confirmar contraseña",
            "DO_REGISTER": "Registrarse",
            "LOADING": "Cargando...",
            "SIGN_IN": "Iniciar Sesión",
            "ACCOUNT_ALREADY": "¿Ya posee una cuenta?"
        }
    }
};


/***/ }),

/***/ "./src/app/main/auth/register/register.component.scss":
/*!************************************************************!*\
  !*** ./src/app/main/auth/register/register.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/main/auth/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/auth/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: PasswordValidation, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/es */ "./src/app/main/auth/register/i18n/es.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/main/auth/auth.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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









var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (form) {
        var password = form.get('password').value;
        var confirm_password = form.get('confirm_password').value;
        if (password !== confirm_password) {
            form.get('confirm_password').setErrors({ MatchPassword: true });
        }
        else {
            if (confirm_password === '' || confirm_password === undefined || confirm_password === null) {
                form.get('confirm_password').setErrors({ required: true });
            }
            else {
                form.get('confirm_password').setErrors(null);
            }
        }
    };
    return PasswordValidation;
}());

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService, _fuseTranslationLoaderService, translateService, _fuseConfigService, snackbar, formBuilder) {
        this.router = router;
        this.authService = authService;
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this.translateService = translateService;
        this._fuseConfigService = _fuseConfigService;
        this.snackbar = snackbar;
        this.formBuilder = formBuilder;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_5__["locale"]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF ]+$/)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF ]+$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/\S+@\S+\.\S+/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]]
        }, { validator: PasswordValidation.MatchPassword });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.snackbar.open(this.translateService.instant('REGISTER.LOADING'), 'INFO', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 99999,
            panelClass: 'blue',
        });
        this.authService.register({
            firstname: this.form.get('name').value,
            lastname: this.form.get('lastname').value,
            email: this.form.get('email').value,
            password: this.form.get('password').value
        }).subscribe(function (res) {
            sessionStorage.removeItem('SIGNUP-EMAIL');
            sessionStorage.setItem('SIGNUP-EMAIL', _this.form.get('email').value);
            _this.snackbar.dismiss();
            _this.router.navigate(['auth/confirm']);
        }, function (err) {
            _this.snackbar.open(err.error.message, 'ERROR', {
                horizontalPosition: _this.horizontalPosition,
                verticalPosition: _this.verticalPosition,
                duration: 5000,
                panelClass: 'red'
            });
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/auth/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.scss */ "./src/app/main/auth/register/register.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/main/auth/register/register.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/auth/register/register.module.ts ***!
  \*******************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.component */ "./src/app/main/auth/register/register.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
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
        component: _register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }
];
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
            ],
            exports: [
                _register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-main-auth-register-register-module.js.map