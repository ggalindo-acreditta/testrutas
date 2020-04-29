(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-connect-organization-connect-organization-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/connect-organization/connect-organization.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/connect-organization/connect-organization.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"page-layout carded\">\r\n    \r\n    <form fxLayout=\"column\" [formGroup]=\"form\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n        <span style=\"font-size: 1.8em;\" class=\"pb-20\"><b>{{\"CONFIRMATION.CONNECT\" | translate}}</b></span>\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"p-20 mb-80 mat-card\" style=\"border-radius: 8px; width: 38%; min-width: 575px;\">\r\n            <div class=\"mb-20 mt-12 px-28\">\r\n                <span style=\"text-align: center; font-size: 1.25em;\">\r\n                    {{\"CONFIRMATION.INFO\" | translate}}\r\n                </span>\r\n            </div>\r\n            <mat-form-field style=\"width: 70%\">\r\n                <input\r\n                    matInput\r\n                    placeholder=\"{{'CONFIRMATION.ID' | translate}}\"\r\n                    autocomplete=\"off\"\r\n                    formControlName=\"id\"\r\n                    required\r\n                >\r\n                <mat-icon matSuffix class=\"secondary-text\" style=\"cursor: pointer; position: relative; left: 50px; top: 8px; font-size: 1.8em;\" (click)=\"router.navigate(['help']);\">help</mat-icon>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 70%\">\r\n                <input\r\n                    matInput\r\n                    placeholder=\"{{'CONFIRMATION.TOKEN' | translate}}\"\r\n                    autocomplete=\"off\"\r\n                    formControlName=\"token\"\r\n                    required\r\n                >\r\n                <mat-icon matSuffix class=\"secondary-text\" style=\"cursor: pointer; position: relative; left: 50px; top: 8px; font-size: 1.8em;\" (click)=\"router.navigate(['help']);\">help</mat-icon>\r\n            </mat-form-field>\r\n            <div style=\"width: 100%;\" fxLayout=\"center center\" class=\"px-20 pt-12\">\r\n                <button mat-raised-button color=\"accent\" (click)=\"router.navigate(['first_login'])\">{{'CONFIRMATION.GO_BACK' | translate}}</button>\r\n                <button mat-raised-button color=\"accent\" style=\"margin-left: auto;\" [disabled]=\"form.invalid\" (click)=\"doConnect()\">{{'CONFIRMATION.DO_CONNECT' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./src/app/main/connect-organization/connect-organization.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/connect-organization/connect-organization.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29ubmVjdC1vcmdhbml6YXRpb24vY29ubmVjdC1vcmdhbml6YXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/main/connect-organization/connect-organization.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/connect-organization/connect-organization.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConnectOrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectOrganizationComponent", function() { return ConnectOrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/es */ "./src/app/main/connect-organization/i18n/es.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _connect_organization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./connect-organization.service */ "./src/app/main/connect-organization/connect-organization.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var app_services_badges_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/badges.service */ "./src/app/services/badges.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/main/auth/auth.service.ts");
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











var ConnectOrganizationComponent = /** @class */ (function () {
    function ConnectOrganizationComponent(router, _fuseTranslationLoaderService, _fuseConfigService, _fuseProgressBarService, organizationService, formBuilder, snackbar, badgesService, authService) {
        this.router = router;
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseConfigService = _fuseConfigService;
        this._fuseProgressBarService = _fuseProgressBarService;
        this.organizationService = organizationService;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.badgesService = badgesService;
        this.authService = authService;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
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
    ConnectOrganizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._fuseConfigService.getConfig().subscribe(function (val) {
            _this.id = val.user.id;
        });
        this.form = this.formBuilder.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            token: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, { Validators: null });
    };
    ConnectOrganizationComponent.prototype.doConnect = function () {
        var _this = this;
        this._fuseProgressBarService.show();
        var body = {
            id: this.form.get('id').value,
            token: this.form.get('token').value
        };
        this.organizationService.authenticateOrganization(body).subscribe(function (res) {
            sessionStorage.removeItem('badges');
            _this.badgesService.fetchBadges().subscribe(function (data_badges) {
                sessionStorage.setItem('badges', JSON.stringify(data_badges));
                _this._fuseConfigService.config = {
                    badges: data_badges,
                    layout: {
                        navbar: {
                            hidden: false
                        }
                    }
                };
                _this.authService.getProfile(_this.id).subscribe(function (user) {
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
                    _this._fuseProgressBarService.hide();
                    _this.snackbar.open(res.message, 'INFO', {
                        horizontalPosition: _this.horizontalPosition,
                        verticalPosition: _this.verticalPosition,
                        duration: 5000,
                        panelClass: 'green',
                    });
                    _this.router.navigate(['home']);
                }, function (err) {
                    _this.snackbar.open(err.error.message, 'ERROR', {
                        horizontalPosition: _this.horizontalPosition,
                        verticalPosition: _this.verticalPosition,
                        duration: 5000,
                        panelClass: 'red',
                    });
                    _this._fuseProgressBarService.hide();
                });
            }, function (err) {
                _this.snackbar.open(err.error.message, 'ERROR', {
                    horizontalPosition: _this.horizontalPosition,
                    verticalPosition: _this.verticalPosition,
                    duration: 5000,
                    panelClass: 'red',
                });
                _this._fuseProgressBarService.hide();
            });
        }, function (err) {
            _this.snackbar.open(err.error.message, 'ERROR', {
                horizontalPosition: _this.horizontalPosition,
                verticalPosition: _this.verticalPosition,
                duration: 5000,
                panelClass: 'red',
            });
            _this._fuseProgressBarService.hide();
        });
    };
    ConnectOrganizationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_6__["FuseProgressBarService"] },
        { type: _connect_organization_service__WEBPACK_IMPORTED_MODULE_7__["ConnectOrganizationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
        { type: app_services_badges_service__WEBPACK_IMPORTED_MODULE_9__["BadgesService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] }
    ]; };
    ConnectOrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'connect-organization',
            template: __importDefault(__webpack_require__(/*! raw-loader!./connect-organization.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/connect-organization/connect-organization.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./connect-organization.component.scss */ "./src/app/main/connect-organization/connect-organization.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_6__["FuseProgressBarService"],
            _connect_organization_service__WEBPACK_IMPORTED_MODULE_7__["ConnectOrganizationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            app_services_badges_service__WEBPACK_IMPORTED_MODULE_9__["BadgesService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]])
    ], ConnectOrganizationComponent);
    return ConnectOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/main/connect-organization/connect-organization.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/connect-organization/connect-organization.module.ts ***!
  \**************************************************************************/
/*! exports provided: ConnectOrganizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectOrganizationModule", function() { return ConnectOrganizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _connect_organization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connect-organization.component */ "./src/app/main/connect-organization/connect-organization.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
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
        component: _connect_organization_component__WEBPACK_IMPORTED_MODULE_4__["ConnectOrganizationComponent"]
    }
];
var ConnectOrganizationModule = /** @class */ (function () {
    function ConnectOrganizationModule() {
    }
    ConnectOrganizationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _connect_organization_component__WEBPACK_IMPORTED_MODULE_4__["ConnectOrganizationComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"]
            ],
            exports: [
                _connect_organization_component__WEBPACK_IMPORTED_MODULE_4__["ConnectOrganizationComponent"]
            ]
        })
    ], ConnectOrganizationModule);
    return ConnectOrganizationModule;
}());



/***/ }),

/***/ "./src/app/main/connect-organization/connect-organization.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/connect-organization/connect-organization.service.ts ***!
  \***************************************************************************/
/*! exports provided: ConnectOrganizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectOrganizationService", function() { return ConnectOrganizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var ConnectOrganizationService = /** @class */ (function () {
    function ConnectOrganizationService(networkService, httpClient) {
        this.networkService = networkService;
        this.httpClient = httpClient;
    }
    ConnectOrganizationService.prototype.authenticateOrganization = function (body) {
        return this.networkService.post('organization/acclaim', body);
    };
    ConnectOrganizationService.prototype.postOrganization = function (body) {
        return this.networkService.post('organization/connect', body);
    };
    ConnectOrganizationService.ctorParameters = function () { return [
        { type: app_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ConnectOrganizationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [app_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConnectOrganizationService);
    return ConnectOrganizationService;
}());



/***/ }),

/***/ "./src/app/main/connect-organization/i18n/es.ts":
/*!******************************************************!*\
  !*** ./src/app/main/connect-organization/i18n/es.ts ***!
  \******************************************************/
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
        "CONFIRMATION": {
            "CONNECT": "Conectar Organización",
            "INFO": "Datos de la Organización",
            "ID": "ID de Organización",
            "TOKEN": "Token de Autorización",
            "DO_CONNECT": "Conectar Organización",
            "GO_BACK": "Volver"
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=main-connect-organization-connect-organization-module.js.map