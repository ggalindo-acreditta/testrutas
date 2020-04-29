(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-auth-auth-module"],{

/***/ "./src/app/guards/email-confirmation.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/guards/email-confirmation.guard.ts ***!
  \****************************************************/
/*! exports provided: EmailConfirmationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailConfirmationGuard", function() { return EmailConfirmationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/navigation/navigation.service */ "./src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
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






var EmailConfirmationGuard = /** @class */ (function () {
    function EmailConfirmationGuard(router, http, fuseConfigService, _fuseNavigationService) {
        this.router = router;
        this.http = http;
        this.fuseConfigService = fuseConfigService;
        this._fuseNavigationService = _fuseNavigationService;
    }
    EmailConfirmationGuard.prototype.canActivate = function (next, state) {
        if (sessionStorage.getItem('SIGNUP-EMAIL')) {
            return true;
        }
        else {
            this.router.navigate(['auth/login']);
            return false;
        }
    };
    EmailConfirmationGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__["FuseConfigService"] },
        { type: _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["FuseNavigationService"] }
    ]; };
    EmailConfirmationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__["FuseConfigService"],
            _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["FuseNavigationService"]])
    ], EmailConfirmationGuard);
    return EmailConfirmationGuard;
}());



/***/ }),

/***/ "./src/app/main/auth/auth.module.ts":
/*!******************************************!*\
  !*** ./src/app/main/auth/auth.module.ts ***!
  \******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_guards_email_confirmation_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/guards/email-confirmation.guard */ "./src/app/guards/email-confirmation.guard.ts");
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
        path: 'login',
        loadChildren: 'app/main/auth/login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: 'app/main/auth/register/register.module#RegisterModule',
    },
    {
        path: 'register_guest',
        loadChildren: 'app/main/auth/collaborator-register/collaborator-register.module#CollaboratorRegisterModule'
    },
    {
        path: 'confirm',
        loadChildren: 'app/main/auth/email-confirmation/email-confirmation.module#EmailConfirmationModule',
        canActivate: [app_guards_email_confirmation_guard__WEBPACK_IMPORTED_MODULE_2__["EmailConfirmationGuard"]]
    }
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-auth-auth-module.js.map