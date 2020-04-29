(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-badges-badges-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/badges/badges.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/badges/badges.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"page-layout simple\" style=\"font-size: 18px;\">\r\n    <div fxLayout=\"column\" style=\"height: 100%; width: 300px; max-width: 30%;\" fxLayoutAlign=\"center center\" class=\"pr-20 pb-60\">\r\n        <div style=\"max-width: 15vw;\" class=\"mb-24\">\r\n            <img src=\"{{badge.image_url}}\" onerror=\"this.src='assets/images/error.png';\">\r\n        </div>\r\n        <span style=\"text-align: center;\" class=\"my-8\"><b>{{ \"BADGES.TYPE\" | translate }}: {{ badge.type_category ? badge.type_category : '-' }}</b></span>\r\n        <div class=\"my-8 breaker\"></div>\r\n        <span style=\"text-align: center;\" class=\"my-8\"><b>{{ \"BADGES.LEVEL\" | translate }}: {{ badge.level ? badge.level : '-' }}</b></span>\r\n        <div class=\"my-8 breaker\"></div>\r\n        <span style=\"text-align: center;\" class=\"my-8\"><b>{{ \"BADGES.TIME\" | translate }}: {{ badge.time_to_earn ? badge.time_to_earn : '-' }}</b></span>\r\n        <div class=\"my-8 breaker\"></div>\r\n        <span style=\"text-align: center;\" class=\"my-8\"><b>{{ \"BADGES.COST\" | translate }}: {{ badge.cost ? badge.cost : '-' }}</b></span>\r\n        <span style=\"text-align: center;\" class=\"mt-12 link\"><a href=\"{{badge.url}}\" style=\"color: #FB0014\"><b>{{ \"BADGES.ADDITIONAL_DETAILS\" | translate }}</b></a></span>\r\n    </div>\r\n    <div fxLayout=\"column\" style=\"height: 100%; width: 750px; max-width: 70%;\" fxLayoutAlign=\"center start\" class=\"pl-20\">\r\n        <span style=\"font-size: 2.2em;\" class=\"pb-20\"><b>{{ badge.name }}</b></span>\r\n        <span style=\"font-size: 1.1em;\" class=\"pb-12\"><b>{{ \"BADGES.ISSUED_BY\" | translate }}: <a href=\"{{badge.owner.vanity_url}}\" style=\"color: #FB0014\" class=\"link\">{{badge.owner.name}}</a></b></span>\r\n        <p style=\"line-height: 1.65em;\" class=\"pb-20\">{{ badge.description }}</p>\r\n        <span style=\"font-size: 1.1em;\" class=\"pb-12\"><b>{{ \"BADGES.DEMONSTRATED_SKILLS\" | translate }}</b></span>\r\n        <div fxLayout=\"row wrap\" class=\"mb-32\">\r\n            <button mat-stroked-button style=\"color: #FB0014\" class=\"my-12 mr-12\" *ngFor=\"let skill of badge.skills\">{{ skill }}</button>\r\n        </div>\r\n        <span style=\"font-size: 1.1em;\" class=\"pb-12\"><b>{{ \"BADGES.EARNING_CRITERIA\" | translate }}</b></span>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"pb-12\" *ngFor=\"let activity of badge.badge_template_activities\">\r\n            <mat-icon>playlist_add_check</mat-icon>\r\n            <span class=\"pl-20\"><a style=\"color: #FB0014\">{{activity.title}}</a></span>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" style=\"width: 100%;\" class=\"mt-16\">\r\n            <button mat-raised-button (click)=\"router.navigate(['home'])\" color=\"accent\" style=\"width: 90px; height: 40px;\">\r\n                {{ \"BADGES.GO_BACK\" | translate }}\r\n            </button>\r\n        </div>\r\n        \r\n        <!-- <span style=\"font-size: 1.1em;\" class=\"pt-20 pb-12\"><b>{{ \"BADGES.STANDARDS\" | translate }}</b></span> -->\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/main/badges/badges.component.scss":
/*!***************************************************!*\
  !*** ./src/app/main/badges/badges.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".breaker {\n  background-color: #999;\n  height: 2px;\n  width: 60px;\n  border-radius: 10px; }\n\n.link {\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NvcmlvL3NyYy9qcy9hY3JlZGl0dGEvYXBwLnJ1dGFzLXdlYi9zcmMvYXBwL21haW4vYmFkZ2VzL2JhZGdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9iYWRnZXMvYmFkZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFrZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/badges/badges.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/badges/badges.component.ts ***!
  \*************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/es */ "./src/app/main/badges/i18n/es.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
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





var BadgesComponent = /** @class */ (function () {
    function BadgesComponent(router, _fuseTranslationLoaderService, activatedRoute, fuseConfigService) {
        this.router = router;
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this.activatedRoute = activatedRoute;
        this.fuseConfigService = fuseConfigService;
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_3__["locale"]);
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
    BadgesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.badge = JSON.parse(sessionStorage.getItem('badges'))
            .find(function (badge) { return badge.id == _this.activatedRoute.snapshot.params.badge_id; });
    };
    BadgesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__["FuseConfigService"] }
    ]; };
    BadgesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'badges',
            template: __importDefault(__webpack_require__(/*! raw-loader!./badges.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/badges/badges.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./badges.component.scss */ "./src/app/main/badges/badges.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__["FuseConfigService"]])
    ], BadgesComponent);
    return BadgesComponent;
}());



/***/ }),

/***/ "./src/app/main/badges/badges.module.ts":
/*!**********************************************!*\
  !*** ./src/app/main/badges/badges.module.ts ***!
  \**********************************************/
/*! exports provided: BadgesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesModule", function() { return BadgesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _badges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badges.component */ "./src/app/main/badges/badges.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
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
        component: _badges_component__WEBPACK_IMPORTED_MODULE_2__["BadgesComponent"]
    }
];
var BadgesModule = /** @class */ (function () {
    function BadgesModule() {
    }
    BadgesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _badges_component__WEBPACK_IMPORTED_MODULE_2__["BadgesComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
            ]
        })
    ], BadgesModule);
    return BadgesModule;
}());



/***/ }),

/***/ "./src/app/main/badges/i18n/es.ts":
/*!****************************************!*\
  !*** ./src/app/main/badges/i18n/es.ts ***!
  \****************************************/
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
        "BADGES": {
            "TYPE": "Tipo",
            "LEVEL": "Dificultad",
            "TIME": "Duración",
            "COST": "Costo",
            "ADDITIONAL_DETAILS": "Detalles Adicionales",
            "ISSUED_BY": "Emitido por",
            "DEMONSTRATED_SKILLS": "Habilidades demostradas",
            "EARNING_CRITERIA": "Criterio de ganancia",
            "STANDARDS": "Estándares",
            "GO_BACK": "Volver"
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=main-badges-badges-module.js.map