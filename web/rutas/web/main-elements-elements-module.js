(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-elements-elements-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/cancel-dialog/cancel-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/cancel-dialog/cancel-dialog.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{'CANCEL_OP.TITLE' | translate}}</h1>\r\n<div mat-dialog-content>\r\n    {{'CANCEL_OP.MESSAGE' | translate}}\r\n</div>\r\n<mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close color='warn' (click)=\"goHome();\">{{'CANCEL_OP.YES' | translate}}</button>\r\n    <button mat-button (click) = 'cancel();'>{{'CANCEL_OP.NO' | translate}}</button>\r\n</mat-dialog-actions>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/create/create.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/create/create.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-drawer-container [hasBackdrop]=\"false\" style=\"width: 100%;\">\r\n    <mat-drawer #drawer [mode]=\"over\" position=\"end\" style=\"width: 500px;\">\r\n        <form fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"container p-20\" [formGroup]=\"searchForm\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"end center\" style=\"width: 100%\">\r\n                <mat-icon style=\"cursor: pointer;\" (click)=\"drawer.close();\">clear</mat-icon>\r\n            </div>\r\n            <div>\r\n                <span \r\n                    style=\"font-size: 2em; align-self: center\"\r\n                    class=\"pb-28\"\r\n                ><b>{{ 'IMPORT.TITLE' | translate }}</b></span>\r\n                <mat-icon class=\"help-icon\" matTooltip=\"{{'IMPORT.HELP' | translate}}\">help</mat-icon>\r\n            </div>\r\n            <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                <mat-label>{{ 'SEARCH' | translate }}</mat-label>\r\n                <input matInput autocomplete=\"off\" formControlName=\"search\" (valueChanges)=\"searchChanged(evt)\">\r\n            </mat-form-field>\r\n    \r\n            <div style=\"overflow-y: scroll;\">\r\n                <div *ngFor=\"let badge of badgesToShow\"\r\n                    fxLayout=\"row\"\r\n                    class=\"mat-card mb-12 pt-8 pl-8 import-card\"\r\n                    (click)=\"migrateData(badge); drawer.close();\"\r\n                >\r\n                    <div fxFlex=\"20\" class=\"mr-20\">\r\n                        <img src=\"{{badge.image_url}}\">\r\n                    </div>\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"start\" fxFlex>\r\n                        <span class=\"pb-8 pr-20\"><b>{{badge.name}}</b></span>\r\n                        <span class=\"pr-20\"\r\n                            style=\"text-overflow: ellipsis;\r\n                            overflow: hidden;\r\n                            line-height: 1.25em;\r\n                            max-height: 6.25em;\r\n                            font-size: 0.85em;\r\n                            text-align: justify;\"\r\n                        >\r\n                            {{badge.description}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </mat-drawer>\r\n    <mat-drawer-content fxLayout=\"row\" fxLayoutAlign=\"start\" style=\"padding: 0 !important;\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start\" class=\"page-layout simple\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"8\" style=\"width: 100%;\">\r\n                <div fxLayoutAlign=\"center center\" fxFlex=\"100\" style=\"height: 100%;\">\r\n                    <span style=\"font-size: 2em; cursor: pointer; text-align: end; position: absolute; right: 28px;\" (click)=\"drawer.open()\">\r\n                        <b>\r\n                            {{ 'IMPORT.TITLE' | translate }}\r\n                            <mat-icon style=\"position: relative; top: 7px; left: 4px; font-size: 1.25em;\">keyboard_arrow_right</mat-icon>\r\n                        </b>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <form fxLayout=\"row\" fxLayoutAlign=\"center start\" name=\"form\" [formGroup]=\"form\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"33.3\">\r\n                    <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.NAME' | translate }}</mat-label>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"name\" required>\r\n                        <mat-error *ngIf=\"form.get('name').hasError('required')\">\r\n                            {{'ERROR.REQUIRED' | translate}}\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"form.get('name').hasError('minlength')\">\r\n                            {{'ERROR.MIN_LENGTH_5' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.ISSUER' | translate }}</mat-label>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"issuer\" required>\r\n                        <mat-error *ngIf=\"form.get('issuer').hasError('required')\">\r\n                            {{'ERROR.REQUIRED' | translate}}\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"form.get('issuer').hasError('maxlength')\">\r\n                            {{'ERROR.MAX_LENGTH_20' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.ISSUER_URL' | translate }}</mat-label>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"issuer_url\">\r\n                        <mat-error>\r\n                            {{'ERROR.URL_PATTERN' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field style=\"width: 75%\">\r\n                        <mat-label>{{ 'CREATE.CATEGORY' | translate }}</mat-label>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"category\">\r\n                        <mat-error>\r\n                            {{'ERROR.MAX_LENGTH_20' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.DURATION_HRS' | translate }}</mat-label>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"duration\">\r\n                        <span matSuffix class=\"hours\">hrs.</span>\r\n                        <mat-error>\r\n                            {{'ERROR.NUMERIC' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field style=\"width: 75%; font-size: 14px; margin-top: auto;\" appearance=\"outline\">\r\n                        <mat-label>{{ 'CREATE.DESCRIPTION' | translate }}</mat-label>\r\n                        <textarea matInput\r\n                            formControlName=\"description\"\r\n                            cdkTextareaAutosize\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            style=\"position: relative;\"\r\n                        ></textarea>\r\n                        <mat-error>\r\n                            {{'ERROR.MAX_LENGTH_500' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"33.3\">\r\n\r\n                    <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.LEVEL' | translate }}</mat-label>\r\n                        <mat-select formControlName=\"level\" style=\"width: 100%\" required>\r\n                            <mat-option *ngFor=\"let level of levels\" [value]=\"level.acc_value\">{{level.name}}</mat-option>\r\n                        </mat-select>\r\n                        <mat-error>\r\n                            {{'ERROR.REQUIRED' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.MATERIALITY' | translate }}</mat-label>\r\n                        <mat-select formControlName=\"materiality\" style=\"width: 100%\" required>\r\n                            <mat-option *ngFor=\"let mat of materiality\" [value]=\"mat.value\">{{mat.name}}</mat-option>\r\n                        </mat-select>\r\n                        <mat-error>\r\n                            {{'ERROR.REQUIRED' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.SCORE' | translate }}</mat-label>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"score\" required>\r\n\r\n                        <mat-error>\r\n                            {{'ERROR.NUMERIC' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.EXPIRE_AT' | translate }}</mat-label>\r\n\r\n                        <input\r\n                            matInput\r\n                            [matDatepicker]=\"datepicker1\"\r\n                            name=\"expire_at\"\r\n                            formControlName=\"expire_at\"\r\n                            onkeydown=\"return false\"\r\n                            autocomplete=\"off\"\r\n                            (click)=\"displayCalendar()\"\r\n                        >\r\n                        <mat-datepicker-toggle #toggle style=\"display: none;\" [for]=\"datepicker1\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #datepicker1 color=\"accent\"></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.LANGUAGE' | translate }}</mat-label>\r\n                        <mat-select formControlName=\"language\" style=\"width: 100%\" required>\r\n                            <mat-option *ngFor=\"let lang of languages\" [value]=\"lang.value\">{{lang.name}}</mat-option>\r\n                        </mat-select>\r\n                        <mat-error>\r\n                            {{'ERROR.REQUIRED' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field style=\"width: 75%; font-size: 14px; margin-top: auto;\" class=\"pb-4\" appearance=\"outline\">\r\n                        <mat-label>{{ 'CREATE.CRITERION' | translate }}</mat-label>\r\n                        <textarea matInput\r\n                            formControlName=\"criterion\"\r\n                            cdkTextareaAutosize\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            style=\"position: relative;\"\r\n                        ></textarea>\r\n                    </mat-form-field>\r\n                    \r\n                </div>\r\n\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"33.3\" class=\"mt-40 pr-20\">                    \r\n                    <div style=\"width: 100%;\" fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"69\" class=\"mt-12\">\r\n                        <div *ngIf=\"!image\" fxLayoutAlign=\"center start\">\r\n                            <img src=\"{{defaultImg}}\" (click)=\"file?.click()\" class=\"img\" style=\"border: 1px solid lightgray; border-radius: 100%;\">\r\n                        </div>\r\n    \r\n                        <div *ngIf=\"image\" fxLayoutAlign=\"center start\">\r\n                            <img *ngIf=\"!import\" src=\"{{image}}\" (click)=\"file?.click()\" class=\"img\" style=\"max-height: 255px;\">\r\n                            <img *ngIf=\"import\" src=\"{{image}}\" class=\"non-changeable-img\" style=\"max-height: 255px;\">\r\n                        </div>\r\n    \r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center start\" class=\"pt-28\">\r\n                            <div style=\"width: 100%; height: 60%;\" fxLayoutAlign=\"center center\">\r\n                                <span *ngIf=\"image && !import\" style=\"color: red; cursor: pointer;\" (click)=\"removeImage()\"><b>{{ \"DELETE\" | translate }}</b></span>\r\n                                <span *ngIf=\"form.valid && !this.image\" style=\"color: red;\">{{ 'CREATE.IMAGE_WARN' | translate }}</span>\r\n                            </div>\r\n                        </div>\r\n                        <input #file id=\"file-input\" type=\"file\" style=\"display: none;\" (change)=\"preview(file.files)\"/>\r\n                    </div>\r\n\r\n                    <div style=\"width: 100%;\" fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"31\">\r\n                        <mat-form-field class=\"example-chip-list\" style=\"width: 85%;\">\r\n                            <mat-chip-list #chipList>\r\n                                <mat-chip *ngFor=\"let skill of skills\" selected [removable]=\"true\" (removed)=\"remove(skill)\" color=\"accent\">\r\n                                    {{skill}}\r\n                                    <mat-icon matChipRemove>cancel</mat-icon>\r\n                                </mat-chip>\r\n                                <input \r\n                                    placeholder=\"{{ 'CREATE.SKILLS' | translate }}\"\r\n                                    [matChipInputFor]=\"chipList\"\r\n                                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                                    [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                                    (matChipInputTokenEnd)=\"add($event)\">\r\n                            </mat-chip-list>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width: 100%;\">\r\n                <div fxLayoutAlign=\"center center\" fxFlex=\"100\" style=\"height: 100%;\" class=\"mt-20\">\r\n                    <button [disabled]=\"form.invalid || !this.image\" mat-raised-button color=\"accent\" class=\"mr-24 but\" (click)=\"create();\">{{ 'SAVE' | translate }}</button>\r\n                    <button mat-raised-button color=\"accent\" class=\"mx-24 but\" (click)=\"goHome();\">{{ 'GO_BACK' | translate }}</button>\r\n                    <button mat-raised-button color=\"accent\" class=\"ml-24 but\" (click)=\"cancelCreate();\">{{ 'CLEAN' | translate }}</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </mat-drawer-content>\r\n</mat-drawer-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/delete-dialog/delete-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/delete-dialog/delete-dialog.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{'DELETE_OP.TITLE' | translate}}</h1>\r\n<div mat-dialog-content>\r\n    {{'DELETE_OP.MESSAGE' | translate}}\r\n</div>\r\n<mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close color='warn' (click)=\"delete();\">{{'DELETE_OP.YES' | translate}}</button>\r\n    <button mat-button (click) = 'cancel();'>{{'DELETE_OP.NO' | translate}}</button>\r\n</mat-dialog-actions>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/detail/detail.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/detail/detail.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-drawer-container [hasBackdrop]=\"false\" style=\"width: 100%;\">\r\n    <mat-drawer #drawer [mode]=\"over\" position=\"end\" style=\"width: 500px;\">.</mat-drawer>\r\n    <mat-drawer-content fxLayout=\"row\" fxLayoutAlign=\"start\" style=\"padding: 0 !important;\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start\" class=\"page-layout simple\">\r\n            <form fxLayout=\"row\" name=\"form\" [formGroup]=\"form\" class=\"mt-48\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"33.3\">\r\n                    <mat-form-field  style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.NAME' | translate }}</mat-label>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"name\" required>\r\n\r\n                        <mat-error *ngIf=\"form.get('name').hasError('required')\">\r\n                            {{'ERROR.REQUIRED' | translate}}\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"form.get('name').hasError('minlength')\">\r\n                            {{'ERROR.MIN_LENGTH_5' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.ISSUER' | translate }}</mat-label>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"issuer\">\r\n                        <mat-error *ngIf=\"form.get('issuer').hasError('required')\">\r\n                            {{'ERROR.REQUIRED' | translate}}\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"form.get('issuer').hasError('maxlength')\">\r\n                            {{'ERROR.MAX_LENGTH_20' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.ISSUER_URL' | translate }}</mat-label>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"issuer_url\">\r\n                        <mat-error *ngIf=\"form.get('issuer_url').hasError('pattern')\">\r\n                            {{'ERROR.URL_PATTERN' | translate}}\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"form.get('issuer_url').hasError('required')\">\r\n                            {{'ERROR.REQUIRED' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  style=\"width: 75%\">\r\n                        <mat-label>{{ 'CREATE.CATEGORY' | translate }}</mat-label>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"category\">\r\n                        <mat-error>\r\n                            {{'ERROR.MAX_LENGTH_20' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.DURATION_HRS' | translate }}</mat-label>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"duration\">\r\n                        <span matSuffix class=\"hours\">hrs.</span>\r\n                        <mat-error>\r\n                            {{'ERROR.NUMERIC' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field style=\"width: 75%; font-size: 14px; margin-top: auto;\" appearance=\"outline\">\r\n                        <mat-label>{{ 'CREATE.DESCRIPTION' | translate }}</mat-label>\r\n                        <textarea matInput\r\n                            formControlName=\"description\"\r\n                            cdkTextareaAutosize\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            style=\"position: relative;\"\r\n                        ></textarea>\r\n                        <mat-error>\r\n                            {{'ERROR.MAX_LENGTH_500' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"33.3\">\r\n                    <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.LEVEL' | translate }}</mat-label>\r\n                        <mat-select formControlName=\"level\" style=\"width: 100%\" [disabled]=\"action === 'view'\">\r\n                            <mat-option *ngFor=\"let level of levels\" [value]=\"level.value\">{{level.name}}</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    \r\n                    <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.MATERIALITY' | translate }}</mat-label>\r\n                        <mat-select formControlName=\"materiality\" style=\"width: 100%\" [disabled]=\"action === 'view'\">\r\n                            <mat-option *ngFor=\"let mat of materiality\" [value]=\"mat.value\">{{mat.name}}</mat-option>\r\n                        </mat-select>\r\n                        <mat-error>\r\n                            {{'ERROR.REQUIRED' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.SCORE' | translate }}</mat-label>\r\n                        <input matInput autocomplete=\"off\" formControlName=\"score\" required>\r\n\r\n                        <mat-error>\r\n                            {{'ERROR.NUMERIC' | translate}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field *ngIf=\"action === 'view'\" style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.EXPIRE_AT' | translate }}</mat-label>\r\n                        <input\r\n                            matInput\r\n                            [matDatepicker]=\"datepicker1\"\r\n                            name=\"expire_at\"\r\n                            formControlName=\"expire_at\"\r\n                            onkeydown=\"return false\"\r\n                            autocomplete=\"off\"\r\n                        >\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field *ngIf=\"action === 'edit'\" style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.EXPIRE_AT' | translate }}</mat-label>\r\n\r\n                        <input\r\n                            matInput\r\n                            [matDatepicker]=\"datepicker1\"\r\n                            name=\"expire_at\"\r\n                            formControlName=\"expire_at\"\r\n                            onkeydown=\"return false\"\r\n                            autocomplete=\"off\"\r\n                        >\r\n                        <mat-datepicker-toggle matSuffix [for]=\"datepicker1\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #datepicker1 color=\"accent\"></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field style=\"width: 75%;\" class=\"pb-4\">\r\n                        <mat-label>{{ 'CREATE.LANGUAGE' | translate }}</mat-label>\r\n                        <mat-select formControlName=\"language\" style=\"width: 100%\" required [disabled]=\"action === 'view'\">\r\n                            <mat-option *ngFor=\"let lang of languages\" [value]=\"lang.value\">{{lang.name}}</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field  style=\"width: 75%; font-size: 14px; margin-top: auto;\" class=\"pb-4\" appearance=\"outline\">\r\n                        <mat-label>{{ 'CREATE.CRITERION' | translate }}</mat-label>\r\n                        <textarea matInput\r\n                            formControlName=\"criterion\"\r\n                            cdkTextareaAutosize\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            style=\"position: relative;\"\r\n                        ></textarea>\r\n                    </mat-form-field>\r\n                    \r\n                </div>\r\n\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"33.3\" class=\"mt-40 pr-20\">\r\n                    <div style=\"width: 100%;\" fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"69\">\r\n                        <div *ngIf=\"image\" fxLayoutAlign=\"center start\">\r\n                            <img *ngIf=\"!import && this.image == this.oldImage\" \r\n                                src=\"{{image}}?{{getTimestamp()}}\"\r\n                                onerror=\"this.src='assets/images/error.png';\"\r\n                                (click)=\"action === 'edit' ? file?.click() : ''\"\r\n                                class=\"img\"\r\n                                [ngClass]=\"action === 'edit' ? 'hoverable' : ''\"\r\n                            >\r\n                            <img *ngIf=\"!import && this.image != this.oldImage\" \r\n                                src=\"{{image}}\"\r\n                                onerror=\"this.src='assets/images/error.png';\"\r\n                                (click)=\"file?.click()\"\r\n                                class=\"img hoverable\"\r\n                            >\r\n                            <img *ngIf=\"import\"\r\n                                src=\"{{image}}?{{getTimestamp()}}\"\r\n                                onerror=\"this.src='assets/images/error.png';\"\r\n                                class=\"non-changeable-img\"\r\n                            >\r\n                        </div>\r\n\r\n                        <input #file id=\"file-input\" type=\"file\" style=\"display: none;\" (change)=\"preview(file.files)\"/>\r\n                    </div>\r\n\r\n                    <div style=\"width: 100%;\" fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"31\">\r\n                        <mat-form-field class=\"example-chip-list\" style=\"width: 85%;\">\r\n                            <mat-chip-list #chipList>\r\n                                <mat-chip *ngFor=\"let skill of skills\" selected [removable]=\"true\" (removed)=\"remove(skill)\" color=\"accent\">\r\n                                    {{skill}}\r\n                                    <mat-icon *ngIf=\"action === 'edit'\" matChipRemove>cancel</mat-icon>\r\n                                </mat-chip>\r\n                                <input\r\n                                    placeholder=\"{{ 'CREATE.SKILLS' | translate }}\"\r\n                                    [matChipInputFor]=\"chipList\"\r\n                                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                                    [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                                    (matChipInputTokenEnd)=\"add($event)\"\r\n                                    [disabled]=\"action === 'view'\">\r\n                            </mat-chip-list>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"width: 100%;\">\r\n                <div fxLayoutAlign=\"center center\" fxFlex=\"100\" style=\"height: 100%; padding-left: 5%;\" class=\"mt-20\">\r\n                    <button *ngIf=\"action === 'edit'\" [disabled]=\"form.invalid || !this.image\" mat-raised-button color=\"accent\" class=\"mr-24 but\" (click)=\"edit();\">{{ 'SAVE' | translate }}</button>\r\n                    <button *ngIf=\"action === 'edit'\" mat-raised-button color=\"accent\" class=\"mx-24 but\" (click)=\"resetValues(); form.disable();\">{{ 'CANCEL' | translate }}</button>\r\n                    <button *ngIf=\"action === 'view'\" mat-raised-button color=\"accent\" class=\"mr-24 but\" (click)=\"action = 'edit'; form.enable();\" [disabled]=\"loading\">{{ 'EDIT' | translate }}</button>\r\n                    <button *ngIf=\"action === 'view'\" mat-raised-button color=\"accent\" class=\"mx-24 but\" (click)=\"goBack();\">{{ 'GO_BACK' | translate }}</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </mat-drawer-content>\r\n</mat-drawer-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/element/element.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/element/element.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div fxLayoutAlign=\"center start\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"mat-card m-20 p-16\"\r\n        style=\"border-radius: 10px !important; width: 280px; min-width: 230px; height: 255px;\">\r\n    <img style=\"max-width: 120px; margin-bottom: auto;\" src='{{this.url}}?{{getTimestamp()}}' onerror=\"this.src='assets/images/error.png';\" matTooltip=\"{{element.name}}\">\r\n        <!-- <img style=\"max-width: 120px; border-radius: 100%; margin-bottom: auto;\" src=\"{{defaultImg}}\"> -->\r\n        <div style=\"line-height: 1.25em; max-height: 3.75em; overflow-y: hidden; text-align: center;\"\r\n        ><span><b>{{ getEllipsis(element.name) }}</b></span></div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width: 100%; height: 50px;\" class=\"pt-16\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"button-div left\" (click)=\"view.emit(element.id);\">\r\n                {{ \"VIEW\" | translate }}\r\n            </div>\r\n            <div style=\"width: 0.5%; height: 100%; background-color: #bbb\"></div>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"button-div right\" (click)=\"delete.emit(element.id);\">\r\n                {{ \"DELETE\" | translate }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/elements.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/elements.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"end start\" class=\"page-layout simple\">\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" class=\"m-28\" style=\"width: 100%\">\r\n        <div *ngFor=\"let element of elements\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33\" fxFlex.gt-md=\"25\">\r\n            <element [element]=\"element\" (delete)=\"deleteElement($event)\" (view)=\"viewElement($event);\"></element>\r\n        </div>\r\n\r\n        <div *ngIf=\"elements.length === 0 && !loading\" class=\"mt-20\">\r\n            <span style=\"font-size: 1.75em\"><b>{{ 'NO_ELEMENTS' | translate }}</b></span>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/main/elements/create/create.component.scss":
/*!************************************************************!*\
  !*** ./src/app/main/elements/create/create.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  max-height: 90vh !important; }\n\n.img {\n  width: 200px;\n  min-width: 200px; }\n\n.img:hover {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  cursor: pointer !important; }\n\n.non-changeable-img {\n  width: 200px;\n  min-width: 200px; }\n\n.import-card {\n  width: 100%;\n  height: 130px;\n  min-height: 130px;\n  overflow: hidden;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.import-card:hover {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9); }\n\n.help-icon {\n  position: relative;\n  top: 2px;\n  padding-left: 8px; }\n\nmat-drawer-content {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.but {\n  width: 90px;\n  height: 40px; }\n\n.hours {\n  position: relative;\n  font-size: 1.2em;\n  right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NvcmlvL3NyYy9qcy9hY3JlZGl0dGEvYXBwLnJ1dGFzLXdlYi9zcmMvYXBwL21haW4vZWxlbWVudHMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwrQkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9lbGVtZW50cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmltZzpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm9uLWNoYW5nZWFibGUtaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5pbXBvcnQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbXBvcnQtY2FyZDpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxufVxyXG5cclxuLmhlbHAtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcbiAgXHJcbm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmJ1dCB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmhvdXJzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICByaWdodDogOHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/main/elements/create/create.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/elements/create/create.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateComponent, CancelDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelDialogComponent", function() { return CancelDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n/es */ "./src/app/main/elements/i18n/es.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements.service */ "./src/app/main/elements/elements.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
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













var CreateComponent = /** @class */ (function () {
    function CreateComponent(_fuseTranslationLoaderService, _fuseConfigService, router, formBuilder, elementsService, snackbar, translate, dialog, fuseProgressBarService) {
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseConfigService = _fuseConfigService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.elementsService = elementsService;
        this.snackbar = snackbar;
        this.translate = translate;
        this.dialog = dialog;
        this.fuseProgressBarService = fuseProgressBarService;
        this.import = false;
        this.defaultImg = 'assets/images/placeholder.png';
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SEMICOLON"]];
        this.materiality = [];
        this.levels = [{ value: 'Fundational', acc_value: 'Foundational', name: null },
            { value: 'Intermediate', acc_value: 'Intermediate', name: null },
            { value: 'Advanced', acc_value: 'Advanced', name: null }];
        this.languages = [{ value: 'es', name: null }, { value: 'en', name: null }, { value: 'pt', name: null },
            { value: 'fr', name: null }, { value: 'other', name: null }];
        this.skills = [];
        this.badges = JSON.parse(sessionStorage.getItem('badges'));
        this.badgesToShow = JSON.parse(sessionStorage.getItem('badges'));
        this.horizontalPos = 'center';
        this.verticalPos = 'top';
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_4__["locale"]);
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
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cleanData();
        this.elementsService.elementName = this.translate.instant('CREATE.NEW_ELEMENT');
        this.levels.forEach(function (level) { return level.name = _this.translate.instant('LEVEL.'.concat(level.acc_value)); });
        this.languages.forEach(function (lang) { return lang.name = _this.translate.instant('LANGUAGES.'.concat(lang.value)); });
        this.searchForm = this.formBuilder.group({
            search: ['']
        });
        this.searchChanged();
        this.getMateriality();
    };
    CreateComponent.prototype.displayCalendar = function () {
        this.toggle.datepicker.opened = true;
    };
    CreateComponent.prototype.getMateriality = function () {
        var _this = this;
        this.elementsService.getMateriality().subscribe(function (res) {
            res.forEach(function (el) { return _this.materiality.push({ value: el.descripcion, name: _this.translate.instant('MATERIALITY.'.concat(el.descripcion)) }); });
        });
    };
    CreateComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.skills.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
    };
    CreateComponent.prototype.remove = function (skill) {
        var index = this.skills.indexOf(skill);
        if (index >= 0) {
            this.skills.splice(index, 1);
        }
    };
    CreateComponent.prototype.migrateData = function (badge) {
        this.cleanData();
        this.form.patchValue({
            name: badge.name,
            level: badge.level,
            description: badge.description,
            criterion: badge.badge_template_activities.map(function (badge) { return badge.title; }).join(),
            badge_id: badge.id
        });
        this.form.markAllAsTouched();
        this.image = badge.image_url;
        this.skills = badge.skills;
        this.import = true;
    };
    CreateComponent.prototype.create = function () {
        var _this = this;
        this.fuseProgressBarService.show();
        var body = {
            name: this.form.get('name').value,
            issuer: this.form.get('issuer').value,
            issuer_url: this.form.get('issuer_url').value !== "" ? this.form.get('issuer_url').value : undefined,
            category: this.form.get('category').value,
            duration: this.form.get('duration').value ? parseInt(this.form.get('duration').value) : undefined,
            description: this.form.get('description').value,
            skills: this.skills.join(';'),
            criterion: this.form.get('criterion').value,
            materiality: this.form.get('materiality').value,
            level: this.levels.find(function (l) { return l.acc_value == _this.form.get('level').value; }).value,
            score: parseInt(this.form.get('score').value),
            expire_at: this.form.get('expire_at').value !== "" ? moment__WEBPACK_IMPORTED_MODULE_12__(this.form.get('expire_at').value, 'DD/MM/YYYY').format('YYYY-MM-DD') : undefined,
            language: this.form.get('language').value,
            image_url: this.import ? this.image : '',
            badge_id: this.form.get('badge_id').value === '' ? undefined : this.form.get('badge_id').value,
        };
        this.elementsService.postElement(body).subscribe(function (res) {
            if (!_this.import) {
                var archivo = new FormData();
                archivo.append('archivo', _this.file.nativeElement.files[0]);
                _this.elementsService.uploadImage(archivo, res.id).subscribe(function (_res) {
                    _this.snackbar.open(res.message, 'INFO', {
                        horizontalPosition: _this.horizontalPos,
                        verticalPosition: _this.verticalPos,
                        duration: 5000,
                        panelClass: 'green',
                    });
                    _this.fuseProgressBarService.hide();
                    _this.router.navigate(['elements/consult']);
                }, function (err) {
                    console.log(err);
                    _this.snackbar.open(err.error.message, 'ERROR', {
                        horizontalPosition: _this.horizontalPos,
                        verticalPosition: _this.verticalPos,
                        duration: 5000,
                        panelClass: 'red',
                    });
                    _this.elementsService.deleteElement(res.id).subscribe(function (_res) { });
                    _this.fuseProgressBarService.hide();
                });
            }
            else {
                _this.snackbar.open(res.message, 'INFO', {
                    horizontalPosition: _this.horizontalPos,
                    verticalPosition: _this.verticalPos,
                    duration: 5000,
                    panelClass: 'green',
                });
                _this.fuseProgressBarService.hide();
                _this.router.navigate(['elements/consult']);
            }
        }, function (err) {
            _this.snackbar.open(err.error.message, 'ERROR', {
                horizontalPosition: _this.horizontalPos,
                verticalPosition: _this.verticalPos,
                duration: 5000,
                panelClass: 'red'
            });
            _this.fuseProgressBarService.hide();
        });
    };
    CreateComponent.prototype.cancelCreate = function () {
        this.cleanData();
        this.image = null;
        this.imagePath = null;
        this.file.nativeElement.value = '';
        this.import = false;
    };
    CreateComponent.prototype.cleanData = function () {
        this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]],
            issuer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)]],
            issuer_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)],
            duration: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$')],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)],
            criterion: [''],
            materiality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            level: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            score: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$')]],
            expire_at: [''],
            language: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            badge_id: ['']
        });
        // this.form.get('issuer').markAsTouched();
        // this.form.get('issuer_url').markAsTouched();
        this.skills = [];
    };
    CreateComponent.prototype.ngDoCheck = function () {
        // if(this.form.get('issuer').value) {
        //     this.form.get('issuer_url').setValidators([Validators.required, Validators.pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)]);
        // } else {
        //     this.form.get('issuer_url').setValidators(Validators.pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/));
        // }
        // if(this.form.get('issuer_url').value) {
        //     this.form.get('issuer').setValidators(Validators.required);
        // } else {
        //     this.form.get('issuer').setValidators(Validators.maxLength(20));
        // }
        // this.form.get('issuer_url').updateValueAndValidity();
        // this.form.get('issuer').updateValueAndValidity();
    };
    CreateComponent.prototype.searchChanged = function () {
        var _this = this;
        this.searchForm.valueChanges.subscribe(function (form) {
            if (form.search === '')
                _this.badgesToShow = _this.badges;
            else {
                _this.badgesToShow = [];
                _this.badges.forEach(function (badge) {
                    if (badge.name.toLowerCase().includes(form.search.toLowerCase()))
                        _this.badgesToShow.push(badge);
                });
            }
        });
    };
    CreateComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length !== 1)
            return;
        if (files[0].type !== 'image/png') {
            this.snackbar.open(this.translate.instant('CREATE.IMAGE_TYPE_ERROR'), 'ERROR', {
                horizontalPosition: this.horizontalPos,
                verticalPosition: this.verticalPos,
                duration: 5000,
                panelClass: 'red',
            });
            return;
        }
        if (files[0].size > 2097152) {
            this.snackbar.open(this.translate.instant('CREATE.MAX_FILE_SIZE'), 'ERROR', {
                horizontalPosition: this.horizontalPos,
                verticalPosition: this.verticalPos,
                duration: 5000,
                panelClass: 'red',
            });
            // this.data.imgURL = null;
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.image = reader.result;
        };
    };
    CreateComponent.prototype.removeImage = function () {
        this.file.nativeElement.value = '';
        this.image = null;
        this.imagePath = null;
    };
    CreateComponent.prototype.goHome = function () {
        var _this = this;
        var dialog = this.dialog.open(CancelDialogComponent, {
            data: {}
        });
        dialog.afterClosed().subscribe(function (res) {
            if (typeof res !== 'undefined')
                _this.router.navigate(['elements/consult']);
        });
    };
    CreateComponent.prototype.ngOnDestroy = function () {
        this.elementsService.elementName = '';
    };
    CreateComponent.ctorParameters = function () { return [
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _elements_service__WEBPACK_IMPORTED_MODULE_6__["ElementsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_10__["FuseProgressBarService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file', { static: false }),
        __metadata("design:type", Object)
    ], CreateComponent.prototype, "file", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('toggle', { static: true }),
        __metadata("design:type", Object)
    ], CreateComponent.prototype, "toggle", void 0);
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/create/create.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./create.component.scss */ "./src/app/main/elements/create/create.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _elements_service__WEBPACK_IMPORTED_MODULE_6__["ElementsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_10__["FuseProgressBarService"]])
    ], CreateComponent);
    return CreateComponent;
}());

var CancelDialogComponent = /** @class */ (function () {
    function CancelDialogComponent(dialogRef, router, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
    }
    CancelDialogComponent.prototype.ngOnInit = function () {
    };
    CancelDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    CancelDialogComponent.prototype.goHome = function () {
    };
    CancelDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] }
    ]; };
    CancelDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cancel-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!../cancel-dialog/cancel-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/cancel-dialog/cancel-dialog.component.html")).default,
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object])
    ], CancelDialogComponent);
    return CancelDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/elements/detail/detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/main/elements/detail/detail.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  max-height: 90vh !important; }\n\n.img {\n  width: 200px;\n  min-width: 200px;\n  max-height: 255px; }\n\n.hoverable {\n  cursor: pointer !important; }\n\n.hoverable:hover {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9); }\n\n.non-changeable-img {\n  width: 200px;\n  min-width: 200px; }\n\n.import-card {\n  width: 100%;\n  height: 130px;\n  min-height: 130px;\n  overflow: hidden;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.import-card:hover {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9); }\n\n.help-icon {\n  position: relative;\n  top: 2px;\n  padding-left: 8px; }\n\nmat-drawer-content {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.but {\n  width: 90px;\n  height: 40px; }\n\n.hours {\n  position: relative;\n  font-size: 1.2em;\n  right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NvcmlvL3NyYy9qcy9hY3JlZGl0dGEvYXBwLnJ1dGFzLXdlYi9zcmMvYXBwL21haW4vZWxlbWVudHMvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksK0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwrQkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9lbGVtZW50cy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI1NXB4O1xyXG59XHJcblxyXG4uaG92ZXJhYmxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaG92ZXJhYmxlOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xyXG59XHJcblxyXG4ubm9uLWNoYW5nZWFibGUtaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5pbXBvcnQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbXBvcnQtY2FyZDpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxufVxyXG5cclxuLmhlbHAtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcbiAgXHJcbm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmJ1dCB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmhvdXJzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICByaWdodDogOHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/main/elements/detail/detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/elements/detail/detail.component.ts ***!
  \**********************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n/es */ "./src/app/main/elements/i18n/es.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements.service */ "./src/app/main/elements/elements.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
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













var DetailComponent = /** @class */ (function () {
    function DetailComponent(_fuseTranslationLoaderService, _fuseConfigService, router, formBuilder, elementsService, snackbar, translate, dialog, fuseProgressBarService, activatedRoute) {
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseConfigService = _fuseConfigService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.elementsService = elementsService;
        this.snackbar = snackbar;
        this.translate = translate;
        this.dialog = dialog;
        this.fuseProgressBarService = fuseProgressBarService;
        this.activatedRoute = activatedRoute;
        this.action = 'view';
        this.import = false;
        this.loading = true;
        this.defaultImg = 'assets/images/placeholder.png';
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SEMICOLON"]];
        this.materiality = [];
        this.levels = [{ value: 'Fundational', acc_value: 'Foundational', name: null },
            { value: 'Intermediate', acc_value: 'Intermediate', name: null },
            { value: 'Advanced', acc_value: 'Advanced', name: null }];
        this.languages = [{ value: 'es', name: null }, { value: 'en', name: null }, { value: 'pt', name: null },
            { value: 'fr', name: null }, { value: 'other', name: null }];
        this.skills = [];
        this.horizontalPos = 'center';
        this.verticalPos = 'top';
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_4__["locale"]);
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
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.fuseProgressBarService.show();
        this.levels.forEach(function (level) { return level.name = _this.translate.instant('LEVEL.'.concat(level.value)); });
        this.languages.forEach(function (lang) { return lang.name = _this.translate.instant('LANGUAGES.'.concat(lang.value)); });
        this.form = this.formBuilder.group({
            name: [],
            issuer: [],
            issuer_url: [],
            category: [],
            duration: [],
            description: [],
            criterion: [],
            materiality: [],
            level: [],
            score: [],
            expire_at: [],
            language: []
        });
        var id;
        this.activatedRoute.paramMap.subscribe(function (res) {
            id = parseInt(res.params.elementId);
        });
        this.getMateriality();
        this.getElement(id);
    };
    DetailComponent.prototype.ngDoCheck = function () {
        // if(this.form.get('issuer').value) {
        //     this.form.get('issuer_url').setValidators([Validators.required, Validators.pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)]);
        // } else {
        //     this.form.get('issuer_url').setValidators(Validators.pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/));
        // }
        // if(this.form.get('issuer_url').value) {
        //     this.form.get('issuer').setValidators(Validators.required);
        // } else {
        //     this.form.get('issuer').setValidators(Validators.maxLength(20));
        // }
        // this.form.get('issuer_url').updateValueAndValidity();
        // this.form.get('issuer').updateValueAndValidity();
    };
    DetailComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.skills.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
    };
    DetailComponent.prototype.remove = function (skill) {
        var index = this.skills.indexOf(skill);
        if (index >= 0) {
            this.skills.splice(index, 1);
        }
    };
    DetailComponent.prototype.getElement = function (id) {
        var _this = this;
        this.elementsService.getElement(id).subscribe(function (res) {
            _this.loading = false;
            _this.element = res;
            _this.elementsService.elementName = res.name;
            _this.initializeForm();
            if (_this.element.badge_id) {
                _this.import = true;
            }
            if (_this.element.image_url.includes('http')) {
                _this.image = _this.element.image_url;
                _this.oldImage = _this.element.image_url;
            }
            else {
                _this.elementsService.getImage(_this.element.id).subscribe(function (res) {
                    var reader = new FileReader();
                    reader.readAsDataURL(res);
                    reader.onload = function (event) {
                        _this.image = reader.result;
                        _this.oldImage = reader.result;
                    };
                });
            }
            _this.fuseProgressBarService.hide();
            _this.form.disable();
        });
    };
    DetailComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            name: [this.element.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]],
            issuer: [this.element.issuer, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)],
            issuer_url: [this.element.issuer_url, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)],
            category: [this.element.category, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)],
            duration: [this.element.duration, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$')],
            description: [this.element.description, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)],
            criterion: [this.element.criterion],
            materiality: [this.element.materiality, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            level: [this.element.level, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            score: [this.element.score, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$')]],
            expire_at: [this.element.expire_at],
            language: [this.element.language, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        this.skills = this.element.skills.trim().length > 0 ? this.element.skills.split(';') : [];
        // this.form.get('issuer').markAsTouched();
        // this.form.get('issuer_url').markAsTouched();
    };
    DetailComponent.prototype.resetValues = function () {
        this.action = 'view';
        this.image = this.oldImage;
        this.initializeForm();
    };
    DetailComponent.prototype.getMateriality = function () {
        var _this = this;
        this.elementsService.getMateriality().subscribe(function (res) {
            res.forEach(function (el) { return _this.materiality.push({ value: el.descripcion, name: _this.translate.instant('MATERIALITY.'.concat(el.descripcion)) }); });
        });
    };
    DetailComponent.prototype.edit = function () {
        var _this = this;
        this.fuseProgressBarService.show();
        var date;
        if (this.form.get('expire_at').value) {
            if (moment__WEBPACK_IMPORTED_MODULE_12__(this.form.get('expire_at').value, 'DD/MM/YYYY').format('YYYY-MM-DD') == 'Invalid date') {
                date = moment__WEBPACK_IMPORTED_MODULE_12__(this.form.get('expire_at').value, 'YYYY-MM-DDLTSZ').format('YYYY-MM-DD');
            }
            else {
                date = moment__WEBPACK_IMPORTED_MODULE_12__(this.form.get('expire_at').value, 'DD/MM/YYYY').format('YYYY-MM-DD');
            }
        }
        var body = {
            id: parseInt(this.element.id),
            name: this.form.get('name').value,
            issuer: this.form.get('issuer').value,
            issuer_url: this.form.get('issuer_url').value ? this.form.get('issuer_url').value : undefined,
            category: this.form.get('category').value,
            duration: this.form.get('duration').value ? parseInt(this.form.get('duration').value) : undefined,
            description: this.form.get('description').value,
            skills: this.skills.join(';'),
            criterion: this.form.get('criterion').value,
            materiality: this.form.get('materiality').value,
            level: this.form.get('level').value,
            score: parseInt(this.form.get('score').value),
            expire_at: date,
            language: this.form.get('language').value,
            image_url: this.import ? this.image : this.element.image_url,
            badge_id: this.element.badge_id
        };
        if (!this.import && this.image !== this.oldImage) {
            var archivo = new FormData();
            archivo.append('archivo', this.file.nativeElement.files[0]);
            this.elementsService.uploadImage(archivo, parseInt(this.element.id)).subscribe(function (res) {
                _this.elementsService.putElement(body).subscribe(function (_res) {
                    _this.snackbar.open(_res.message, 'INFO', {
                        horizontalPosition: _this.horizontalPos,
                        verticalPosition: _this.verticalPos,
                        duration: 5000,
                        panelClass: 'green',
                    });
                    _this.fuseProgressBarService.hide();
                    _this.router.navigate(['elements/consult']);
                }, function (err) {
                    console.log(err);
                    _this.snackbar.open(err.error.message, 'ERROR', {
                        horizontalPosition: _this.horizontalPos,
                        verticalPosition: _this.verticalPos,
                        duration: 5000,
                        panelClass: 'red',
                    });
                    _this.fuseProgressBarService.hide();
                });
            }, function (err) {
                console.log(err);
                _this.snackbar.open(err.error.message, 'ERROR', {
                    horizontalPosition: _this.horizontalPos,
                    verticalPosition: _this.verticalPos,
                    duration: 5000,
                    panelClass: 'red',
                });
                _this.fuseProgressBarService.hide();
            });
        }
        else {
            this.elementsService.putElement(body).subscribe(function (_res) {
                _this.snackbar.open(_res.message, 'INFO', {
                    horizontalPosition: _this.horizontalPos,
                    verticalPosition: _this.verticalPos,
                    duration: 5000,
                    panelClass: 'green',
                });
                _this.fuseProgressBarService.hide();
                _this.router.navigate(['elements/consult']);
            }, function (err) {
                console.log(err);
                _this.snackbar.open(err.error.message, 'ERROR', {
                    horizontalPosition: _this.horizontalPos,
                    verticalPosition: _this.verticalPos,
                    duration: 5000,
                    panelClass: 'red',
                });
                _this.fuseProgressBarService.hide();
            });
        }
    };
    DetailComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length !== 1)
            return;
        if (files[0].type !== 'image/png') {
            this.snackbar.open(this.translate.instant('CREATE.IMAGE_TYPE_ERROR'), 'ERROR', {
                horizontalPosition: this.horizontalPos,
                verticalPosition: this.verticalPos,
                duration: 5000,
                panelClass: 'red',
            });
            return;
        }
        if (files[0].size > 2097152) {
            this.snackbar.open(this.translate.instant('CREATE.MAX_FILE_SIZE'), 'ERROR', {
                horizontalPosition: this.horizontalPos,
                verticalPosition: this.verticalPos,
                duration: 5000,
                panelClass: 'red',
            });
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.image = reader.result;
        };
    };
    DetailComponent.prototype.goBack = function () {
        // const dialog = this.dialog.open(CancelDialogComponent, {
        //     data: {
        //     }
        // });
        // dialog.afterClosed().subscribe(res => {
        //     if(typeof res !== 'undefined') this.router.navigate(['elements/consult']);
        // })
        this.router.navigate(['elements/consult']);
    };
    DetailComponent.prototype.getTimestamp = function () {
        if (!this.date)
            this.date = Date.now();
        return this.date;
    };
    DetailComponent.prototype.ngOnDestroy = function () {
        this.elementsService.elementName = '';
    };
    DetailComponent.ctorParameters = function () { return [
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _elements_service__WEBPACK_IMPORTED_MODULE_6__["ElementsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_10__["FuseProgressBarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file', { static: false }),
        __metadata("design:type", Object)
    ], DetailComponent.prototype, "file", void 0);
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/detail/detail.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./detail.component.scss */ "./src/app/main/elements/detail/detail.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _elements_service__WEBPACK_IMPORTED_MODULE_6__["ElementsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_10__["FuseProgressBarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/main/elements/element/element.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main/elements/element/element.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".general-text {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: 1.2em;\n  max-height: 3.6em;\n  font-size: 0.95em; }\n\n.button-div {\n  width: 49.5%;\n  height: 100%;\n  text-align: center;\n  cursor: pointer; }\n\n.button-div:hover {\n  background-color: #cacaca; }\n\n.left {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.right {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NvcmlvL3NyYy9qcy9hY3JlZGl0dGEvYXBwLnJ1dGFzLXdlYi9zcmMvYXBwL21haW4vZWxlbWVudHMvZWxlbWVudC9lbGVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksNEJBQTRCO0VBQzVCLCtCQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9lbGVtZW50cy9lbGVtZW50L2VsZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VuZXJhbC10ZXh0IHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDMuNmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbn1cclxuXHJcbi5idXR0b24tZGl2IHtcclxuICAgIHdpZHRoOiA0OS41JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbi1kaXY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/elements/element/element.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/elements/element/element.component.ts ***!
  \************************************************************/
/*! exports provided: ElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementComponent", function() { return ElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements.service */ "./src/app/main/elements/elements.service.ts");
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


var ElementComponent = /** @class */ (function () {
    function ElementComponent(service, changesDetector) {
        this.service = service;
        this.changesDetector = changesDetector;
        this.view = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.defaultImg = 'assets/images/placeholder.png';
    }
    ElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.element.image_url.includes('http')) {
            this.url = this.element.image_url;
        }
        else {
            this.service.getImage(this.element.id).subscribe(function (res) {
                var reader = new FileReader();
                reader.readAsDataURL(res);
                reader.onload = function (event) {
                    _this.url = reader.result;
                };
            });
        }
    };
    ElementComponent.prototype.ngAfterViewChecked = function () {
        this.changesDetector.detectChanges();
    };
    ElementComponent.prototype.getTimestamp = function () {
        if (!this.date)
            this.date = Date.now();
        return this.date;
    };
    ElementComponent.prototype.getEllipsis = function (str) {
        if (str.length < 70)
            return str;
        return str.substring(0, 70).trim() + '...';
    };
    ElementComponent.ctorParameters = function () { return [
        { type: _elements_service__WEBPACK_IMPORTED_MODULE_1__["ElementsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('element'),
        __metadata("design:type", Object)
    ], ElementComponent.prototype, "element", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ElementComponent.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ElementComponent.prototype, "delete", void 0);
    ElementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'element',
            template: __importDefault(__webpack_require__(/*! raw-loader!./element.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/element/element.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./element.component.scss */ "./src/app/main/elements/element/element.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_elements_service__WEBPACK_IMPORTED_MODULE_1__["ElementsService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ElementComponent);
    return ElementComponent;
}());



/***/ }),

/***/ "./src/app/main/elements/elements.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/main/elements/elements.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZWxlbWVudHMvZWxlbWVudHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/main/elements/elements.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/elements/elements.component.ts ***!
  \*****************************************************/
/*! exports provided: ElementsComponent, DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsComponent", function() { return ElementsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/es */ "./src/app/main/elements/i18n/es.ts");
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements.service */ "./src/app/main/elements/elements.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
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









var ElementsComponent = /** @class */ (function () {
    function ElementsComponent(_fuseTranslationLoaderService, _fuseConfigService, router, dialog, elementsService, snackbar, fuseProgressBarService) {
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseConfigService = _fuseConfigService;
        this.router = router;
        this.dialog = dialog;
        this.elementsService = elementsService;
        this.snackbar = snackbar;
        this.fuseProgressBarService = fuseProgressBarService;
        this.loading = true;
        this.elements = [];
        this.horizontalPos = 'center';
        this.verticalPos = 'top';
        this._fuseTranslationLoaderService.loadTranslations(_i18n_es__WEBPACK_IMPORTED_MODULE_4__["locale"]);
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
    ElementsComponent.prototype.ngOnInit = function () {
        this.fuseProgressBarService.show();
        this.getElements();
    };
    ElementsComponent.prototype.getElements = function () {
        var _this = this;
        this.elementsService.getElementList().subscribe(function (res) {
            _this.elements = res;
            _this.loading = false;
            _this.fuseProgressBarService.hide();
        });
    };
    ElementsComponent.prototype.deleteElement = function (id) {
        var _this = this;
        var dialog = this.dialog.open(DeleteDialogComponent, {
            data: {}
        });
        dialog.afterClosed().subscribe(function (res) {
            _this.fuseProgressBarService.show();
            if (typeof res !== 'undefined') {
                _this.elementsService.deleteElement(id).subscribe(function (res) {
                    if (res.status == 500) {
                        _this.snackbar.open(res.message, 'ERROR', {
                            horizontalPosition: _this.horizontalPos,
                            verticalPosition: _this.verticalPos,
                            duration: 5000,
                            panelClass: 'red'
                        });
                    }
                    else {
                        _this.snackbar.open(res.message, 'INFO', {
                            horizontalPosition: _this.horizontalPos,
                            verticalPosition: _this.verticalPos,
                            duration: 5000,
                            panelClass: 'green'
                        });
                    }
                    _this.getElements();
                }, function (err) {
                    _this.snackbar.open(err.error.message, 'ERROR', {
                        horizontalPosition: _this.horizontalPos,
                        verticalPosition: _this.verticalPos,
                        duration: 5000,
                        panelClass: 'red'
                    });
                    _this.fuseProgressBarService.hide();
                });
            }
        });
    };
    ElementsComponent.prototype.viewElement = function (id) {
        this.router.navigate(['elements/detail/' + id]);
    };
    ElementsComponent.ctorParameters = function () { return [
        { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"] },
        { type: _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _elements_service__WEBPACK_IMPORTED_MODULE_5__["ElementsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_8__["FuseProgressBarService"] }
    ]; };
    ElementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'elements',
            template: __importDefault(__webpack_require__(/*! raw-loader!./elements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/elements.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./elements.component.scss */ "./src/app/main/elements/elements.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["FuseTranslationLoaderService"],
            _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _elements_service__WEBPACK_IMPORTED_MODULE_5__["ElementsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_8__["FuseProgressBarService"]])
    ], ElementsComponent);
    return ElementsComponent;
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
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./delete-dialog/delete-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/elements/delete-dialog/delete-dialog.component.html")).default,
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/elements/elements.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/elements/elements.module.ts ***!
  \**************************************************/
/*! exports provided: ElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsModule", function() { return ElementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _elements_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./elements.component */ "./src/app/main/elements/elements.component.ts");
/* harmony import */ var _element_element_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./element/element.component */ "./src/app/main/elements/element/element.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create/create.component */ "./src/app/main/elements/create/create.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/main/elements/detail/detail.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
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
        path: 'consult',
        component: _elements_component__WEBPACK_IMPORTED_MODULE_13__["ElementsComponent"]
    },
    {
        path: 'create',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_15__["CreateComponent"]
    },
    {
        path: 'detail/:elementId',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_16__["DetailComponent"]
    }
];
var ElementsModule = /** @class */ (function () {
    function ElementsModule() {
    }
    ElementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _elements_component__WEBPACK_IMPORTED_MODULE_13__["ElementsComponent"],
                _element_element_component__WEBPACK_IMPORTED_MODULE_14__["ElementComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_15__["CreateComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_16__["DetailComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_15__["CancelDialogComponent"],
                _elements_component__WEBPACK_IMPORTED_MODULE_13__["DeleteDialogComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"]
            ],
            exports: [
                _elements_component__WEBPACK_IMPORTED_MODULE_13__["ElementsComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_15__["CreateComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_16__["DetailComponent"]
            ],
            entryComponents: [_create_create_component__WEBPACK_IMPORTED_MODULE_15__["CancelDialogComponent"], _elements_component__WEBPACK_IMPORTED_MODULE_13__["DeleteDialogComponent"]]
        })
    ], ElementsModule);
    return ElementsModule;
}());



/***/ }),

/***/ "./src/app/main/elements/i18n/es.ts":
/*!******************************************!*\
  !*** ./src/app/main/elements/i18n/es.ts ***!
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
        'ELEMENTS': {}, 'CREATE': {
            "TYPE_ELEMENT": "Tipo de Elemento",
            "NAME": "Nombre",
            "ISSUER": "Emisor",
            "ISSUER_URL": "URL del emisor",
            "CRITERION": "Criterio",
            "MATERIALITY": "Materialidad",
            "DESCRIPTION": "Descripción",
            "CATEGORY": "Categoría",
            "DURATION": "Duración",
            "DURATION_HRS": "Duración en horas",
            "IMAGE_WARN": "Atención: La imagen es obligatoria",
            "TIME": "Duración",
            "SKILLS": "Skills/Competencias",
            "TAGS": "Etiquetas",
            "CREATION_TIME": "Fecha de Creación",
            "EXPIRE_AT": "Fecha de Expiracion",
            "LANGUAGE": "Idioma",
            "SCORE": "Puntuacion",
            "LEVEL": "Nivel",
            "NEW_ELEMENT": "Nuevo Elemento",
            "MAX_FILE_SIZE": "El tamaño de la imagen no puede exceder los 2MB",
            "TO_IMPORT": "Insignia a importar",
            "NONE": "Ninguna",
            "IMAGE_TYPE_ERROR": "El tipo de archivo debe ser PNG",
            "IMAGE_TOO_SMALL": "La resolución de la imagen debe ser mínimo de 600x600",
            "VIEW_ELEMENT": "Ver Elemento",
        }, 'IMPORT': {
            'TITLE': 'Importar',
            'HELP': 'Al seleccionar una insignia preexistente, se completarán los campos del elemento a partir de la información que contiene dicha insignia.'
        }, 'CANCEL_OP': {
            'YES': "Sí",
            'NO': 'No',
            'TITLE': '¿Está seguro que desea salir?',
            'MESSAGE': 'Se perderán los datos no registrados.'
        }, 'DELETE_OP': {
            'YES': "Sí",
            'NO': 'No',
            'TITLE': '¿Está seguro que desea eliminar este elemento?',
            'MESSAGE': 'Esta acción no podrá deshacerse.'
        }, "ERROR": {
            "REQUIRED": "Este campo es requerido",
            "MIN_LENGTH_5": "El campo debe tener al menos 5 caracteres",
            "MAX_LENGTH_20": "El campo debe tener como máximo 20 caracteres",
            "MAX_LENGTH_500": "El campo debe tener como máximo 500 caracteres",
            "NUMERIC": "Este campo debe ser numérico y mayor o igual a 0",
            "URL_PATTERN": "Este campo requiere una URL válida"
        }, "LEVEL": {
            "Foundational": "Fundamentos",
            "Fundational": "Fundamentos",
            "Intermediate": "Intermedio",
            "Advanced": "Avanzado"
        }, "MATERIALITY": {
            "KNOWLEDGE": "Conocimiento",
            "SKILL": "Competencia",
            "EXCELLENCE": "Excelencia",
            "CERTIFICATION": "Certificación",
            "EXPERTISE": "Experticia",
            "MEMBERSHIP": "Membresía",
            "PARTICIPATION": "Participación"
        }, "LANGUAGES": {
            "es": "Español",
            "en": "Inglés",
            "pt": "Portugués",
            "fr": "Francés",
            "other": "Otro"
        },
        "SEARCH": "Buscar",
        "SAVE": "Guardar",
        "DELETE": "Eliminar",
        "EDIT": "Editar",
        "VIEW": 'Ver',
        "CANCEL": "Cancelar",
        "CLEAN": "Limpiar",
        "MODIFY": 'Modificar',
        "EXIT": "Salir",
        "GO_BACK": "Volver",
        "NO_ELEMENTS": "Todavía no hay elementos creados. Empieza a crearlos entrando al menú Crear Elementos."
    }
};


/***/ })

}]);
//# sourceMappingURL=main-elements-elements-module.js.map