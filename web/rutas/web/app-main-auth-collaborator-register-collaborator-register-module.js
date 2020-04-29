(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-auth-collaborator-register-collaborator-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/auth/collaborator-register/collaborator-register.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/auth/collaborator-register/collaborator-register.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"page-layout carded\">\r\n    \r\n    <form [formGroup]=\"form\" fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"p-20 mb-20 mat-card\" style=\"border-radius: 8px; width: 40%; min-width: 600px;\">\r\n            <div class=\"mb-20 mt-8\">\r\n                <span style=\"text-align: start; font-size: 1.8em;\">\r\n                    {{\"REGISTER.REGISTER\" | translate}}\r\n                </span>\r\n                <br>\r\n                <div style=\"height: 5px\"></div>\r\n                <span style=\"text-align: center; font-size: 1.15em;\">\r\n                        {{\"REGISTER.INFO\" | translate}}\r\n                </span>\r\n            </div>\r\n            <mat-form-field style=\"width: 50%\">\r\n                <input\r\n                    matInput\r\n                    placeholder=\"{{'REGISTER.NAMES' | translate}}\"\r\n                    autocomplete=\"off\"\r\n                    formControlName=\"name\"\r\n                    required\r\n                >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 50%\">\r\n                <input\r\n                    matInput\r\n                    placeholder=\"{{'REGISTER.LAST_NAMES' | translate}}\"\r\n                    autocomplete=\"off\"\r\n                    formControlName=\"lastname\"\r\n                    required\r\n                >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 50%\">\r\n                <input\r\n                    matInput\r\n                    placeholder=\"{{'REGISTER.EMAIL' | translate}}\"\r\n                    autocomplete=\"off\"\r\n                    formControlName=\"email\"\r\n                    readonly\r\n                >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 50%\">\r\n                <input\r\n                    matInput\r\n                    placeholder=\"{{'REGISTER.PASSWORD' | translate}}\"\r\n                    autocomplete=\"off\"\r\n                    formControlName=\"password\"\r\n                    type=\"password\"\r\n                    required\r\n                >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 50%\">\r\n                <input\r\n                    matInput\r\n                    placeholder=\"{{'REGISTER.CONFIRM_PASSWORD' | translate}}\"\r\n                    autocomplete=\"off\"\r\n                    formControlName=\"confirm_password\"\r\n                    type=\"password\"\r\n                    required\r\n                >\r\n            </mat-form-field>\r\n\r\n            <div style=\"margin-left: auto\" class=\"mt-16 mb-12 mr-40\">\r\n                <button mat-raised-button color=\"accent\" [disabled]=\"form.invalid\" (click)=\"register()\">{{'REGISTER.DO_REGISTER' | translate}}</button>\r\n            </div>\r\n        </div>\r\n        <span class=\"mb-80\">{{ 'REGISTER.ACCOUNT_ALREADY' | translate }} <a style=\"color: #fb0014\" class=\"mb-80\" href=\"/#/auth/login\">{{ 'REGISTER.SIGN_IN' | translate }}</a></span>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./src/app/main/auth/collaborator-register/collaborator-register.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/auth/collaborator-register/collaborator-register.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXV0aC9jb2xsYWJvcmF0b3ItcmVnaXN0ZXIvY29sbGFib3JhdG9yLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/auth/collaborator-register/collaborator-register.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/auth/collaborator-register/collaborator-register.component.ts ***!
  \************************************************************************************/
/*! exports provided: PasswordValidation, CollaboratorRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaboratorRegisterComponent", function() { return CollaboratorRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/es */ "./src/app/main/auth/collaborator-register/i18n/es.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/main/auth/auth.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/components/navigation/navigation.service */ "./src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var app_services_badges_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/badges.service */ "./src/app/services/badges.service.ts");
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

var CollaboratorRegisterComponent = /** @class */ (function () {
    function CollaboratorRegisterComponent(router, authService, badgesService, _fuseTranslationLoaderService, _fuseNavigationService, translateService, _fuseConfigService, snackbar, formBuilder, activatedRoute) {
        this.router = router;
        this.authService = authService;
        this.badgesService = badgesService;
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseNavigationService = _fuseNavigationService;
        this.translateService = translateService;
        this._fuseConfigService = _fuseConfigService;
        this.snackbar = snackbar;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_5__["locale"]);
    }
    CollaboratorRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF ]+$/)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF ]+$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/\S+@\S+\.\S+/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]],
            code: ['']
        }, { validator: PasswordValidation.MatchPassword });
        this.activatedRoute.queryParamMap.subscribe(function (val) {
            _this.authService.getGuestEmail(val.params.param1).subscribe(function (res) {
                _this.form.patchValue({
                    code: val.params.param1,
                    email: res.email
                });
            });
        });
    };
    CollaboratorRegisterComponent.prototype.register = function () {
        var _this = this;
        this.snackbar.open(this.translateService.instant('REGISTER.LOADING'), 'INFO', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 99999,
            panelClass: 'blue',
        });
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');
        this.authService.registerGuest({
            firstname: this.form.get('name').value,
            lastname: this.form.get('lastname').value,
            code: this.form.get('code').value,
            password: this.form.get('password').value
        }).subscribe(function (res) {
            _this.authService.login({
                email: _this.form.get('email').value,
                password: _this.form.get('password').value
            }).subscribe(function (_res) {
                sessionStorage.setItem('authToken', _res.token);
                sessionStorage.setItem('authId', _res.user);
                _this.authService.isAuthenticated = true;
                _this.authService.getProfile(_res.user).subscribe(function (user) {
                    _this._fuseConfigService.config = {
                        user: {
                            id: user.id,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            email: user.email,
                            type: user.type,
                            status: user.status,
                            organization: {
                                id: user.organization_id,
                                name: user.organization_name,
                                description: user.organization_description,
                                domain: user.organization_domain,
                                image_url: user.organization_image_url
                            }
                        }
                    };
                    _this._fuseNavigationService.setNavigationItem(user.type);
                    _this.badgesService.fetchBadges().subscribe(function (data_badges) {
                        sessionStorage.setItem('badges', JSON.stringify(data_badges));
                        _this._fuseConfigService.config = {
                            badges: data_badges
                        };
                        _this._fuseConfigService.config = {
                            layout: {
                                navbar: {
                                    hidden: false
                                }
                            }
                        };
                        _this.snackbar.dismiss();
                        _this.router.navigate(['home']);
                    }, function (err) {
                        _this.snackbar.open(err.error.message, 'ERROR', {
                            horizontalPosition: _this.horizontalPosition,
                            verticalPosition: _this.verticalPosition,
                            duration: 5000,
                            panelClass: 'red'
                        });
                    });
                }, function (err) {
                    _this.snackbar.open(err.error.message, 'ERROR', {
                        horizontalPosition: _this.horizontalPosition,
                        verticalPosition: _this.verticalPosition,
                        duration: 5000,
                        panelClass: 'red'
                    });
                });
            }, function (err) {
                _this.snackbar.open(err.error.message, 'ERROR', {
                    horizontalPosition: _this.horizontalPosition,
                    verticalPosition: _this.verticalPosition,
                    duration: 5000,
                    panelClass: 'red'
                });
            });
        }, function (err) {
            _this.snackbar.open(err.error.message, 'ERROR', {
                horizontalPosition: _this.horizontalPosition,
                verticalPosition: _this.verticalPosition,
                duration: 5000,
                panelClass: 'red'
            });
        });
    };
    CollaboratorRegisterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: app_services_badges_service__WEBPACK_IMPORTED_MODULE_10__["BadgesService"] },
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"] },
        { type: _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["FuseNavigationService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    CollaboratorRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'collaborator-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./collaborator-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/auth/collaborator-register/collaborator-register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./collaborator-register.component.scss */ "./src/app/main/auth/collaborator-register/collaborator-register.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            app_services_badges_service__WEBPACK_IMPORTED_MODULE_10__["BadgesService"],
            _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"],
            _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["FuseNavigationService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CollaboratorRegisterComponent);
    return CollaboratorRegisterComponent;
}());



/***/ }),

/***/ "./src/app/main/auth/collaborator-register/collaborator-register.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/auth/collaborator-register/collaborator-register.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CollaboratorRegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaboratorRegisterModule", function() { return CollaboratorRegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _collaborator_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collaborator-register.component */ "./src/app/main/auth/collaborator-register/collaborator-register.component.ts");
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
        component: _collaborator_register_component__WEBPACK_IMPORTED_MODULE_4__["CollaboratorRegisterComponent"]
    }
];
var CollaboratorRegisterModule = /** @class */ (function () {
    function CollaboratorRegisterModule() {
    }
    CollaboratorRegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _collaborator_register_component__WEBPACK_IMPORTED_MODULE_4__["CollaboratorRegisterComponent"]
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
                _collaborator_register_component__WEBPACK_IMPORTED_MODULE_4__["CollaboratorRegisterComponent"]
            ]
        })
    ], CollaboratorRegisterModule);
    return CollaboratorRegisterModule;
}());



/***/ }),

/***/ "./src/app/main/auth/collaborator-register/i18n/es.ts":
/*!************************************************************!*\
  !*** ./src/app/main/auth/collaborator-register/i18n/es.ts ***!
  \************************************************************/
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


/***/ })

}]);
//# sourceMappingURL=app-main-auth-collaborator-register-collaborator-register-module.js.map