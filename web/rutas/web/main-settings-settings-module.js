(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/settings/delete-dialog/delete-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/settings/delete-dialog/delete-dialog.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{'DELETE_OP.TITLE' | translate}}</h1>\r\n<div mat-dialog-content>\r\n    {{'DELETE_OP.MESSAGE' | translate}}\r\n</div>\r\n<mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close color='warn' (click)=\"delete();\">{{'DELETE_OP.YES' | translate}}</button>\r\n    <button mat-button (click) = 'cancel();'>{{'DELETE_OP.NO' | translate}}</button>\r\n</mat-dialog-actions>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/settings/invite-dialog/invite-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/settings/invite-dialog/invite-dialog.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n    <span style=\"font-size: 2em;\">{{ 'SETTINGS.INVITE_USER' | translate }}</span>\r\n    <p class=\"px-20\" style=\"font-size: 1.3em\">{{ 'SETTINGS.INFO_2' | translate }}</p>\r\n    <form [formGroup]=\"form\" fxLayout=\"column\" fxLayoutAlign=\"center start\" style=\"width: 90%;\">\r\n        <mat-form-field style=\"width: 55%\">\r\n            <mat-label>{{ 'SETTINGS.NAMES' | translate }}</mat-label>\r\n            <input matInput autocomplete=\"off\" formControlName=\"firstname\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width: 55%\">\r\n            <mat-label>{{ 'SETTINGS.LASTNAMES' | translate }}</mat-label>\r\n            <input matInput autocomplete=\"off\" formControlName=\"lastname\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width: 55%\">\r\n            <mat-label>{{ 'SETTINGS.EMAIL' | translate }}</mat-label>\r\n            <input matInput autocomplete=\"off\" required formControlName=\"email\">\r\n        </mat-form-field>\r\n    </form>\r\n    <div fxLauout=\"row\" fxLayoutAlign=\"end center\" style=\"width: 100%;\">\r\n        <button mat-raised-button class=\"mx-8 but\" color=\"accent\" (click)=\"dialogRef.close()\">{{ 'SETTINGS.GO_BACK' | translate }}</button>\r\n        <button mat-raised-button class=\"mx-8 but\" color=\"accent\" (click)=\"save()\" [disabled]=\"form.invalid || error\">{{ 'SETTINGS.ADD' | translate }}</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/settings/settings.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/settings/settings.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"page-layout simple pt-20\" id=\"settings\">\r\n    <!-- <button mat-fab style=\"position: absolute; bottom: 30px; right: 30px;\" (click)=\"inviteUser()\"><mat-icon>add</mat-icon></button> -->\r\n    <span class=\"title py-8\"><b>{{ 'SETTINGS.TITLE' | translate }}</b></span>\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" style=\"width: 82%; border-radius: 10px;\" class=\"mat-card p-8 my-8\">\r\n        <span class=\"subtitle pt-8\">{{ 'SETTINGS.CONNECTED_ORGANIZATION' | translate }}</span>\r\n        <!-- <span class=\"text pt-12 pl-28\">{{ 'SETTINGS.CONNECTED_ORGANIZATION' | translate }}:&nbsp;&nbsp; -->\r\n            <span class=\"title name pt-12 pb-20\">{{fuseConfig?.user.organization.name}}</span>\r\n        <!-- </span> -->\r\n\r\n        <!-- Ocultar botón para efectos de MVP -->\r\n        <!-- <button mat-raised-button class=\"mb-12\" (click)=\"disconnectOrganization()\">\r\n            <mat-icon>error</mat-icon>\r\n            {{ 'SETTINGS.DISCONNECT_ORGANIZATION' | translate }}\r\n        </button> -->\r\n\r\n        \r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" style=\"width: 82%; border-radius: 10px;\"\r\n        class=\"mat-card p-8 my-8\">\r\n        <span class=\"subtitle pt-8 pb-12\">{{ 'SETTINGS.INVITE_USERS' | translate }}</span>\r\n        <span class=\"text px-20\">{{ 'SETTINGS.INFO' | translate }}</span>\r\n        \r\n        <div cdkDropList fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"my-12\"\r\n            style=\"width: 100%; overflow-y: scroll; min-height: 30px; max-height: 450px;\">\r\n            <div *ngFor=\"let user of users\" cdkDrag [cdkDragDisabled]=\"true\" class=\"example-box px-12\">\r\n                <div fxFlex=\"46\" fxLayoutAlign=\"center\" class=\"py-12\">\r\n                    <span *ngIf=\"user.firstname || user.lastname\">{{user.firstname + ' ' + user.lastname}}</span>\r\n                    <span *ngIf=\"!user.firstname && !user.lastname\">{{ 'SETTINGS.NO_NAME' | translate }}</span>\r\n                </div>\r\n                <div fxFlex=\"46\" fxLayoutAlign=\"center\" class=\"py-12\" style=\"border-right: solid 1px #ccc; border-left: solid 1px #ccc;\">\r\n                    <span>{{user.email}}</span>\r\n                </div>\r\n                <div fxFlex=\"8\" class=\"py-12\" fxLayoutAlign=\"center\">\r\n                    <mat-icon style=\"font-size: 28px; cursor: pointer;\" (click)=\"removeUser(user.email)\">clear</mat-icon>\r\n                </div>\r\n            </div>\r\n            <!-- <div *ngIf=\"users.length === 0\" style=\"font-size: 1.25em;\" class=\"p-12\">{{ 'SETTINGS.NO_USERS' | translate }}</div> -->\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" style=\"width: 100%;\">\r\n            <button mat-raised-button (click)=\"inviteUser()\" style=\"align-self: flex-end;\" class=\"m-8\" color=\"accent\">\r\n                {{ 'SETTINGS.ADD_USER' | translate }}\r\n            </button>\r\n            <button mat-raised-button [disabled]=\"users.length === 0\" (click)=\"sendInvitations()\"\r\n                style=\"align-self: flex-end;\" class=\"m-8\" color=\"accent\">\r\n                {{ 'SETTINGS.SEND_INVITATIONS' | translate }}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/main/settings/i18n/es.ts":
/*!******************************************!*\
  !*** ./src/app/main/settings/i18n/es.ts ***!
  \******************************************/
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
        'SETTINGS': {
            'TITLE': 'Configuración',
            'ORGANIZATION': 'Organización',
            'INVITE_USERS': 'Invitar Usuarios de la Organización',
            'CONNECTED_ORGANIZATION': 'Organización Conectada',
            'INFO': 'Incluya los datos de los usuarios que desea invitar. (Las direcciones de correo deben ser exclusivamente del dominio de la organización)',
            'DISCONNECT_ORGANIZATION': 'Desconectar Organización',
            'SEND_INVITATIONS': 'Enviar Invitaciones',
            'ADD_USER': 'Agregar usuario',
            'NAMES': 'Nombres',
            'LASTNAMES': 'Apellidos',
            'EMAIL': 'Correo Electrónico',
            'ADD': 'Agregar',
            'GO_BACK': 'Volver',
            'INVITE_USER': 'Invitar Usuario',
            'INFO_2': 'Incluya los datos de los usuarios que desea invitar. (Las direcciones de correo deben ser exclusivamente del dominio de la organización)',
            'NO_NAME': 'Sin Nombre',
            'NO_USERS': 'Lista de usuarios vacía.'
        }, 'ERROR': {
            'ALREADY_INVITED': 'Un usuario con ese correo ya se encuentra en la lista de invitaciones',
            'FORBIDDEN_DOMAIN': 'El Dominio del correo no pertenece al mismo dominio del Lider',
            'SOME_FAILED': 'Los siguientes correos no pudieron invitarse, ya están registrados:',
            'SOME_INVITED': 'Los siguientes correos fueron invitados exitosamente a colaborar:',
            'ALL_FAILED': 'Los correos '
        }, 'DELETE_OP': {
            'TITLE': '¿Está seguro que desea desconectar su organización?',
            'MESSAGE': 'Esta acción requerirá que se vuelva a autenticar con el servidor de Acclaim',
            'YES': 'Sí',
            'NO': 'No'
        }
    }
};


/***/ }),

/***/ "./src/app/main/settings/invite-dialog/invite-dialog.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/settings/invite-dialog/invite-dialog.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#dialog {\n  height: 100%;\n  width: 100%; }\n\n.img:hover {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  cursor: pointer !important; }\n\n.placeholder {\n  border: 2px solid lightgray;\n  border-radius: 100%; }\n\n.but {\n  width: 90px; }\n\n.example-box {\n  padding: 15px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  background: white;\n  width: 60%; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.error-msg {\n  font-size: 0.9em;\n  align-self: flex-start;\n  color: red;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NvcmlvL3NyYy9qcy9hY3JlZGl0dGEvYXBwLnJ1dGFzLXdlYi9zcmMvYXBwL21haW4vc2V0dGluZ3MvaW52aXRlLWRpYWxvZy9pbnZpdGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUhBRXNDLEVBQUE7O0FBRzFDO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksc0RBQXNELEVBQUE7O0FBRzFEO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLHNEQUFzRCxFQUFBOztBQUcxRDtFQUNJLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9zZXR0aW5ncy9pbnZpdGUtZGlhbG9nL2ludml0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGlhbG9nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW1nOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wbGFjZWhvbGRlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0IHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gge1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5lcnJvci1tc2cge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/settings/invite-dialog/invite-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/settings/invite-dialog/invite-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: InviteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteDialogComponent", function() { return InviteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var InviteDialogComponent = /** @class */ (function () {
    function InviteDialogComponent(dialogRef, router, snackbar, translate, formBuilder, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.snackbar = snackbar;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.data = data;
    }
    InviteDialogComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF ]+$/)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF ]+$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/\S+@\S+\.\S+/)]]
        });
        this.error = true;
        this.domain = this.data.domain;
    };
    InviteDialogComponent.prototype.ngDoCheck = function () {
        if (this.form.get('email').value.indexOf('@') > -1
            && this.form.get('email').value.toLowerCase().trim().substring(this.form.get('email').value.indexOf('@') + 1) === this.domain)
            this.error = false;
        else
            this.error = true;
    };
    InviteDialogComponent.prototype.save = function () {
        this.form.patchValue({
            email: this.form.get('email').value.trim()
        });
        this.dialogRef.close(__assign({}, this.form.value));
    };
    InviteDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    InviteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'invite-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./invite-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/settings/invite-dialog/invite-dialog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./invite-dialog.component.scss */ "./src/app/main/settings/invite-dialog/invite-dialog.component.scss")).default]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], Object])
    ], InviteDialogComponent);
    return InviteDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/settings/settings.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/main/settings/settings.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 2em; }\n\n.subtitle {\n  font-size: 1.6em; }\n\n.text {\n  font-size: 1.25em; }\n\n.name {\n  text-decoration: underline; }\n\n.example-box {\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  background: white;\n  width: 80%;\n  font-size: 1.2em; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.mat-simple-snackbar-action {\n  color: #333 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NvcmlvL3NyYy9qcy9hY3JlZGl0dGEvYXBwLnJ1dGFzLXdlYi9zcmMvYXBwL21haW4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxSEFFc0MsRUFBQTs7QUFHMUM7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxzREFBc0QsRUFBQTs7QUFHMUQ7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksc0RBQXNELEVBQUE7O0FBRzFEO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICAvLyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94IHtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/settings/settings.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/settings/settings.component.ts ***!
  \*****************************************************/
/*! exports provided: SettingsComponent, DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/es */ "./src/app/main/settings/i18n/es.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.service */ "./src/app/main/settings/settings.service.ts");
/* harmony import */ var _invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invite-dialog/invite-dialog.component */ "./src/app/main/settings/invite-dialog/invite-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/main/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(_fuseTranslationLoaderService, _fuseConfigService, fuseProgressBarService, translateService, router, service, authService, snack, dialog) {
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseConfigService = _fuseConfigService;
        this.fuseProgressBarService = fuseProgressBarService;
        this.translateService = translateService;
        this.router = router;
        this.service = service;
        this.authService = authService;
        this.snack = snack;
        this.dialog = dialog;
        this.users = [];
        this.xPos = 'center';
        this.yPos = 'top';
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_4__["locale"]);
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
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
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._fuseConfigService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this.fuseConfig = config;
        });
    };
    SettingsComponent.prototype.inviteUser = function () {
        var _this = this;
        var domain = this.fuseConfig.user.email.substring(this.fuseConfig.user.email.indexOf('@') + 1);
        var dialog = this.dialog.open(_invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_6__["InviteDialogComponent"], {
            minWidth: '45vw',
            width: '45vw',
            maxWidth: '45vw',
            data: {
                domain: domain
            }
        });
        dialog.afterClosed().subscribe(function (res) {
            if (typeof res !== 'undefined') {
                if (res.email.toLowerCase().substring(res.email.indexOf('@') + 1) !== domain.toLowerCase()) {
                    _this.snack.open(_this.translateService.instant('ERROR.FORBIDDEN_DOMAIN'), 'ERROR', {
                        horizontalPosition: _this.xPos,
                        verticalPosition: _this.yPos,
                        duration: 5000,
                        panelClass: 'red',
                    });
                    return;
                }
                if (_this.users.findIndex(function (u) { return u.email.toLowerCase() == res.email.toLowerCase(); }) != -1) {
                    _this.snack.open(_this.translateService.instant('ERROR.ALREADY_INVITED'), 'ERROR', {
                        horizontalPosition: _this.xPos,
                        verticalPosition: _this.yPos,
                        duration: 5000,
                        panelClass: 'red',
                    });
                    return;
                }
                _this.users.push({ firstname: res.firstname, lastname: res.lastname, email: res.email.toLowerCase() });
            }
        });
    };
    SettingsComponent.prototype.sendInvitations = function () {
        var _this = this;
        this.fuseProgressBarService.show();
        this.service.sendInvitation({ guests: this.users }).subscribe(function (res) {
            _this.snack.open(res.message, 'INFO', {
                horizontalPosition: _this.xPos,
                verticalPosition: _this.yPos,
                duration: 5000,
                panelClass: 'green',
            });
            _this.users = [];
            _this.fuseProgressBarService.hide();
        }, function (err) {
            _this.fuseProgressBarService.hide();
            _this.users = [];
            if (_this.users.length === 1) {
                _this.snack.open(err.error.message, 'ERROR', {
                    horizontalPosition: _this.xPos,
                    verticalPosition: _this.yPos,
                    duration: 5000,
                    panelClass: 'red',
                });
            }
            else {
                var errors_1 = [];
                var invited_1 = [];
                var i_1 = 0, j_1 = 0;
                err.error.errors.forEach(function (e) {
                    if (e.status === 500) {
                        errors_1[i_1++] = "" + e.email;
                    }
                    else {
                        invited_1[j_1++] = "" + e.email;
                    }
                });
                if (i_1 === err.error.errors.length) { //Completamente fallida
                    _this.snack.open(_this.translateService.instant('ERROR.SOME_FAILED') + " " + errors_1.join(', '), 'ERROR', {
                        horizontalPosition: _this.xPos,
                        verticalPosition: _this.yPos,
                        duration: 15000,
                        panelClass: 'red',
                    });
                }
                else { //Parcialmente existosa
                    _this.snack.open(_this.translateService.instant('ERROR.SOME_INVITED') + " " + invited_1.join(', ') + ". " + _this.translateService.instant('ERROR.SOME_FAILED') + " " + errors_1.join(', '), 'INFO', {
                        horizontalPosition: _this.xPos,
                        verticalPosition: _this.yPos,
                        duration: 15000,
                        panelClass: 'yellow',
                    });
                }
            }
        });
    };
    SettingsComponent.prototype.disconnectOrganization = function () {
        var _this = this;
        var dialog = this.dialog.open(DeleteDialogComponent, {
            data: {}
        });
        dialog.afterClosed().subscribe(function (res) {
            if (typeof res !== 'undefined') {
                _this.service.disconnectOrganization().subscribe(function (res) {
                    _this.authService.logout().subscribe(function (res) {
                        localStorage.removeItem('authToken');
                        sessionStorage.removeItem('authToken');
                        localStorage.removeItem('authId');
                        sessionStorage.removeItem('authId');
                        localStorage.removeItem('badges');
                        sessionStorage.removeItem('badges');
                        _this.authService.isAuthenticated = false;
                        _this.router.navigate(['/auth/login']);
                    }, function (err) {
                        localStorage.removeItem('authToken');
                        sessionStorage.removeItem('authToken');
                        localStorage.removeItem('authId');
                        sessionStorage.removeItem('authId');
                        localStorage.removeItem('badges');
                        sessionStorage.removeItem('badges');
                        _this.authService.isAuthenticated = false;
                        _this.router.navigate(['/auth/login']);
                    });
                });
            }
        });
    };
    SettingsComponent.prototype.removeUser = function (email) {
        this.users.splice(this.users.findIndex(function (u) { return u.email == email; }), 1);
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_10__["FuseProgressBarService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'settings',
            template: __importDefault(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/settings/settings.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./settings.component.scss */ "./src/app/main/settings/settings.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_10__["FuseProgressBarService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], SettingsComponent);
    return SettingsComponent;
}());

var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(dialogRef, router, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
    }
    DeleteDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    DeleteDialogComponent.prototype.delete = function () {
    };
    DeleteDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./delete-dialog/delete-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/settings/delete-dialog/delete-dialog.component.html")).default,
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/settings/settings.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/settings/settings.module.ts ***!
  \**************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.component */ "./src/app/main/settings/settings.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invite-dialog/invite-dialog.component */ "./src/app/main/settings/invite-dialog/invite-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
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
        component: _settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]
    }
];
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"],
                _invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_9__["InviteDialogComponent"],
                _settings_component__WEBPACK_IMPORTED_MODULE_4__["DeleteDialogComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"]
            ],
            exports: [
                _settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"],
                _invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_9__["InviteDialogComponent"]
            ],
            entryComponents: [_invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_9__["InviteDialogComponent"], _settings_component__WEBPACK_IMPORTED_MODULE_4__["DeleteDialogComponent"]]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/main/settings/settings.service.ts":
/*!***************************************************!*\
  !*** ./src/app/main/settings/settings.service.ts ***!
  \***************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
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


var SettingsService = /** @class */ (function () {
    function SettingsService(networkService) {
        this.networkService = networkService;
    }
    SettingsService.prototype.sendInvitation = function (users) {
        return this.networkService.post('organization/account/invite', users);
    };
    SettingsService.prototype.disconnectOrganization = function () {
        return this.networkService.post('organization/disconnect', {});
    };
    SettingsService.ctorParameters = function () { return [
        { type: app_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"] }
    ]; };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [app_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ })

}]);
//# sourceMappingURL=main-settings-settings-module.js.map